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
  // ─── 3月 月匯總 (2026-03-31) ───────────────────────────
  {
    date:'2026-03-31', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      // 10成交 (2×25213 + 8×25212 = 252,122)
      {type:'新客',trial_amt:0,total_amt:25213},{type:'新客',trial_amt:0,total_amt:25213},
      {type:'新客',trial_amt:0,total_amt:25212},{type:'新客',trial_amt:0,total_amt:25212},
      {type:'新客',trial_amt:0,total_amt:25212},{type:'新客',trial_amt:0,total_amt:25212},
      {type:'新客',trial_amt:0,total_amt:25212},{type:'新客',trial_amt:0,total_amt:25212},
      {type:'新客',trial_amt:0,total_amt:25212},{type:'新客',trial_amt:0,total_amt:25212},
      // 7未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      // 19成交 (4×22510 + 15×22509 = 427,675)
      {type:'新客',trial_amt:0,total_amt:22510},{type:'新客',trial_amt:0,total_amt:22510},
      {type:'新客',trial_amt:0,total_amt:22510},{type:'新客',trial_amt:0,total_amt:22510},
      {type:'新客',trial_amt:0,total_amt:22509},{type:'新客',trial_amt:0,total_amt:22509},
      {type:'新客',trial_amt:0,total_amt:22509},{type:'新客',trial_amt:0,total_amt:22509},
      {type:'新客',trial_amt:0,total_amt:22509},{type:'新客',trial_amt:0,total_amt:22509},
      {type:'新客',trial_amt:0,total_amt:22509},{type:'新客',trial_amt:0,total_amt:22509},
      {type:'新客',trial_amt:0,total_amt:22509},{type:'新客',trial_amt:0,total_amt:22509},
      {type:'新客',trial_amt:0,total_amt:22509},{type:'新客',trial_amt:0,total_amt:22509},
      {type:'新客',trial_amt:0,total_amt:22509},{type:'新客',trial_amt:0,total_amt:22509},
      {type:'新客',trial_amt:0,total_amt:22509},
      // 6未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      // 21成交 (3×17241 + 18×17240 = 362,043)
      {type:'新客',trial_amt:0,total_amt:17241},{type:'新客',trial_amt:0,total_amt:17241},
      {type:'新客',trial_amt:0,total_amt:17241},{type:'新客',trial_amt:0,total_amt:17240},
      {type:'新客',trial_amt:0,total_amt:17240},{type:'新客',trial_amt:0,total_amt:17240},
      {type:'新客',trial_amt:0,total_amt:17240},{type:'新客',trial_amt:0,total_amt:17240},
      {type:'新客',trial_amt:0,total_amt:17240},{type:'新客',trial_amt:0,total_amt:17240},
      {type:'新客',trial_amt:0,total_amt:17240},{type:'新客',trial_amt:0,total_amt:17240},
      {type:'新客',trial_amt:0,total_amt:17240},{type:'新客',trial_amt:0,total_amt:17240},
      {type:'新客',trial_amt:0,total_amt:17240},{type:'新客',trial_amt:0,total_amt:17240},
      {type:'新客',trial_amt:0,total_amt:17240},{type:'新客',trial_amt:0,total_amt:17240},
      {type:'新客',trial_amt:0,total_amt:17240},{type:'新客',trial_amt:0,total_amt:17240},
      {type:'新客',trial_amt:0,total_amt:17240},
      // 3未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      // 15成交 (11×17154 + 4×17153 = 257,306)
      {type:'新客',trial_amt:0,total_amt:17154},{type:'新客',trial_amt:0,total_amt:17154},
      {type:'新客',trial_amt:0,total_amt:17154},{type:'新客',trial_amt:0,total_amt:17154},
      {type:'新客',trial_amt:0,total_amt:17154},{type:'新客',trial_amt:0,total_amt:17154},
      {type:'新客',trial_amt:0,total_amt:17154},{type:'新客',trial_amt:0,total_amt:17154},
      {type:'新客',trial_amt:0,total_amt:17154},{type:'新客',trial_amt:0,total_amt:17154},
      {type:'新客',trial_amt:0,total_amt:17154},{type:'新客',trial_amt:0,total_amt:17153},
      {type:'新客',trial_amt:0,total_amt:17153},{type:'新客',trial_amt:0,total_amt:17153},
      {type:'新客',trial_amt:0,total_amt:17153},
      // 7未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      // 10成交 (1×14629 + 9×14628 = 146,281)
      {type:'新客',trial_amt:0,total_amt:14629},{type:'新客',trial_amt:0,total_amt:14628},
      {type:'新客',trial_amt:0,total_amt:14628},{type:'新客',trial_amt:0,total_amt:14628},
      {type:'新客',trial_amt:0,total_amt:14628},{type:'新客',trial_amt:0,total_amt:14628},
      {type:'新客',trial_amt:0,total_amt:14628},{type:'新客',trial_amt:0,total_amt:14628},
      {type:'新客',trial_amt:0,total_amt:14628},{type:'新客',trial_amt:0,total_amt:14628},
      // 7未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      // 14成交 (6×20814 + 8×20813 = 291,388)
      {type:'新客',trial_amt:0,total_amt:20814},{type:'新客',trial_amt:0,total_amt:20814},
      {type:'新客',trial_amt:0,total_amt:20814},{type:'新客',trial_amt:0,total_amt:20814},
      {type:'新客',trial_amt:0,total_amt:20814},{type:'新客',trial_amt:0,total_amt:20814},
      {type:'新客',trial_amt:0,total_amt:20813},{type:'新客',trial_amt:0,total_amt:20813},
      {type:'新客',trial_amt:0,total_amt:20813},{type:'新客',trial_amt:0,total_amt:20813},
      {type:'新客',trial_amt:0,total_amt:20813},{type:'新客',trial_amt:0,total_amt:20813},
      {type:'新客',trial_amt:0,total_amt:20813},{type:'新客',trial_amt:0,total_amt:20813},
      // 6未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      // 8成交 (3×35365 + 5×35364 = 282,915)
      {type:'新客',trial_amt:0,total_amt:35365},{type:'新客',trial_amt:0,total_amt:35365},
      {type:'新客',trial_amt:0,total_amt:35365},{type:'新客',trial_amt:0,total_amt:35364},
      {type:'新客',trial_amt:0,total_amt:35364},{type:'新客',trial_amt:0,total_amt:35364},
      {type:'新客',trial_amt:0,total_amt:35364},{type:'新客',trial_amt:0,total_amt:35364},
      // 3未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      // 18成交 (2×30990 + 16×30989 = 557,804)
      {type:'新客',trial_amt:0,total_amt:30990},{type:'新客',trial_amt:0,total_amt:30990},
      {type:'新客',trial_amt:0,total_amt:30989},{type:'新客',trial_amt:0,total_amt:30989},
      {type:'新客',trial_amt:0,total_amt:30989},{type:'新客',trial_amt:0,total_amt:30989},
      {type:'新客',trial_amt:0,total_amt:30989},{type:'新客',trial_amt:0,total_amt:30989},
      {type:'新客',trial_amt:0,total_amt:30989},{type:'新客',trial_amt:0,total_amt:30989},
      {type:'新客',trial_amt:0,total_amt:30989},{type:'新客',trial_amt:0,total_amt:30989},
      {type:'新客',trial_amt:0,total_amt:30989},{type:'新客',trial_amt:0,total_amt:30989},
      {type:'新客',trial_amt:0,total_amt:30989},{type:'新客',trial_amt:0,total_amt:30989},
      {type:'新客',trial_amt:0,total_amt:30989},{type:'新客',trial_amt:0,total_amt:30989},
      // 22未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'何欣穎',
    clients:[
      // 4成交 (2×38375 + 2×38374 = 153,498)
      {type:'新客',trial_amt:0,total_amt:38375},{type:'新客',trial_amt:0,total_amt:38375},
      {type:'新客',trial_amt:0,total_amt:38374},{type:'新客',trial_amt:0,total_amt:38374},
      // 1未成交
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      // 24成交 (23×31151 + 1×31150 = 747,623)
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31151},
      {type:'新客',trial_amt:0,total_amt:31151},{type:'新客',trial_amt:0,total_amt:31150},
      // 14未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-03-31', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      // 12成交 (12×22371 = 268,452)
      {type:'新客',trial_amt:0,total_amt:22371},{type:'新客',trial_amt:0,total_amt:22371},
      {type:'新客',trial_amt:0,total_amt:22371},{type:'新客',trial_amt:0,total_amt:22371},
      {type:'新客',trial_amt:0,total_amt:22371},{type:'新客',trial_amt:0,total_amt:22371},
      {type:'新客',trial_amt:0,total_amt:22371},{type:'新客',trial_amt:0,total_amt:22371},
      {type:'新客',trial_amt:0,total_amt:22371},{type:'新客',trial_amt:0,total_amt:22371},
      {type:'新客',trial_amt:0,total_amt:22371},{type:'新客',trial_amt:0,total_amt:22371},
      // 18未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  // ─── 4月 月匯總 (2026-04-30) ───────────────────────────
  {
    date:'2026-04-30', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      // 18成交 (3×18742 + 15×18741 = 337,341)
      {type:'新客',trial_amt:0,total_amt:18742},{type:'新客',trial_amt:0,total_amt:18742},
      {type:'新客',trial_amt:0,total_amt:18742},{type:'新客',trial_amt:0,total_amt:18741},
      {type:'新客',trial_amt:0,total_amt:18741},{type:'新客',trial_amt:0,total_amt:18741},
      {type:'新客',trial_amt:0,total_amt:18741},{type:'新客',trial_amt:0,total_amt:18741},
      {type:'新客',trial_amt:0,total_amt:18741},{type:'新客',trial_amt:0,total_amt:18741},
      {type:'新客',trial_amt:0,total_amt:18741},{type:'新客',trial_amt:0,total_amt:18741},
      {type:'新客',trial_amt:0,total_amt:18741},{type:'新客',trial_amt:0,total_amt:18741},
      {type:'新客',trial_amt:0,total_amt:18741},{type:'新客',trial_amt:0,total_amt:18741},
      {type:'新客',trial_amt:0,total_amt:18741},{type:'新客',trial_amt:0,total_amt:18741},
      // 7未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      // 21成交 (11×20943 + 10×20942 = 439,793)
      {type:'新客',trial_amt:0,total_amt:20943},{type:'新客',trial_amt:0,total_amt:20943},
      {type:'新客',trial_amt:0,total_amt:20943},{type:'新客',trial_amt:0,total_amt:20943},
      {type:'新客',trial_amt:0,total_amt:20943},{type:'新客',trial_amt:0,total_amt:20943},
      {type:'新客',trial_amt:0,total_amt:20943},{type:'新客',trial_amt:0,total_amt:20943},
      {type:'新客',trial_amt:0,total_amt:20943},{type:'新客',trial_amt:0,total_amt:20943},
      {type:'新客',trial_amt:0,total_amt:20943},{type:'新客',trial_amt:0,total_amt:20942},
      {type:'新客',trial_amt:0,total_amt:20942},{type:'新客',trial_amt:0,total_amt:20942},
      {type:'新客',trial_amt:0,total_amt:20942},{type:'新客',trial_amt:0,total_amt:20942},
      {type:'新客',trial_amt:0,total_amt:20942},{type:'新客',trial_amt:0,total_amt:20942},
      {type:'新客',trial_amt:0,total_amt:20942},{type:'新客',trial_amt:0,total_amt:20942},
      {type:'新客',trial_amt:0,total_amt:20942},
      // 7未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      // 22成交 (21×33837 + 1×33836 = 744,413)
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33837},
      {type:'新客',trial_amt:0,total_amt:33837},{type:'新客',trial_amt:0,total_amt:33836},
      // 9未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      // 24成交 (11×15702 + 13×15701 = 376,835)
      {type:'新客',trial_amt:0,total_amt:15702},{type:'新客',trial_amt:0,total_amt:15702},
      {type:'新客',trial_amt:0,total_amt:15702},{type:'新客',trial_amt:0,total_amt:15702},
      {type:'新客',trial_amt:0,total_amt:15702},{type:'新客',trial_amt:0,total_amt:15702},
      {type:'新客',trial_amt:0,total_amt:15702},{type:'新客',trial_amt:0,total_amt:15702},
      {type:'新客',trial_amt:0,total_amt:15702},{type:'新客',trial_amt:0,total_amt:15702},
      {type:'新客',trial_amt:0,total_amt:15702},{type:'新客',trial_amt:0,total_amt:15701},
      {type:'新客',trial_amt:0,total_amt:15701},{type:'新客',trial_amt:0,total_amt:15701},
      {type:'新客',trial_amt:0,total_amt:15701},{type:'新客',trial_amt:0,total_amt:15701},
      {type:'新客',trial_amt:0,total_amt:15701},{type:'新客',trial_amt:0,total_amt:15701},
      {type:'新客',trial_amt:0,total_amt:15701},{type:'新客',trial_amt:0,total_amt:15701},
      {type:'新客',trial_amt:0,total_amt:15701},{type:'新客',trial_amt:0,total_amt:15701},
      {type:'新客',trial_amt:0,total_amt:15701},{type:'新客',trial_amt:0,total_amt:15701},
      // 10未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      // 17成交 (12×18645 + 5×18644 = 316,960)
      {type:'新客',trial_amt:0,total_amt:18645},{type:'新客',trial_amt:0,total_amt:18645},
      {type:'新客',trial_amt:0,total_amt:18645},{type:'新客',trial_amt:0,total_amt:18645},
      {type:'新客',trial_amt:0,total_amt:18645},{type:'新客',trial_amt:0,total_amt:18645},
      {type:'新客',trial_amt:0,total_amt:18645},{type:'新客',trial_amt:0,total_amt:18645},
      {type:'新客',trial_amt:0,total_amt:18645},{type:'新客',trial_amt:0,total_amt:18645},
      {type:'新客',trial_amt:0,total_amt:18645},{type:'新客',trial_amt:0,total_amt:18645},
      {type:'新客',trial_amt:0,total_amt:18644},{type:'新客',trial_amt:0,total_amt:18644},
      {type:'新客',trial_amt:0,total_amt:18644},{type:'新客',trial_amt:0,total_amt:18644},
      {type:'新客',trial_amt:0,total_amt:18644},
      // 3未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      // 13成交 (8×24549 + 5×24548 = 319,132)
      {type:'新客',trial_amt:0,total_amt:24549},{type:'新客',trial_amt:0,total_amt:24549},
      {type:'新客',trial_amt:0,total_amt:24549},{type:'新客',trial_amt:0,total_amt:24549},
      {type:'新客',trial_amt:0,total_amt:24549},{type:'新客',trial_amt:0,total_amt:24549},
      {type:'新客',trial_amt:0,total_amt:24549},{type:'新客',trial_amt:0,total_amt:24549},
      {type:'新客',trial_amt:0,total_amt:24548},{type:'新客',trial_amt:0,total_amt:24548},
      {type:'新客',trial_amt:0,total_amt:24548},{type:'新客',trial_amt:0,total_amt:24548},
      {type:'新客',trial_amt:0,total_amt:24548},
      // 5未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      // 12成交 (11×33329 + 1×33328 = 399,947)
      {type:'新客',trial_amt:0,total_amt:33329},{type:'新客',trial_amt:0,total_amt:33329},
      {type:'新客',trial_amt:0,total_amt:33329},{type:'新客',trial_amt:0,total_amt:33329},
      {type:'新客',trial_amt:0,total_amt:33329},{type:'新客',trial_amt:0,total_amt:33329},
      {type:'新客',trial_amt:0,total_amt:33329},{type:'新客',trial_amt:0,total_amt:33329},
      {type:'新客',trial_amt:0,total_amt:33329},{type:'新客',trial_amt:0,total_amt:33329},
      {type:'新客',trial_amt:0,total_amt:33329},{type:'新客',trial_amt:0,total_amt:33328},
      // 10未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      // 33成交 (7×22590 + 26×22589 = 745,444)
      {type:'新客',trial_amt:0,total_amt:22590},{type:'新客',trial_amt:0,total_amt:22590},
      {type:'新客',trial_amt:0,total_amt:22590},{type:'新客',trial_amt:0,total_amt:22590},
      {type:'新客',trial_amt:0,total_amt:22590},{type:'新客',trial_amt:0,total_amt:22590},
      {type:'新客',trial_amt:0,total_amt:22590},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},{type:'新客',trial_amt:0,total_amt:22589},
      {type:'新客',trial_amt:0,total_amt:22589},
      // 23未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'呂秋玫',
    clients:[
      // 1成交
      {type:'新客',trial_amt:0,total_amt:36998},
      // 1未成交
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'何欣穎',
    clients:[
      // 4成交 (2×10970 + 2×10969 = 43,878)
      {type:'新客',trial_amt:0,total_amt:10970},{type:'新客',trial_amt:0,total_amt:10970},
      {type:'新客',trial_amt:0,total_amt:10969},{type:'新客',trial_amt:0,total_amt:10969},
      // 1未成交
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      // 26成交 (4×31640 + 22×31639 = 822,618)
      {type:'新客',trial_amt:0,total_amt:31640},{type:'新客',trial_amt:0,total_amt:31640},
      {type:'新客',trial_amt:0,total_amt:31640},{type:'新客',trial_amt:0,total_amt:31640},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      {type:'新客',trial_amt:0,total_amt:31639},{type:'新客',trial_amt:0,total_amt:31639},
      // 18未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-04-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      // 7成交 (7×15954 = 111,678)
      {type:'新客',trial_amt:0,total_amt:15954},{type:'新客',trial_amt:0,total_amt:15954},
      {type:'新客',trial_amt:0,total_amt:15954},{type:'新客',trial_amt:0,total_amt:15954},
      {type:'新客',trial_amt:0,total_amt:15954},{type:'新客',trial_amt:0,total_amt:15954},
      {type:'新客',trial_amt:0,total_amt:15954},
      // 13未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  // ─── 5月 月匯總 (2026-05-31) ───────────────────────────
  {
    date:'2026-05-31', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      // 14成交 (6×23975 + 8×23974 = 335,642)
      {type:'新客',trial_amt:0,total_amt:23975},{type:'新客',trial_amt:0,total_amt:23975},
      {type:'新客',trial_amt:0,total_amt:23975},{type:'新客',trial_amt:0,total_amt:23975},
      {type:'新客',trial_amt:0,total_amt:23975},{type:'新客',trial_amt:0,total_amt:23975},
      {type:'新客',trial_amt:0,total_amt:23974},{type:'新客',trial_amt:0,total_amt:23974},
      {type:'新客',trial_amt:0,total_amt:23974},{type:'新客',trial_amt:0,total_amt:23974},
      {type:'新客',trial_amt:0,total_amt:23974},{type:'新客',trial_amt:0,total_amt:23974},
      {type:'新客',trial_amt:0,total_amt:23974},{type:'新客',trial_amt:0,total_amt:23974},
      // 4未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      // 10成交 (10×27272 = 272,720)
      {type:'新客',trial_amt:0,total_amt:27272},{type:'新客',trial_amt:0,total_amt:27272},
      {type:'新客',trial_amt:0,total_amt:27272},{type:'新客',trial_amt:0,total_amt:27272},
      {type:'新客',trial_amt:0,total_amt:27272},{type:'新客',trial_amt:0,total_amt:27272},
      {type:'新客',trial_amt:0,total_amt:27272},{type:'新客',trial_amt:0,total_amt:27272},
      {type:'新客',trial_amt:0,total_amt:27272},{type:'新客',trial_amt:0,total_amt:27272},
      // 8未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      // 15成交 (15×28149 = 422,235)
      {type:'新客',trial_amt:0,total_amt:28149},{type:'新客',trial_amt:0,total_amt:28149},
      {type:'新客',trial_amt:0,total_amt:28149},{type:'新客',trial_amt:0,total_amt:28149},
      {type:'新客',trial_amt:0,total_amt:28149},{type:'新客',trial_amt:0,total_amt:28149},
      {type:'新客',trial_amt:0,total_amt:28149},{type:'新客',trial_amt:0,total_amt:28149},
      {type:'新客',trial_amt:0,total_amt:28149},{type:'新客',trial_amt:0,total_amt:28149},
      {type:'新客',trial_amt:0,total_amt:28149},{type:'新客',trial_amt:0,total_amt:28149},
      {type:'新客',trial_amt:0,total_amt:28149},{type:'新客',trial_amt:0,total_amt:28149},
      {type:'新客',trial_amt:0,total_amt:28149},
      // 9未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      // 15成交 (9×17471 + 6×17470 = 262,059)
      {type:'新客',trial_amt:0,total_amt:17471},{type:'新客',trial_amt:0,total_amt:17471},
      {type:'新客',trial_amt:0,total_amt:17471},{type:'新客',trial_amt:0,total_amt:17471},
      {type:'新客',trial_amt:0,total_amt:17471},{type:'新客',trial_amt:0,total_amt:17471},
      {type:'新客',trial_amt:0,total_amt:17471},{type:'新客',trial_amt:0,total_amt:17471},
      {type:'新客',trial_amt:0,total_amt:17471},{type:'新客',trial_amt:0,total_amt:17470},
      {type:'新客',trial_amt:0,total_amt:17470},{type:'新客',trial_amt:0,total_amt:17470},
      {type:'新客',trial_amt:0,total_amt:17470},{type:'新客',trial_amt:0,total_amt:17470},
      {type:'新客',trial_amt:0,total_amt:17470},
      // 7未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      // 12成交 (1×12379 + 11×12378 = 148,537)
      {type:'新客',trial_amt:0,total_amt:12379},{type:'新客',trial_amt:0,total_amt:12378},
      {type:'新客',trial_amt:0,total_amt:12378},{type:'新客',trial_amt:0,total_amt:12378},
      {type:'新客',trial_amt:0,total_amt:12378},{type:'新客',trial_amt:0,total_amt:12378},
      {type:'新客',trial_amt:0,total_amt:12378},{type:'新客',trial_amt:0,total_amt:12378},
      {type:'新客',trial_amt:0,total_amt:12378},{type:'新客',trial_amt:0,total_amt:12378},
      {type:'新客',trial_amt:0,total_amt:12378},{type:'新客',trial_amt:0,total_amt:12378},
      // 3未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      // 11成交 (6×15449 + 5×15448 = 169,934)
      {type:'新客',trial_amt:0,total_amt:15449},{type:'新客',trial_amt:0,total_amt:15449},
      {type:'新客',trial_amt:0,total_amt:15449},{type:'新客',trial_amt:0,total_amt:15449},
      {type:'新客',trial_amt:0,total_amt:15449},{type:'新客',trial_amt:0,total_amt:15449},
      {type:'新客',trial_amt:0,total_amt:15448},{type:'新客',trial_amt:0,total_amt:15448},
      {type:'新客',trial_amt:0,total_amt:15448},{type:'新客',trial_amt:0,total_amt:15448},
      {type:'新客',trial_amt:0,total_amt:15448},
      // 5未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      // 12成交 (9×19186 + 3×19185 = 230,229)
      {type:'新客',trial_amt:0,total_amt:19186},{type:'新客',trial_amt:0,total_amt:19186},
      {type:'新客',trial_amt:0,total_amt:19186},{type:'新客',trial_amt:0,total_amt:19186},
      {type:'新客',trial_amt:0,total_amt:19186},{type:'新客',trial_amt:0,total_amt:19186},
      {type:'新客',trial_amt:0,total_amt:19186},{type:'新客',trial_amt:0,total_amt:19186},
      {type:'新客',trial_amt:0,total_amt:19186},{type:'新客',trial_amt:0,total_amt:19185},
      {type:'新客',trial_amt:0,total_amt:19185},{type:'新客',trial_amt:0,total_amt:19185},
      // 11未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      // 16成交 (2×17996 + 14×17995 = 287,922)
      {type:'新客',trial_amt:0,total_amt:17996},{type:'新客',trial_amt:0,total_amt:17996},
      {type:'新客',trial_amt:0,total_amt:17995},{type:'新客',trial_amt:0,total_amt:17995},
      {type:'新客',trial_amt:0,total_amt:17995},{type:'新客',trial_amt:0,total_amt:17995},
      {type:'新客',trial_amt:0,total_amt:17995},{type:'新客',trial_amt:0,total_amt:17995},
      {type:'新客',trial_amt:0,total_amt:17995},{type:'新客',trial_amt:0,total_amt:17995},
      {type:'新客',trial_amt:0,total_amt:17995},{type:'新客',trial_amt:0,total_amt:17995},
      {type:'新客',trial_amt:0,total_amt:17995},{type:'新客',trial_amt:0,total_amt:17995},
      {type:'新客',trial_amt:0,total_amt:17995},{type:'新客',trial_amt:0,total_amt:17995},
      // 18未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'呂秋玫',
    clients:[
      // 1成交
      {type:'新客',trial_amt:0,total_amt:23998},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      // 26成交 (6×29293 + 20×29292 = 761,598)
      {type:'新客',trial_amt:0,total_amt:29293},{type:'新客',trial_amt:0,total_amt:29293},
      {type:'新客',trial_amt:0,total_amt:29293},{type:'新客',trial_amt:0,total_amt:29293},
      {type:'新客',trial_amt:0,total_amt:29293},{type:'新客',trial_amt:0,total_amt:29293},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      {type:'新客',trial_amt:0,total_amt:29292},{type:'新客',trial_amt:0,total_amt:29292},
      // 16未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      // 11成交 (3×28138 + 8×28137 = 309,510)
      {type:'新客',trial_amt:0,total_amt:28138},{type:'新客',trial_amt:0,total_amt:28138},
      {type:'新客',trial_amt:0,total_amt:28138},{type:'新客',trial_amt:0,total_amt:28137},
      {type:'新客',trial_amt:0,total_amt:28137},{type:'新客',trial_amt:0,total_amt:28137},
      {type:'新客',trial_amt:0,total_amt:28137},{type:'新客',trial_amt:0,total_amt:28137},
      {type:'新客',trial_amt:0,total_amt:28137},{type:'新客',trial_amt:0,total_amt:28137},
      {type:'新客',trial_amt:0,total_amt:28137},
      // 6未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-05-31', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'黃詩涵',
    clients:[
      // 3成交 (2×34664 + 1×34663 = 103,991)
      {type:'新客',trial_amt:0,total_amt:34664},{type:'新客',trial_amt:0,total_amt:34664},
      {type:'新客',trial_amt:0,total_amt:34663},
      // 6未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  // ─── 6月 月匯總 (2026-06-30) ───────────────────────────
  {
    date:'2026-06-30', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      // 12成交 (11×8985 + 1×8984 = 107,819)
      {type:'新客',trial_amt:0,total_amt:8985},{type:'新客',trial_amt:0,total_amt:8985},
      {type:'新客',trial_amt:0,total_amt:8985},{type:'新客',trial_amt:0,total_amt:8985},
      {type:'新客',trial_amt:0,total_amt:8985},{type:'新客',trial_amt:0,total_amt:8985},
      {type:'新客',trial_amt:0,total_amt:8985},{type:'新客',trial_amt:0,total_amt:8985},
      {type:'新客',trial_amt:0,total_amt:8985},{type:'新客',trial_amt:0,total_amt:8985},
      {type:'新客',trial_amt:0,total_amt:8985},{type:'新客',trial_amt:0,total_amt:8984},
      // 3未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      // 14成交 (11×16339 + 3×16338 = 228,743)
      {type:'新客',trial_amt:0,total_amt:16339},{type:'新客',trial_amt:0,total_amt:16339},
      {type:'新客',trial_amt:0,total_amt:16339},{type:'新客',trial_amt:0,total_amt:16339},
      {type:'新客',trial_amt:0,total_amt:16339},{type:'新客',trial_amt:0,total_amt:16339},
      {type:'新客',trial_amt:0,total_amt:16339},{type:'新客',trial_amt:0,total_amt:16339},
      {type:'新客',trial_amt:0,total_amt:16339},{type:'新客',trial_amt:0,total_amt:16339},
      {type:'新客',trial_amt:0,total_amt:16339},{type:'新客',trial_amt:0,total_amt:16338},
      {type:'新客',trial_amt:0,total_amt:16338},{type:'新客',trial_amt:0,total_amt:16338},
      // 7未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      // 12成交 (5×28258 + 7×28257 = 339,089)
      {type:'新客',trial_amt:0,total_amt:28258},{type:'新客',trial_amt:0,total_amt:28258},
      {type:'新客',trial_amt:0,total_amt:28258},{type:'新客',trial_amt:0,total_amt:28258},
      {type:'新客',trial_amt:0,total_amt:28258},{type:'新客',trial_amt:0,total_amt:28257},
      {type:'新客',trial_amt:0,total_amt:28257},{type:'新客',trial_amt:0,total_amt:28257},
      {type:'新客',trial_amt:0,total_amt:28257},{type:'新客',trial_amt:0,total_amt:28257},
      {type:'新客',trial_amt:0,total_amt:28257},{type:'新客',trial_amt:0,total_amt:28257},
      // 5未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      // 11成交 (2×24508 + 9×24507 = 269,579)
      {type:'新客',trial_amt:0,total_amt:24508},{type:'新客',trial_amt:0,total_amt:24508},
      {type:'新客',trial_amt:0,total_amt:24507},{type:'新客',trial_amt:0,total_amt:24507},
      {type:'新客',trial_amt:0,total_amt:24507},{type:'新客',trial_amt:0,total_amt:24507},
      {type:'新客',trial_amt:0,total_amt:24507},{type:'新客',trial_amt:0,total_amt:24507},
      {type:'新客',trial_amt:0,total_amt:24507},{type:'新客',trial_amt:0,total_amt:24507},
      {type:'新客',trial_amt:0,total_amt:24507},
      // 11未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      // 10成交 (9×19506 + 1×19505 = 195,059)
      {type:'新客',trial_amt:0,total_amt:19506},{type:'新客',trial_amt:0,total_amt:19506},
      {type:'新客',trial_amt:0,total_amt:19506},{type:'新客',trial_amt:0,total_amt:19506},
      {type:'新客',trial_amt:0,total_amt:19506},{type:'新客',trial_amt:0,total_amt:19506},
      {type:'新客',trial_amt:0,total_amt:19506},{type:'新客',trial_amt:0,total_amt:19506},
      {type:'新客',trial_amt:0,total_amt:19506},{type:'新客',trial_amt:0,total_amt:19505},
      // 9未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      // 10成交 (8×22569 + 2×22568 = 225,688)
      {type:'新客',trial_amt:0,total_amt:22569},{type:'新客',trial_amt:0,total_amt:22569},
      {type:'新客',trial_amt:0,total_amt:22569},{type:'新客',trial_amt:0,total_amt:22569},
      {type:'新客',trial_amt:0,total_amt:22569},{type:'新客',trial_amt:0,total_amt:22569},
      {type:'新客',trial_amt:0,total_amt:22569},{type:'新客',trial_amt:0,total_amt:22569},
      {type:'新客',trial_amt:0,total_amt:22568},{type:'新客',trial_amt:0,total_amt:22568},
      // 6未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      // 18成交 (13×13203 + 5×13202 = 237,649)
      {type:'新客',trial_amt:0,total_amt:13203},{type:'新客',trial_amt:0,total_amt:13203},
      {type:'新客',trial_amt:0,total_amt:13203},{type:'新客',trial_amt:0,total_amt:13203},
      {type:'新客',trial_amt:0,total_amt:13203},{type:'新客',trial_amt:0,total_amt:13203},
      {type:'新客',trial_amt:0,total_amt:13203},{type:'新客',trial_amt:0,total_amt:13203},
      {type:'新客',trial_amt:0,total_amt:13203},{type:'新客',trial_amt:0,total_amt:13203},
      {type:'新客',trial_amt:0,total_amt:13203},{type:'新客',trial_amt:0,total_amt:13203},
      {type:'新客',trial_amt:0,total_amt:13203},{type:'新客',trial_amt:0,total_amt:13202},
      {type:'新客',trial_amt:0,total_amt:13202},{type:'新客',trial_amt:0,total_amt:13202},
      {type:'新客',trial_amt:0,total_amt:13202},{type:'新客',trial_amt:0,total_amt:13202},
      // 9未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      // 30成交 (17×17193 + 13×17192 = 515,777)
      {type:'新客',trial_amt:0,total_amt:17193},{type:'新客',trial_amt:0,total_amt:17193},
      {type:'新客',trial_amt:0,total_amt:17193},{type:'新客',trial_amt:0,total_amt:17193},
      {type:'新客',trial_amt:0,total_amt:17193},{type:'新客',trial_amt:0,total_amt:17193},
      {type:'新客',trial_amt:0,total_amt:17193},{type:'新客',trial_amt:0,total_amt:17193},
      {type:'新客',trial_amt:0,total_amt:17193},{type:'新客',trial_amt:0,total_amt:17193},
      {type:'新客',trial_amt:0,total_amt:17193},{type:'新客',trial_amt:0,total_amt:17193},
      {type:'新客',trial_amt:0,total_amt:17193},{type:'新客',trial_amt:0,total_amt:17193},
      {type:'新客',trial_amt:0,total_amt:17193},{type:'新客',trial_amt:0,total_amt:17193},
      {type:'新客',trial_amt:0,total_amt:17193},{type:'新客',trial_amt:0,total_amt:17192},
      {type:'新客',trial_amt:0,total_amt:17192},{type:'新客',trial_amt:0,total_amt:17192},
      {type:'新客',trial_amt:0,total_amt:17192},{type:'新客',trial_amt:0,total_amt:17192},
      {type:'新客',trial_amt:0,total_amt:17192},{type:'新客',trial_amt:0,total_amt:17192},
      {type:'新客',trial_amt:0,total_amt:17192},{type:'新客',trial_amt:0,total_amt:17192},
      {type:'新客',trial_amt:0,total_amt:17192},{type:'新客',trial_amt:0,total_amt:17192},
      {type:'新客',trial_amt:0,total_amt:17192},{type:'新客',trial_amt:0,total_amt:17192},
      // 13未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'呂秋玫',
    clients:[
      {type:'新客',trial_amt:0,total_amt:30000},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'何欣穎',
    clients:[
      // 2成交 (1×10688 + 1×10687 = 21,375)
      {type:'新客',trial_amt:0,total_amt:10688},{type:'新客',trial_amt:0,total_amt:10687},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      // 17成交 (3×18072 + 14×18071 = 307,210)
      {type:'新客',trial_amt:0,total_amt:18072},{type:'新客',trial_amt:0,total_amt:18072},
      {type:'新客',trial_amt:0,total_amt:18072},{type:'新客',trial_amt:0,total_amt:18071},
      {type:'新客',trial_amt:0,total_amt:18071},{type:'新客',trial_amt:0,total_amt:18071},
      {type:'新客',trial_amt:0,total_amt:18071},{type:'新客',trial_amt:0,total_amt:18071},
      {type:'新客',trial_amt:0,total_amt:18071},{type:'新客',trial_amt:0,total_amt:18071},
      {type:'新客',trial_amt:0,total_amt:18071},{type:'新客',trial_amt:0,total_amt:18071},
      {type:'新客',trial_amt:0,total_amt:18071},{type:'新客',trial_amt:0,total_amt:18071},
      {type:'新客',trial_amt:0,total_amt:18071},{type:'新客',trial_amt:0,total_amt:18071},
      {type:'新客',trial_amt:0,total_amt:18071},
      // 16未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      // 5成交 (4×18209 + 1×18208 = 91,044)
      {type:'新客',trial_amt:0,total_amt:18209},{type:'新客',trial_amt:0,total_amt:18209},
      {type:'新客',trial_amt:0,total_amt:18209},{type:'新客',trial_amt:0,total_amt:18209},
      {type:'新客',trial_amt:0,total_amt:18208},
      // 9未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  {
    date:'2026-06-30', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'黃詩涵',
    clients:[
      // 1成交
      {type:'新客',trial_amt:0,total_amt:22997},
      // 3未成交
      {type:'新客',trial_amt:0,total_amt:0},{type:'新客',trial_amt:0,total_amt:0},
      {type:'新客',trial_amt:0,total_amt:0},
    ]
  },
  // ─── 7月以後 ───────────────────────────────────────────
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
    date:'2026-07-02', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 王乙緊，體驗未成交
    ]
  },
  {
    date:'2026-07-03', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
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
    date:'2026-07-04', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},  // 廖得茗，消耗課程
    ]
  },
  {
    date:'2026-07-07', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
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
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 駱瓏心，體驗+購課成交
    ]
  },
  {
    date:'2026-07-09', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
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
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 謝宜澄，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},  // 劉佳兪，體驗未成交
    ]
  },
  {
    date:'2026-07-14', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
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
    date:'2026-07-15', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999},  // 郭柔慈，體驗+購課成交
    ]
  },
  {
    date:'2026-07-16', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:1299, total_amt:1299},   // 鄭于玫，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:15399},  // 吳泳緻，體驗+購課成交
    ]
  },
  {
    date:'2026-07-17', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
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
    consultant:'林雨芑',
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
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:35999},  // 裴雅涵，體驗+購課成交
      {type:'新客', trial_amt:2298, total_amt:19698},  // Waranya，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-07-22', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
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
    consultant:'林雨芑',
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
    consultant:'林雨芑',
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
    consultant:'林雨芑',
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
    consultant:'林雨芑',
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
    consultant:'林雨芑',
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
    consultant:'林雨芑',
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
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 林芳毓，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:999},    // 黃莉芳，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},    // 張嘉芯，體驗未成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
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
    consultant:'陳甯',
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
    date:'2026-07-25', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},
    ]
  },
  {
    date:'2026-07-24', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 王若容，體驗未成交
    ]
  },
  {
    date:'2026-07-23', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 李宜珊，體驗未成交
    ]
  },
  {
    date:'2026-07-22', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:6000, total_amt:63999},  // 陳翎軒，體驗+購課成交
    ]
  },
  {
    date:'2026-07-20', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:1499},  // 邱郁茵，體驗未成交
    ]
  },
  {
    date:'2026-07-18', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 許婉婷，體驗未成交
    ]
  },
  {
    date:'2026-07-18', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:7999},  // 楊惠理，體驗+購課成交
    ]
  },
  {
    date:'2026-07-17', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2498, total_amt:14496},  // 柯妤柔，體驗+購課成交
    ]
  },
  {
    date:'2026-07-17', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:2099},  // 楊瑞櫻，體驗+加購成交
    ]
  },
  {
    date:'2026-07-16', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 葉玫伶，體驗未成交
    ]
  },
  {
    date:'2026-07-15', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},   // 王薇珺，體驗未成交
      {type:'新客', trial_amt:1499, total_amt:1499},  // 林淑卿，體驗未成交
    ]
  },
  {
    date:'2026-07-15', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2498, total_amt:24097},  // 吳承錦，體驗+購課成交
      {type:'新客', trial_amt:2000, total_amt:20750},  // 林詩惠，體驗+購課成交
    ]
  },
  {
    date:'2026-07-14', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},    // 陳若瑋，體驗未成交
      {type:'新客', trial_amt:999, total_amt:15399},  // 翁裝延，體驗+購課成交
    ]
  },
  {
    date:'2026-07-14', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2999, total_amt:39749},  // 游巧婕，體驗+購課成交
    ]
  },
  {
    date:'2026-07-13', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:2999},  // 黃莛茵，體驗+付訂成交
      {type:'新客', trial_amt:999, total_amt:999},   // Joanie Boswell，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},   // 陳渝涵，體驗未成交
    ]
  },
  {
    date:'2026-07-13', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},  // 林詩芸，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:999},   // Trisha McCall，體驗未成交
    ]
  },
  {
    date:'2026-07-09', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399},  // 曾思宇，體驗+購課成交
    ]
  },
  {
    date:'2026-07-08', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 孫愷伶，體驗未成交
    ]
  },
  {
    date:'2026-07-07', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:1499},  // 邱雅琦，體驗未成交
    ]
  },
  {
    date:'2026-07-07', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},  // 郭小希，體驗未成交
    ]
  },
  {
    date:'2026-07-03', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},  // 邱信霏，體驗未成交
      {type:'新客', trial_amt:6000, total_amt:8000},  // 劉璟璇，體驗+加購成交
    ]
  },
  {
    date:'2026-07-02', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2999, total_amt:2999},   // 高潔，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:18999},  // 范芸瑄，體驗+購課成交
    ]
  },
  {
    date:'2026-07-01', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:17000},  // 張立輝，體驗+購課成交
    ]
  },
  {
    date:'2026-08-10', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:1998},  // 王嘉雯，體驗肩頸+音波(未做，預約下周再決)
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 許雅如，體驗+購課成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 林冠伶，體驗未成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:20750},  // 何如嬡，體驗+購課成交
    ]
  },
  {
    date:'2026-08-06', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:34249},  // 林姿妗，體驗+購課成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000},  // 林宸希，體驗+購課成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 袁月娥，體驗未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},   // 陳咏馨，體驗未成交
      {type:'新客', trial_amt:2000, total_amt:2000},  // 黃琪芳，體驗未成交
    ]
  },
  {
    date:'2026-08-06', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:17498},  // 廖智伶，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000},  // 何庭珊，體驗+購課成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:15000},  // 廖婉竹，肉毒成交
      {type:'新客', trial_amt:0, total_amt:21999},  // 郭蘊緹，仙女針成交
      {type:'新客', trial_amt:0, total_amt:9999},   // 蔡伊晴，瑞斯朗成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:6498},   // 蘇郁珈，肉毒成交
      {type:'新客', trial_amt:0, total_amt:57999},  // 陳姵慈，膠原蛋白+再生針成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'公司',
    clients:[
      {type:'未到', trial_amt:0, total_amt:0, name:'黃孟鈺'},
    ]
  },
  {
    date:'2026-08-05', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},  // 黃茂翔，未施作未成交
    ]
  },
  {
    date:'2026-08-06', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},  // 林小樂，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:999},   // 江維禎，體驗未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},  // 游佳芸，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999},  // 鄭星貝，體驗未成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:6998},  // 陳思妤，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:999},   // 楊晉婷，體驗未成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:4499, total_amt:12498},  // 王絲誼，體驗+購課成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:7999},  // 孫姮明，體驗+購課成交
    ]
  },
  {
    date:'2026-08-06', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399},  // 張閔筑，體驗+購課成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:3499, total_amt:24998},  // 劉佳榕，體驗+購課成交
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
    date:'2026-07-23', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 賴咨羽，分享體驗課消耗，掛公司
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
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 程連芳，使用朋友療程，掛公司
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
    date:'2026-08-10', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},          // 余孟璇，諮詢未成交（預約周五再來）
      {type:'新客', trial_amt:1499, total_amt:11498},    // 韓婷仔，體驗水光+購5堂
    ]
  },
  {
    date:'2026-08-10', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:3499, total_amt:3499},    // 許曉盈，體驗水光+音波（住日本）
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:17498},  // 廖真真，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999},  // 簡詠恩，體驗+購課成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:18999},  // 蔡沛繁，體驗+購課成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},  // 邱莉芬，分享客未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:19749},  // 徐韻涵，體驗+購課成交
    ]
  },
  {
    date:'2026-07-31', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:1499},  // 劉明鳳，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:2999},  // 吳承瑩，體驗+訂金成交
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
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 張采汐，分享客
      {type:'其他', trial_amt:0, total_amt:0},  // 周楚涵，分享客（周珈穎課程轉讓）
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
    consultant:'陳甯',
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
    date:'2026-08-10', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:15000},  // 徐郁惠，嘟嘟唇→肉毒(1U)，成交
    ]
  },
  {
    date:'2026-08-10', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:138888}, // 林美妤，喬亞登HAJ+無雙電波，成交
      {type:'新客', trial_amt:0, total_amt:0},       // 陳苡琳，鼻部埋線，諮詢未成交
    ]
  },
  {
    date:'2026-08-10', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:70999},  // 黃湘勻，微晶瓷+瑞斯朗HA，成交
      {type:'新客', trial_amt:0, total_amt:3999},   // 徐子涵，蜂巢+皮秒臉部，成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:10000},  // 陳品君，無雙電波成交
      {type:'新客', trial_amt:0, total_amt:9900},   // 黃鈺棋，玻尿酸成交
      {type:'新客', trial_amt:0, total_amt:0},      // 江幸橋，諮詢未成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:45999},  // 蘇以文，膠原蛋白針成交
      {type:'新客', trial_amt:0, total_amt:9999},   // 郭叡臻，玻尿酸成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},      // 藍雅偵，諮詢未成交
      {type:'新客', trial_amt:0, total_amt:12997},  // 李汶晏，水光針+皮秒+肉毒成交
      {type:'新客', trial_amt:0, total_amt:35499},  // 黃沛澄，鼻埋線成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:22000},  // 黃穎彤，嘟嘟唇+玻尿酸成交
      {type:'新客', trial_amt:0, total_amt:33000},  // 陳宜蓁，肉毒臉部成交
      {type:'新客', trial_amt:0, total_amt:0},      // 林家蔚，諮詢未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},  // 林孟璇，已到未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:16998},  // 邱宇翔，皮秒體驗+喬雅露成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},  // 林哲緯，分享客
    ]
  },
  {
    date:'2026-08-05', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:121885},  // 蘇毓斐，水光針+微整雕塑+無雙電波+鼻線
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
    consultant:'林雨芑',
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
  {
    date:'2026-08-10', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:12098},  // 蔡博任，體驗水光+精華+購水光5堂
    ]
  },
  {
    date:'2026-08-10', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:77000},  // 湯瑋琪，體驗音波+購音波30堂贈20堂
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:20748},  // 楊姿瑩，體驗+購課成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:1299, total_amt:1299},   // 張家寧，體驗美胸，未成交
      {type:'新客', trial_amt:999,  total_amt:15999},  // 林蔚珊，體驗體雕+購6堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15399}, // 稅昶喻，體驗肩頸+購6堂贈2堂，成交
      {type:'新客', trial_amt:999,  total_amt:999},   // 鐘淳美，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000},  // 曾郁棋，體驗音波2部位，未成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:20750}, // 李幼珊，體驗音波+購8堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_zhanqian', store:'館前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},   // 鐘蕙瑀，體驗音波(含大腿)，未成交
      {type:'新客', trial_amt:999, total_amt:999},   // 李婀瑄，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_zhanqian', store:'館前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},   // 張齡瑤，體驗小香肩，未成交
      {type:'新客', trial_amt:999, total_amt:999},   // 溫珮宜，體驗音波，未成交(蜂巢780為李怡樺產品業績)
    ]
  },
  {
    date:'2026-08-11', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:26998}, // 林毓淳，超玩美電波(眼周一發)，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:1000},  // 錢玟均，消脂針訂金，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:81999}, // 鄭綺云，仙女HA×2，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:9999},  // 楊鎵綺，瑞斯朗HA，成交
      {type:'新客', trial_amt:0, total_amt:2298},  // 陳品蓁，除毛體驗腋下+比基尼，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:1999, total_amt:3999}, // 周思羽，體驗微分子爆水奇蹟+訂金，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999}, // 陳欣柔，體驗體雕(腹部)，未成交
      {type:'新客', trial_amt:999, total_amt:999}, // 楊慧青，體驗體雕(腹部)，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},   // 許悅悅，體驗音波，未成交
      {type:'新客', trial_amt:1499, total_amt:1499},  // 黃品熏，體驗無針水光，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},    // 黃雅慧，體驗音波(大腿)，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999}, // 蘇仕芸，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_zhanqian', store:'館前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15724}, // 黃若涵，體驗音波+夏日C位攻略(生日95折)，成交
      {type:'新客', trial_amt:2000, total_amt:17500}, // 戴詩昀，體驗音波2部位+夏日C位攻略，成交
      {type:'新客', trial_amt:999,  total_amt:15999}, // 李宛庭，體驗音波+購6堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_zhanqian', store:'館前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999},   // 王敏雯，體驗音波(含大腿)，未成交
      {type:'新客', trial_amt:999, total_amt:19749}, // 潘煒妮，體驗音波+購6堂贈2堂+加購2堂，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:2999},  // 鄭詩穎，體驗小香肩+訂金，成交
      {type:'新客', trial_amt:999,  total_amt:999},   // 王映筑，體驗音波(大腿)，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:56110}, // 黃澄珊，體驗音波+購音波30堂+皮秒+纖萃，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},     // 楊沂瑾，鼻部埋線，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:60498}, // 李怡萱，喬亞登HA×2+肉毒×2+鼻線，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:1499},  // 朱紜璟，肉毒除皺，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:15578}, // 周品君，瑞斯朗1CC+皮秒+蜂巢+賦活因子3瓶，成交
      {type:'新客', trial_amt:0, total_amt:0},     // 黃先生，鼻基底填充，未成交
      {type:'新客', trial_amt:0, total_amt:23498}, // 邱文珠，肉毒+原三點仙女3CC，成交
      {type:'新客', trial_amt:0, total_amt:15000}, // 何立慈，肉毒1瓶，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:1499},  // 張曉昀，肉毒除皺1區，成交
      {type:'新客', trial_amt:0, total_amt:0},     // 林瑞樊，頰凹填充，未成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000}, // 何欣，體驗體雕+購14堂贈6堂，成交
      {type:'新客', trial_amt:999,  total_amt:15399}, // 劉明宜，體驗香肩+購6堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0},        // 吳婉歆，消耗吳依貞課程
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:75999}, // 陳怡方，體驗體雕+購30堂贈20堂，成交
      {type:'新客', trial_amt:2000, total_amt:2000},  // 陳嘉湄，體驗體雕2堂，未成交(已約下次)
      {type:'新客', trial_amt:999,  total_amt:15999}, // 吳宛諭，體驗體雕+購6堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},  // 徐湘紜，體驗肩頸，未成交
      {type:'新客', trial_amt:2000, total_amt:2000}, // 陳景芸，體驗音波2部位，未成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999}, // 林佩妮，體驗音波+購14堂贈6堂，成交
      {type:'新客', trial_amt:999, total_amt:999},   // 張宸淳，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:17498}, // 古澤繪美，體驗音波+香肩+夏日攻略+P4，成交
      {type:'新客', trial_amt:2000, total_amt:2000},  // 鄧羽伶，體驗音波2部位(大腿)，未成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_zhanqian', store:'館前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15399}, // 黃冠綺，體驗小香肩+購6堂贈2堂，成交
      {type:'新客', trial_amt:2000, total_amt:37000}, // 蘇珈玉，體驗音波+購14堂贈6堂，成交
      {type:'新客', trial_amt:999,  total_amt:2999},  // 林郁婷，體驗音波+付訂，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999},   // 羅云彤，體驗音波(大腿)，未成交
      {type:'新客', trial_amt:2000, total_amt:37000}, // 陳家欣，體驗音波+購14堂贈6堂，成交
      {type:'新客', trial_amt:999,  total_amt:2999},  // 葉容華，體驗音波+付訂，成交
      {type:'新客', trial_amt:2999, total_amt:85799}, // 周欣穎，體驗肩頸+音波+購音波30堂+蜂巢皮秒油，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:27888}, // 劉珈妘，無雙電波×2，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0},     // 于珊，頰凹填充，未成交
    ]
  },
  // 新增記錄時複製上面的格式
];
