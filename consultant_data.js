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
    date:'2026-07-06', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 張夢珊，公關新客，素人拍攝+體驗體雕，未成交
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
    date:'2026-07-01', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:31999},  // 張思婷，體驗+購課+產品成交
      {type:'新客', trial_amt:999, total_amt:999},    // 徐旻娸，體驗未成交
    ]
  },
  {
    date:'2026-07-01', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999},  // 簡翊婷，體驗+購課成交
    ]
  },
  {
    date:'2026-07-01', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'黃詩涵',
    clients:[
      {type:'新客', trial_amt:0, total_amt:3500},  // 張思婷，自有產品成交
    ]
  },
  {
    date:'2026-07-02', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 王乙緊，體驗未成交
    ]
  },
  {
    date:'2026-07-03', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 胡氏梅幸，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},  // 蔡沐妘，體驗未成交
    ]
  },
  {
    date:'2026-07-03', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999},  // 林育伶，體驗+購課成交
    ]
  },
  {
    date:'2026-07-04', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 王芋予，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:35999},  // 張玓菁，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:15399},  // 劉育函，體驗+購課成交
    ]
  },
  {
    date:'2026-07-07', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},    // 歐陽儀芳，體驗未成交
      {type:'新客', trial_amt:999, total_amt:40999},  // 康雅婷，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:999},    // 林妍廷，體驗未成交
    ]
  },
  {
    date:'2026-07-08', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'黃詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 陳香伶，體驗未成交
    ]
  },
  {
    date:'2026-07-08', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000},  // 范睿緋，體驗+購課成交
    ]
  },
  {
    date:'2026-07-08', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 駱瓏心，體驗+購課成交
    ]
  },
  {
    date:'2026-07-09', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},   // 王詩琦，體驗未成交
      {type:'新客', trial_amt:6000, total_amt:6000},  // 劉姵君，體驗未成交
    ]
  },
  {
    date:'2026-07-09', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'黃詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999},  // 吳昀芷，體驗+購課成交
    ]
  },
  {
    date:'2026-07-09', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 陳明姿，分享客
    ]
  },
  {
    date:'2026-07-10', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 謝宜澄，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},  // 劉佳兪，體驗未成交
    ]
  },
  {
    date:'2026-07-14', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:1299, total_amt:35299},  // 吳育儒，體驗+購課成交
      {type:'新客', trial_amt:0,    total_amt:0},      // 陳沛漾，當天未施作未成交
      {type:'新客', trial_amt:999,  total_amt:2999},   // 沈芸緯，體驗+付訂成交
    ]
  },
  {
    date:'2026-07-14', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'黃詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 黃筱媛，體驗未成交
    ]
  },
  {
    date:'2026-07-14', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:880},  // 楊雅萍，產品成交
    ]
  },
  {
    date:'2026-07-15', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999},  // 郭柔慈，體驗+購課成交
    ]
  },
  {
    date:'2026-07-16', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:1299, total_amt:1299},   // 鄭于玫，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:15399},  // 吳泳緻，體驗+購課成交
    ]
  },
  {
    date:'2026-07-17', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999},  // 鄧怡珊，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:75999},  // 曾詠津，體驗+購課成交
    ]
  },
  {
    date:'2026-07-17', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 楊妍甄，體驗+購課成交
    ]
  },
  {
    date:'2026-07-18', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399},  // 李佳紋，體驗+購課成交
    ]
  },
  {
    date:'2026-07-18', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15724},  // 廖佳螢，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-07-21', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:35999},  // 裴雅涵，體驗+購課成交
      {type:'新客', trial_amt:2298, total_amt:19698},  // Waranya，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-07-22', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 陳惠美，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},  // 吳芷琳，體驗未成交
    ]
  },
  {
    date:'2026-07-22', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 林禹彤，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},  // 陳妍炘，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},  // 黃詩涵，體驗未成交
    ]
  },
  {
    date:'2026-07-23', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 黃婉綺，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},  // 林佳瑩，體驗未成交
    ]
  },
  {
    date:'2026-07-23', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 洪嘉君，體驗未成交
    ]
  },
  {
    date:'2026-07-24', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999},  // 陳乙慧，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:35999},  // 黃君薇，體驗+購課成交
    ]
  },
  {
    date:'2026-07-25', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},   // 蕭阡蘋，體驗未成交
      {type:'新客', trial_amt:6000, total_amt:6000},  // 郭惠青，體驗未成交
    ]
  },
  {
    date:'2026-07-25', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 張妙盈，體驗未成交
    ]
  },
  {
    date:'2026-07-25', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'黃詩涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},  // 陳顥匀，體驗未成交
    ]
  },
  {
    date:'2026-07-28', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},    // 王思尹，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:15999},  // 洪豐家，體驗+購課成交
      {type:'新客', trial_amt:999,  total_amt:999},    // 洪珮雯，體驗未成交
    ]
  },
  {
    date:'2026-07-28', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'何欣穎',
    clients:[
      {type:'新客', trial_amt:0, total_amt:23997},  // 吳宇涵，直接購課成交
    ]
  },
  {
    date:'2026-07-28', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'黃詩涵',
    clients:[
      {type:'新客', trial_amt:9497, total_amt:9497},  // 黃家筠，多項體驗未成交
    ]
  },
  {
    date:'2026-07-29', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:6000, total_amt:8000},  // 莊殷如，體驗+加購成交
      {type:'新客', trial_amt:999,  total_amt:8499},  // 陳玉真，體驗+付訂成交
    ]
  },
  {
    date:'2026-07-29', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 郭風吟，體驗未成交
    ]
  },
  {
    date:'2026-07-29', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'黃詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 黃姿勛，體驗未成交
    ]
  },
  {
    date:'2026-07-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999,   total_amt:15999},  // 王子瀅，體驗+購課成交
      {type:'新客', trial_amt:10499, total_amt:96699},  // 陳晏圻，體驗+購課成交
    ]
  },
  {
    date:'2026-07-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:1499},  // 張晧庭，體驗未成交
    ]
  },
  {
    date:'2026-07-31', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 林芳毓，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:999},    // 黃莉芳，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},    // 張嘉芯，體驗未成交
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
      {type:'其他', trial_amt:0,    total_amt:0},     // 鄧珮姍，胡馨芳分享消耗未購
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
  {
    date:'2026-08-03', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:6998},  // 高立蓁，體驗+購課成交
    ]
  },
  {
    date:'2026-08-03', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:1998},  // 阮湘云，雙體驗未成交
    ]
  },
  {
    date:'2026-08-03', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},   // 劉品瑩，體驗未成交
      {type:'新客', trial_amt:2000, total_amt:2000},   // 劉瑋亭，體驗未成交
      {type:'新客', trial_amt:2000, total_amt:37000},  // 陳韻帆，體驗+購課成交
    ]
  },
  {
    date:'2026-08-03', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:17000},  // 江怡霓，體驗+購課成交
    ]
  },
  {
    date:'2026-08-03', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},      // Lou Som Lei，嘟嘟唇，已到未購
      {type:'新客', trial_amt:0, total_amt:14999},  // 范美儀，微整雕塑喬亞登HAJ，成交
      {type:'新客', trial_amt:0, total_amt:14999},  // Lou Sio Kei，微整雕塑喬亞登HAJ，成交
      {type:'新客', trial_amt:0, total_amt:0},      // 蔡旻庭，肉毒，已到未購
    ]
  },
  {
    date:'2026-07-01', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 李宜蓁，體驗+購課成交
    ]
  },
  {
    date:'2026-07-02', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 陳蕙安，體驗未成交
    ]
  },
  {
    date:'2026-07-03', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},    // 陳承欣，體驗未成交
      {type:'新客', trial_amt:999, total_amt:35999},  // 張禎云，體驗+購課成交
    ]
  },
  {
    date:'2026-07-06', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:18999},  // 陳妍安，體驗+購課成交
    ]
  },
  {
    date:'2026-07-06', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:18999},  // 彭琦雁，體驗+購課成交
    ]
  },
  {
    date:'2026-07-07', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 孫明琼，體驗未成交
    ]
  },
  {
    date:'2026-07-08', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 王沛文，體驗未成交
    ]
  },
  {
    date:'2026-07-09', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:7997},  // 賴怡君，體驗+購課成交
    ]
  },
  {
    date:'2026-07-14', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 吳美妘，體驗未成交
    ]
  },
  {
    date:'2026-07-15', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 梁書寧，體驗未成交
    ]
  },
  {
    date:'2026-07-16', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:53999},  // 楊雅珺，體驗+購課成交
    ]
  },
  {
    date:'2026-07-17', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399},  // 張瀞心，體驗+購課成交
    ]
  },
  {
    date:'2026-07-17', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:6000, total_amt:66000},  // 張庭瑄，體驗+購課成交
    ]
  },
  {
    date:'2026-07-21', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:2199},  // 陳冠瑋，體驗+加購成交
      {type:'新客', trial_amt:999, total_amt:999},   // 李明穎，體驗未成交
    ]
  },
  {
    date:'2026-07-21', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},   // 陳映蓉，體驗未成交
    ]
  },
  {
    date:'2026-07-23', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:37749},  // 吳宥萱，體驗+購課成交
    ]
  },
  {
    date:'2026-07-23', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 賴咨羽，分享體驗課消耗，未購
    ]
  },
  {
    date:'2026-07-23', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:18999},  // 彭郁庭，體驗+購課成交
    ]
  },
  {
    date:'2026-07-25', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 程連芳，使用朋友療程，未購
    ]
  },
  {
    date:'2026-07-27', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:16499},  // 李雅淇，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-07-28', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 吳淑貞，體驗未成交
    ]
  },
  {
    date:'2026-07-29', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:37574},  // 吳旻真，體驗+購課成交(生日95折)
    ]
  },
  {
    date:'2026-07-30', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:18999},   // 黃筱嵐，體驗+購課成交
    ]
  },
  {
    date:'2026-07-30', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:1499},   // 梅芷嵐，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:19749},  // 鐘凡真，體驗+購課成交
    ]
  },
  {
    date:'2026-07-31', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:1499},  // 劉明鳳，體驗未成交
    ]
  },
  {
    date:'2026-07-01', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 翁若婷，體驗未成交
    ]
  },
  {
    date:'2026-07-02', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:6998},   // 李芯瑀，體驗+購課成交
      {type:'新客', trial_amt:2000, total_amt:47000},  // 李詩婷，體驗+購課成交
      {type:'新客', trial_amt:999,  total_amt:15999},  // 鄧詠薇，體驗+購課成交
    ]
  },
  {
    date:'2026-07-06', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:3297, total_amt:3297},  // 陳韋潔，三項體驗未成交
    ]
  },
  {
    date:'2026-07-07', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 王亞凡，體驗未成交
    ]
  },
  {
    date:'2026-07-09', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},  // 王易昕，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:999},   // 李則頤，體驗未成交
      {type:'新客', trial_amt:6999, total_amt:6999},  // 呂家菲，體驗未成交
    ]
  },
  {
    date:'2026-07-13', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:4000},  // 許綉君，體驗+訂金成交
    ]
  },
  {
    date:'2026-07-14', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:6000, total_amt:20000},  // 諏訪間裕子，體驗+購課成交
      {type:'新客', trial_amt:999,  total_amt:999},    // 季汶欣，體驗未成交
    ]
  },
  {
    date:'2026-07-16', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:16400},  // 張彩鳳，體驗+購課成交
      {type:'新客', trial_amt:2000, total_amt:2000},   // 林依萱，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:2999},   // 蕭雅雯，體驗+訂金成交
    ]
  },
  {
    date:'2026-07-20', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 吳仁勝，體驗+購課成交
    ]
  },
  {
    date:'2026-07-21', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399},  // 許綵渝，體驗+購課成交
    ]
  },
  {
    date:'2026-07-22', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 張采汝，使用分享課程，未購
    ]
  },
  {
    date:'2026-07-23', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:1998},  // 林卉羚，雙體驗未成交
    ]
  },
  {
    date:'2026-07-23', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 翁慧婷，體驗未成交
    ]
  },
  {
    date:'2026-07-25', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999, total_amt:18999},  // 楊靜純，體驗+購課成交
      {type:'新客', trial_amt:0,   total_amt:24000},  // 洪綺妍，購課成交
    ]
  },
  {
    date:'2026-07-25', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 鄭羽芯，使用分享課程，未購
    ]
  },
  {
    date:'2026-07-27', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399},  // 劉胤映，體驗+購課成交
    ]
  },
  {
    date:'2026-07-27', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:3299, total_amt:20699},  // 涂愷恩，體驗+購課成交
      {type:'新客', trial_amt:999,  total_amt:15399},  // 趙羿婷，體驗+購課成交
    ]
  },
  {
    date:'2026-07-28', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:2099},  // 洪映珊，體驗+產品成交
    ]
  },
  {
    date:'2026-07-29', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:4000},  // 陳菲，體驗+訂金成交
    ]
  },
  {
    date:'2026-07-30', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:1499},  // 李佳玲，體驗未成交
    ]
  },
  {
    date:'2026-07-31', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 賴品璇，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},  // 許庭婷，體驗未成交
    ]
  },
  {
    date:'2026-07-31', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},   // 李可薇，體驗未成交
      {type:'新客', trial_amt:2298, total_amt:42797},  // 陳昱蓁，體驗+購課成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},  // 洪于芳，黑眼圈填充，已到未購
      {type:'新客', trial_amt:0, total_amt:0},  // 楊季穎，頰凹填充，已到未購
    ]
  },
  {
    date:'2026-08-04', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳霄',
    clients:[
      {type:'新客', trial_amt:0, total_amt:9999},   // 方詠瑩，膠原蛋白針，成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:36000},  // 蘇汗雨，瑞斯朗HA，成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:84000},  // 王莉貞，膠原蛋白針+微晶瓷，成交
      {type:'新客', trial_amt:0, total_amt:0},      // 黃家朋，臉部埋線，已到未購
      {type:'新客', trial_amt:0, total_amt:0},      // 黃培鈞，臉部埋線，已到未購
      {type:'新客', trial_amt:0, total_amt:0},      // 劉育婷，黑眼圈填充，已到未購
    ]
  },
  {
    date:'2026-08-04', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:14999},  // 朱安湘，喬亞登HAJ，成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000},  // 張雁筑，體驗+購課成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2498, total_amt:5498},   // 黃絹嵐，體驗+購課成交
      {type:'新客', trial_amt:2000, total_amt:37000},  // 王暄蕙，體驗+購課成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 黃珮慈，體驗+購課成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 陳愷霓，使用分享課程，未購
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 周思彤，體驗未成交
    ]
  },
  // 新增記錄時複製上面的格式
];
