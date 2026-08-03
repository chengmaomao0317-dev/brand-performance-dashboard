// ══════════════════════════════════════════
//  CONSULTANT DATA（諮詢師成交記錄）
//  每筆記錄格式：
//  {
//    date:'YYYY-MM-DD', storeKey:'wo_dongmen', store:'東門',
//    brand:'原渥', brandKey:'wo', consultant:'邱家榆',
//    clients:[ {type:'新客', trial_amt:2000, total_amt:37000}, ... ]
//  }
//  成交判斷：total_amt > trial_amt
// ══════════════════════════════════════════

const CONSULTANT_RECORDS = [
  {
    date:'2026-07-04', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000},
      {type:'新客', trial_amt:6000, total_amt:6000},
    ]
  },
  {
    date:'2026-07-06', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:4000},
      {type:'新客', trial_amt:999,  total_amt:15999},
    ]
  },
  {
    date:'2026-07-07', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},
      {type:'新客', trial_amt:1998, total_amt:1998},
    ]
  },
  {
    date:'2026-07-08', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},  // 鄭悅伶，諮詢未成交
    ]
  },
  {
    date:'2026-07-09', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},  // 蕭涵齡，體驗未成交
    ]
  },
  {
    date:'2026-07-13', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:11498},  // 蔡子琪，體驗+購課成交
    ]
  },
  {
    date:'2026-07-16', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15399},  // 高裴孜，體驗+購課成交
      {type:'新客', trial_amt:6000, total_amt:6000},   // 蕭宇涵，體驗未成交（說要回去考慮）
    ]
  },
  {
    date:'2026-07-18', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:1999, total_amt:1999},   // 游璟柔，體驗未成交
      {type:'新客', trial_amt:6000, total_amt:10000},  // 小崎将宏，體驗+加購成交
    ]
  },
  {
    date:'2026-07-20', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 鮑芊鍌，體驗未成交
    ]
  },
  {
    date:'2026-07-21', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 劉玥岑，體驗未成交
    ]
  },
  {
    date:'2026-07-22', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:7499, total_amt:31499},  // 賴威琳，雙體驗+購課成交
    ]
  },
  {
    date:'2026-07-24', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:41280},  // 江芃萱，體驗+購課+產品成交
      {type:'新客', trial_amt:999,  total_amt:15399},  // 林幸蓉，體驗+購課成交
    ]
  },
  {
    date:'2026-07-25', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},   // Maria，體驗未成交
      {type:'新客', trial_amt:2000, total_amt:17000}, // 劉昀竺，體驗+購課成交
      {type:'新客', trial_amt:999,  total_amt:16499}, // 陳宜雅，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-07-28', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399},  // 施秀諭，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:15399},  // 趙立媗，體驗+購課成交
    ]
  },
  {
    date:'2026-07-29', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 賴彥潔，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:15399},  // 張鳳書，體驗+購課成交
    ]
  },
  {
    date:'2026-07-30', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:17000}, // 陳亮晴，體驗+購課成交（黃韻凌加購那筆不計）
      {type:'新客', trial_amt:999,  total_amt:3779},  // 陳亭亘，體驗+加購+訂金成交
    ]
  },
  {
    date:'2026-07-31', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 張可慧，體驗+購課成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000},  // 吳佩穎，體驗+購課成交
      {type:'新客', trial_amt:999,  total_amt:999},    // 劉瑞淇，體驗未成交
      {type:'新客', trial_amt:2000, total_amt:37000},  // 吳芯伝，體驗+購課成交
      {type:'新客', trial_amt:8498, total_amt:8498},   // 王哲慧，三項體驗未成交
    ]
  },
  {
    date:'2026-07-02', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:7999},  // 蔡函穎，體驗+購課成交
    ]
  },
  {
    date:'2026-07-04', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:7499, total_amt:41497},  // 鄧沛昕，體驗+購課+產品成交
      {type:'新客', trial_amt:2298, total_amt:19698},  // 賴琬婷，體驗+購課+產品成交
      {type:'新客', trial_amt:999,  total_amt:999},    // 許凱晴，體驗未成交
    ]
  },
  {
    date:'2026-07-07', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:35999},  // 黃珈琪，體驗+購課成交
      {type:'新客', trial_amt:4798, total_amt:40798},  // 朱珮綺，體驗+購課成交
    ]
  },
  {
    date:'2026-07-08', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:6000,  total_amt:10000},  // 林昕妍，體驗+加購成交
      {type:'新客', trial_amt:1998, total_amt:76998},   // 張妍庭，體驗+購課成交
    ]
  },
  {
    date:'2026-07-09', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 杜建蓉，體驗未成交
    ]
  },
  {
    date:'2026-07-14', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},   // 程意筑，體驗未成交（待業中沒預算）
      {type:'新客', trial_amt:2498, total_amt:2498},  // 廖紫伶，雙體驗未成交
    ]
  },
  {
    date:'2026-07-15', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999},  // 趙莉沂，體驗+購課成交
    ]
  },
  {
    date:'2026-07-16', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15999},  // 林明柔，體驗+購課成交
      {type:'新客', trial_amt:2000, total_amt:2000},   // 楊雁涵，體驗未成交
    ]
  },
  {
    date:'2026-07-17', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:11498},  // 謝明栖，體驗+購課成交
    ]
  },
  {
    date:'2026-07-18', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999},  // 黃嫻慈，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:17042},  // 吳宥婕，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:15399},  // 鄭裕蓉，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:999},    // 林喜玲，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},    // 洪靖宜，體驗未成交
    ]
  },
  {
    date:'2026-07-20', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:1998},  // 柯怡如，雙體驗未成交
    ]
  },
  {
    date:'2026-07-21', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},   // 王洵，體驗未成交
      {type:'新客', trial_amt:2298, total_amt:8297},  // 鄭詠馨，體驗+購課成交
      {type:'新客', trial_amt:999,  total_amt:999},   // 高詩琴，體驗未成交
    ]
  },
  {
    date:'2026-07-22', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:91857},  // 陳芊妤，體驗+購課+產品成交
      {type:'新客', trial_amt:1499, total_amt:11498},  // 林珍妮，體驗+購課成交
      {type:'新客', trial_amt:999,  total_amt:999},    // 左凱瑩，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:999},    // 羅涵玉，體驗未成交
      {type:'新客', trial_amt:1998, total_amt:46898},  // 黃夙君，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-07-23', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2498, total_amt:2498},  // 汪育成，雙體驗未成交
    ]
  },
  {
    date:'2026-07-24', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},    // 陳欣暖，體驗未成交（超過預算）
      {type:'新客', trial_amt:999, total_amt:35999},  // 林雅慧，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:999},    // 高子婷，體驗未成交
    ]
  },
  {
    date:'2026-07-25', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},  // 李羿萱，雙體驗未成交
      {type:'新客', trial_amt:2000, total_amt:2000},  // 李家璇，雙體驗未成交
    ]
  },
  {
    date:'2026-07-27', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:6000, total_amt:30000},  // 彭圓安，體驗+購課成交
    ]
  },
  {
    date:'2026-07-28', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:6998},  // 郭姿璃，體驗+購課成交
    ]
  },
  {
    date:'2026-07-30', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399},  // 藍亨宜，體驗+購課成交
    ]
  },
  {
    date:'2026-07-31', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2999, total_amt:18499},  // 姜臻昀，體驗+購課+產品成交
      {type:'新客', trial_amt:999,  total_amt:35999},  // 劉雅欣，體驗+購課成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 吳苡婕，體驗未成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 何意敏，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:999},    // 范姜渦，體驗未成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},    // 李明瑤，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},    // 鄭沛淇，體驗未成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:1499},  // 詹閔智，體驗未成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15399}, // 王靖雯，體驗+購課成交
      {type:'新客', trial_amt:0,    total_amt:0},     // 鄧珮姍，胡馨芳分享消耗未成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:118999},  // 林鈺淳
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:14999},   // 黃舒鈺
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:16498},   // 曾宛如（9999+6499）
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳霽',
    clients:[
      {type:'新客', trial_amt:0, total_amt:41799},   // 徐雅瑩
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:22999},   // 張雅嵐
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:63000},   // 胡巧儀（48000+15000）
    ]
  },
  // 新增記錄時複製上面的格式
];
