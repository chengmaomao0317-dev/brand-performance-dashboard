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
  // 新增記錄時複製上面的格式
];
