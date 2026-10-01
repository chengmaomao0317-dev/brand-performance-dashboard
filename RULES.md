# 原渥集團業績總表 — 日報輸入規則

> 每次新 session 開始，先讀此檔，再讀 consultant_data.js 尾端確認最新記錄位置。

## ⛔️ 絕對禁止（未經明確指示不得執行）

1. **不得自行修改 BrandPerformanceReport.html 的任何程式碼**，除非用戶明確說「改一下程式」或「修這個 bug」
2. **不得自行推斷「這個邏輯應該也要修」然後去動程式**，只做被要求的那一件事
3. 資料輸入（consultant_data.js）與程式修改（html）是兩件完全不同的事，不要混為一談

---

## 主要檔案

| 檔案 | 用途 |
|------|------|
| `consultant_data.js` | 所有日報資料（CONSULTANT_RECORDS 陣列） |
| `BrandPerformanceReport.html` | 儀表板主程式 |

---

## Store / Brand 對應表

| storeKey | store（顯示名） | brand | brandKey |
|----------|----------------|-------|----------|
| wo_zhanqian | 站前 | 原渥 | wo |
| wo_daan | 大安 | 原渥 | wo |
| wo_zhongxiao | 忠孝 | 原渥 | wo |
| wo_dongmen | 東門 | 原渥 | wo |
| wo_taichung | 台中 | 原渥 | wo |
| wo_banqiao | 板橋 | 原渥 | wo |
| ki_taipei | 台北 | 原綺 | ki |
| ki_taichung | 台中 | 原綺 | ki |

> **⚠️ 館前 = 站前**，是同一間店。storeKey 一律用 `wo_zhanqian`，store 欄位寫 `'站前'`。日報上寫「館前」，程式裡永遠是「站前」。  
> 診所東門 → storeKey:`wo_dongmen`, brandKey:`ki`, consultant:`公司`（東門原綺客一律掛公司）。

---

## 各店已知諮詢師（銷售美容師）

| 店 | 諮詢師（只有這些人才能當 consultant） |
|----|--------|
| 站前（館前） | 廖梓涵、吳凱婷（郭于瑄不是站前的，出現掛公司） |
| 大安 | 李晨研、蔡亞衫（**注意：是衫（衣字旁）不是杉（木字旁）**） |
| 板橋 | 森珮筠（**唯一**諮詢師） |
| 東門 | 邱家榆 |
| 忠孝 | 王詩涵、翁筱芸 |
| 台北原綺（ki_taipei） | 陳詩喬、柯孟君、計品卉、陳甯（注意：是甯不是寧不是寗） |
| 台中原渥（wo_taichung） | 郭子萍、林雨芑（**注意：是芑不是芸**）、何欣穎、呂秋玫（同時也在台中原綺） |
| 台中原綺（ki_taichung） | 郭子萍、呂秋玫（**林雨芑不是台中原綺諮詢師，出現掛公司**） |

> **⚠️ 絕對規則**：某客人在 A 店出現，但她的銷售美容師是 B 店的人 → 掛 `consultant:'公司'`，**不是**掛那個諮詢師的名字。
>
> 例：廖梓涵（站前）的客人跑到板橋消耗 → 板橋記錄掛 `公司`，**不是**掛廖梓涵。
>
> 操作美容師（如板橋的白婕瑜、蕭雅琪）≠ 諮詢師，**不可**填入 consultant 欄位。

---

## 計算規則

### 成交判斷
```
成交 = (total_amt || 0) > (trial_amt || 0)
```
- `total_amt == trial_amt` → **未成交**（只付體驗費）
- `total_amt > trial_amt` → **成交**

### 新客客單（業績）
```
新客客單 = total_amt - trial_amt   （體驗費不計入業績）
```

### 金額欄位填寫
- `trial_amt`：體驗費金額（無體驗填 0）
- `total_amt`：**小計金額合計**（含體驗費＋課程金額＋自有產品，但不含外來產品）
- 自有產品（纖萃、肌管等）→ **該諮詢師（銷售美容師）賣的才計入 total_amt**；若產品行的銷售美容師是別人（如操作美容師）則不計
- 外來產品 → **不計入 total_amt**
- 贈品堂數、滿額贈 → 不影響金額，不用記

### ⚠️ 未成交但有付體驗費 → trial_amt 一定要填，不能留 0
- 客人付了體驗費但未成交：`trial_amt: 體驗金額, total_amt: 同上`（等於體驗費）
- Dashboard 店總業績計算：**未成交的 trial_amt 也會加進去**（`totalAmt += c.trial_amt`）
- 所以即使未成交，只要有付體驗費，那筆錢就必須記在 trial_amt，否則業績會少算
- 範例：舊客付體驗體雕 $2000 未成交 → `{type:'舊客', trial_amt:2000, total_amt:2000, name:'邱意雯'}`

### 業績計算規則（新客 vs 舊客 差異）
- **新客**：不計體驗價。成交業績 = 課程價（total_amt - trial_amt）；未成交 = $0
- **舊客**：**有付體驗費才算舊客業績**。沒有體驗費、直接買課程或產品的舊客 → 不計入舊客業績
  - 有 trial_amt > 0 → newTrial++，revSum += max(total_amt, trial_amt)（也計入舊客客單）
  - trial_amt == 0 → 不加入 newTrial 也不加 revSum（例如吉菲純買課程不算）
- Dashboard `calcOldClientStats`：`if(trial_amt > 0){ newTrial++; revSum += Math.max(total_amt, trial_amt); }`

### 原綺（診所）新客
原綺客人直接付全額，**無體驗費概念** → `trial_amt: 0`，`total_amt` 填實際付款課程金額。

---

## 特殊情況處理

### 跑店消耗（非本店諮詢師的客人）
- 掛 `consultant:'公司'`，**不是刪掉**
- 範例：某客人的諮詢師是大安李晨研，但跑到板橋消耗 → 板橋那天記一筆 `consultant:'公司'`

### 東門原綺客 ⚠️ 永遠掛公司
- 固定：`storeKey:'wo_dongmen'`, `brandKey:'ki'`, `consultant:'公司'`
- **不管銷售美容師是誰，一律 consultant:'公司'**，這條規則沒有例外

### 導客業務 vs 諮詢師
- `導客業務` 是來客來源，不影響 consultant 欄位填寫
- `導客業務:公司` 不代表要掛公司；只有**跑店消耗**才掛公司

### 分享客 → 掛公司
- 客人使用他人分享的課程堂數（分享客）→ `consultant:'公司'`
- 無論銷售美容師填誰，分享客一律掛公司

### 沒有操作美容師 = 沒有消耗 = 不記錄
- 日報中若某客人**操作美容師欄位為空**，代表當天沒有實際進行任何服務
- 不管有沒有銷售美容師，**一律不記錄進 consultant_data.js**
- 例：只是換禮、領贈品、機票換好禮等無實際療程操作的記錄 → 跳過

### noCount:true
- 防止同一客人被多個諮詢師重複計算客數時使用
- 需要時加在 client 物件內：`{type:'舊客', ..., noCount:true}`

---

## 記錄格式範例

```javascript
{ date:'2026-09-28', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
  consultant:'森珮筠', clients:[
    {type:'新客', trial_amt:999,  total_amt:9999, name:'王小明'}, // 體驗999+課程9000，成交
    {type:'新客', trial_amt:999,  total_amt:999,  name:'李小花'}, // 體驗999，未成交
    {type:'舊客', trial_amt:0,    total_amt:4999, name:'張美美'}, // 九宮格4999
    {type:'舊客', trial_amt:0,    total_amt:0,    name:'陳小英'}, // 消耗，無付款
  ]},
```

**type 三種值**：`'新客'` / `'舊客'` / `'舊客體驗'`

---

## 新增記錄位置

插入在 `consultant_data.js` 最後一行 `// 新增記錄時複製上面的格式` 的**上方**。

---

## 已知 BrandPerformanceReport.html Bug 修復記錄

### 新客明細 popup 業績顯示 total_amt 未扣體驗費（已修）
位置：`showNewClientDetail` 函數，`byDate[rec.date].push(...)` 的 `amt` 欄位。  
修復：`amt: c.total_amt` → `amt: (c.total_amt||0)-(c.trial_amt||0)`

### 100% 達成率顯示紅色（已修）
根因：`p >= 1` 嚴格比較，而 `Math.round(p*100)` 會將 0.998 顯示為 100%。  
修復：所有判斷改用 `Math.round(p*100) >= 100`，共 4 處：
- `achCls` 函數
- 每月達標狀況 `chip`（兩處）
- 週報簡表 `achBadge`（改用已計算的 `pct >= 100`）
