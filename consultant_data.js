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
      {type:'新客', trial_amt:2000, total_amt:37000, name:'吳佩穎'},  // 吳佩穎，體驗+購課成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'劉瑞淇'},    // 劉瑞淇，體驗未成交
      {type:'新客', trial_amt:2000, total_amt:37000, name:'吳芯伝'},  // 吳芯伝，體驗+購課成交
      {type:'新客', trial_amt:8498, total_amt:8498, name:'王哲慧'},   // 王哲慧，三項體驗未成交
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
      {type:'新客', trial_amt:999, total_amt:999, name:'吳苡婕'},  // 吳苡婕，體驗未成交
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
      {type:'新客', trial_amt:999, total_amt:35999, name:'何意敏'},  // 何意敏，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:999, name:'范姜渦'},    // 范姜渦，體驗未成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'李明瑤'},    // 李明瑤，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'鄭沛淇'},    // 鄭沛淇，體驗未成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:1499, name:'詹閔智'},  // 詹閔智，體驗未成交
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15399, name:'王靖雯'}, // 王靖雯，體驗+購課成交
      {type:'其他', trial_amt:0,    total_amt:0, name:'鄧珮姍'},     // 鄧珮姍，胡馨芳分享消耗未購
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:118999, name:'林鈺淳'},  // 林鈺淳
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:14999, name:'黃舒鈺'},   // 黃舒鈺
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:41799, name:'徐雅瑩'},   // 徐雅瑩
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:22999, name:'張雅嵐'},   // 張雅嵐
    ]
  },
  {
    date:'2026-08-01', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:63000, name:'胡巧儀（48000+15000）'},   // 胡巧儀（48000+15000）
    ]
  },
  {
    date:'2026-08-03', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:6998, name:'高立蓁'},  // 高立蓁，體驗+購課成交
    ]
  },
  {
    date:'2026-08-03', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:1998, name:'阮湘云'},  // 阮湘云，雙體驗未成交
    ]
  },
  {
    date:'2026-08-03', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'劉品瑩'},   // 劉品瑩，體驗未成交
      {type:'新客', trial_amt:2000, total_amt:2000, name:'劉瑋亭'},   // 劉瑋亭，體驗未成交
      {type:'新客', trial_amt:2000, total_amt:37000, name:'陳韻帆'},  // 陳韻帆，體驗+購課成交
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
      {type:'新客', trial_amt:1998, total_amt:1998, name:'王嘉雯'},  // 王嘉雯，體驗肩頸+音波(未做，預約下周再決)
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999, name:'許雅如'},  // 許雅如，體驗+購課成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'林冠伶'},  // 林冠伶，體驗未成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:20750, name:'何如嬡'},  // 何如嬡，體驗+購課成交
    ]
  },
  {
    date:'2026-08-06', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:34249, name:'林姿妗'},  // 林姿妗，體驗+購課成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000, name:'林宸希'},  // 林宸希，體驗+購課成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'袁月娥'},  // 袁月娥，體驗未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999, name:'陳咏馨'},   // 陳咏馨，體驗未成交
      {type:'新客', trial_amt:2000, total_amt:2000, name:'黃琪芳'},  // 黃琪芳，體驗未成交
    ]
  },
  {
    date:'2026-08-06', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:17498, name:'廖智伶'},  // 廖智伶，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000, name:'何庭珊'},  // 何庭珊，體驗+購課成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:15000, name:'廖婉竹'},  // 廖婉竹，肉毒成交
      {type:'新客', trial_amt:0, total_amt:21999, name:'郭蘊緹'},  // 郭蘊緹，仙女針成交
      {type:'新客', trial_amt:0, total_amt:9999, name:'蔡伊晴'},   // 蔡伊晴，瑞斯朗成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:6498, name:'蘇郁珈'},   // 蘇郁珈，肉毒成交
      {type:'新客', trial_amt:0, total_amt:57999, name:'陳姵慈'},  // 陳姵慈，膠原蛋白+再生針成交
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
      {type:'新客', trial_amt:0, total_amt:0, name:'黃茂翔'},  // 黃茂翔，未施作未成交
    ]
  },
  {
    date:'2026-08-06', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'林小樂'},  // 林小樂，體驗未成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'江維禎'},   // 江維禎，體驗未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'游佳芸'},  // 游佳芸，體驗未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'鄭星貝'},  // 鄭星貝，體驗未成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:6998, name:'陳思妤'},  // 陳思妤，體驗+購課成交
      {type:'新客', trial_amt:999, total_amt:999, name:'楊晉婷'},   // 楊晉婷，體驗未成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:4499, total_amt:12498, name:'王絲誼'},  // 王絲誼，體驗+購課成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:7999, name:'孫姮明'},  // 孫姮明，體驗+購課成交
    ]
  },
  {
    date:'2026-08-06', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399, name:'張閔筑'},  // 張閔筑，體驗+購課成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:3499, total_amt:24998, name:'劉佳榕'},  // 劉佳榕，體驗+購課成交
    ]
  },
  {
    date:'2026-08-03', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:17000, name:'江怡霓'},  // 江怡霓，體驗+購課成交
    ]
  },
  {
    date:'2026-08-03', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:14999, name:'范美儀'},  // 范美儀，微整雕塑喬亞登HAJ，成交
      {type:'新客', trial_amt:0, total_amt:14999, name:'Lou'},  // Lou Sio Kei，微整雕塑喬亞登HAJ，成交
      {type:'新客', trial_amt:0, total_amt:0, name:'蔡旻庭'},      // 蔡旻庭，肉毒，已到未購
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
      {type:'新客', trial_amt:0, total_amt:0, name:'余孟璇'},          // 余孟璇，諮詢未成交（預約周五再來）
      {type:'新客', trial_amt:1499, total_amt:11498, name:'韓婷仔'},    // 韓婷仔，體驗水光+購5堂
    ]
  },
  {
    date:'2026-08-10', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:3499, total_amt:3499, name:'許曉盈'},    // 許曉盈，體驗水光+音波（住日本）
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:17498, name:'廖真真'},  // 廖真真，體驗+購課+產品成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999, name:'簡詠恩'},  // 簡詠恩，體驗+購課成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:18999, name:'蔡沛繁'},  // 蔡沛繁，體驗+購課成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'邱莉芬'},  // 邱莉芬，分享客未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:19749, name:'徐韻涵'},  // 徐韻涵，體驗+購課成交
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
      {type:'新客', trial_amt:0, total_amt:0, name:'洪于芳'},  // 洪于芳，黑眼圈填充，已到未購
      {type:'新客', trial_amt:0, total_amt:0, name:'楊季穎'},  // 楊季穎，頰凹填充，已到未購
    ]
  },
  {
    date:'2026-08-04', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:9999, name:'方詠瑩'},   // 方詠瑩，膠原蛋白針，成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:36000, name:'蘇汗雨'},  // 蘇汗雨，瑞斯朗HA，成交
    ]
  },
  {
    date:'2026-08-10', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:15000, name:'徐郁惠'},  // 徐郁惠，嘟嘟唇→肉毒(1U)，成交
    ]
  },
  {
    date:'2026-08-10', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:138888, name:'林美妤'}, // 林美妤，喬亞登HAJ+無雙電波，成交
      {type:'新客', trial_amt:0, total_amt:0, name:'陳苡琳'},       // 陳苡琳，鼻部埋線，諮詢未成交
    ]
  },
  {
    date:'2026-08-10', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:70999, name:'黃湘勻'},  // 黃湘勻，微晶瓷+瑞斯朗HA，成交
      {type:'新客', trial_amt:0, total_amt:3999, name:'徐子涵'},   // 徐子涵，蜂巢+皮秒臉部，成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:10000, name:'陳品君'},  // 陳品君，無雙電波成交
      {type:'新客', trial_amt:0, total_amt:9900, name:'黃鈺棋'},   // 黃鈺棋，玻尿酸成交
      {type:'新客', trial_amt:0, total_amt:0, name:'江幸橋'},      // 江幸橋，諮詢未成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:45999, name:'蘇以文'},  // 蘇以文，膠原蛋白針成交
      {type:'新客', trial_amt:0, total_amt:9999, name:'郭叡臻'},   // 郭叡臻，玻尿酸成交
    ]
  },
  {
    date:'2026-08-08', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'藍雅偵'},      // 藍雅偵，諮詢未成交
      {type:'新客', trial_amt:0, total_amt:12997, name:'李汶晏'},  // 李汶晏，水光針+皮秒+肉毒成交
      {type:'新客', trial_amt:0, total_amt:35499, name:'黃沛澄'},  // 黃沛澄，鼻埋線成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:22000, name:'黃穎彤'},  // 黃穎彤，嘟嘟唇+玻尿酸成交
      {type:'新客', trial_amt:0, total_amt:33000, name:'陳宜蓁'},  // 陳宜蓁，肉毒臉部成交
      {type:'新客', trial_amt:0, total_amt:0, name:'林家蔚'},      // 林家蔚，諮詢未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'林孟璇'},  // 林孟璇，已到未成交
    ]
  },
  {
    date:'2026-08-07', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:16998, name:'邱宇翔'},  // 邱宇翔，皮秒體驗+喬雅露成交
    ]
  },
  {
    date:'2026-08-05', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0, name:'林哲緯'},  // 林哲緯，分享客
    ]
  },
  {
    date:'2026-08-05', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:121885, name:'蘇毓斐'},  // 蘇毓斐，水光針+微整雕塑+無雙電波+鼻線
    ]
  },
  {
    date:'2026-08-04', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:84000, name:'王莉貞'},  // 王莉貞，膠原蛋白針+微晶瓷，成交
      {type:'新客', trial_amt:0, total_amt:0, name:'黃家朋'},      // 黃家朋，臉部埋線，已到未購
      {type:'新客', trial_amt:0, total_amt:0, name:'黃培鈞'},      // 黃培鈞，臉部埋線，已到未購
      {type:'新客', trial_amt:0, total_amt:0, name:'劉育婷'},      // 劉育婷，黑眼圈填充，已到未購
    ]
  },
  {
    date:'2026-08-04', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:14999, name:'朱安湘'},  // 朱安湘，喬亞登HAJ，成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000, name:'張雁筑'},  // 張雁筑，體驗+購課成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2498, total_amt:5498, name:'黃絹嵐'},   // 黃絹嵐，體驗+購課成交
      {type:'新客', trial_amt:2000, total_amt:37000, name:'王暄蕙'},  // 王暄蕙，體驗+購課成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999, name:'黃珮慈'},  // 黃珮慈，體驗+購課成交
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0, name:'陳愷霓'},  // 陳愷霓，使用分享課程，未購
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'周思彤'},  // 周思彤，體驗未成交
    ]
  },
  {
    date:'2026-08-10', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:12098, name:'蔡博任'},  // 蔡博任，體驗水光+精華+購水光5堂
    ]
  },
  {
    date:'2026-08-10', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:77000, name:'湯瑋琪'},  // 湯瑋琪，體驗音波+購音波30堂贈20堂
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:20748, name:'楊姿瑩'},  // 楊姿瑩，體驗+購課成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:1299, total_amt:1299, name:'張家寧'},   // 張家寧，體驗美胸，未成交
      {type:'新客', trial_amt:999,  total_amt:15999, name:'林蔚珊'},  // 林蔚珊，體驗體雕+購6堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15399, name:'稅昶喻'}, // 稅昶喻，體驗肩頸+購6堂贈2堂，成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'鐘淳美'},   // 鐘淳美，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'曾郁棋'},  // 曾郁棋，體驗音波2部位，未成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:20750, name:'李幼珊'}, // 李幼珊，體驗音波+購8堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'鐘蕙瑀'},   // 鐘蕙瑀，體驗音波(含大腿)，未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'李婀瑄'},   // 李婀瑄，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'張齡瑤'},   // 張齡瑤，體驗小香肩，未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'溫珮宜'},   // 溫珮宜，體驗音波，未成交(蜂巢780為李怡樺產品業績)
    ]
  },
  {
    date:'2026-08-11', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:26998, name:'林毓淳'}, // 林毓淳，超玩美電波(眼周一發)，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:1000, name:'錢玟均'},  // 錢玟均，消脂針訂金，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:81999, name:'鄭綺云'}, // 鄭綺云，仙女HA×2，成交
    ]
  },
  {
    date:'2026-08-11', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:9999, name:'楊鎵綺'},  // 楊鎵綺，瑞斯朗HA，成交
      {type:'新客', trial_amt:0, total_amt:2298, name:'陳品蓁'},  // 陳品蓁，除毛體驗腋下+比基尼，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:1999, total_amt:3999, name:'周思羽'}, // 周思羽，體驗微分子爆水奇蹟+訂金，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'陳欣柔'}, // 陳欣柔，體驗體雕(腹部)，未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'楊慧青'}, // 楊慧青，體驗體雕(腹部)，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999, name:'許悅悅'},   // 許悅悅，體驗音波，未成交
      {type:'新客', trial_amt:1499, total_amt:1499, name:'黃品熏'},  // 黃品熏，體驗無針水光，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'黃雅慧'},    // 黃雅慧，體驗音波(大腿)，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'蘇仕芸'}, // 蘇仕芸，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15724, name:'黃若涵'}, // 黃若涵，體驗音波+夏日C位攻略(生日95折)，成交
      {type:'新客', trial_amt:2000, total_amt:17500, name:'戴詩昀'}, // 戴詩昀，體驗音波2部位+夏日C位攻略，成交
      {type:'新客', trial_amt:999,  total_amt:15999, name:'李宛庭'}, // 李宛庭，體驗音波+購6堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'王敏雯'},   // 王敏雯，體驗音波(含大腿)，未成交
      {type:'新客', trial_amt:999, total_amt:19749, name:'潘煒妮'}, // 潘煒妮，體驗音波+購6堂贈2堂+加購2堂，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:2999, name:'鄭詩穎'},  // 鄭詩穎，體驗小香肩+訂金，成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'王映筑'},   // 王映筑，體驗音波(大腿)，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:56110, name:'黃澄珊'}, // 黃澄珊，體驗音波+購音波30堂+皮秒+纖萃，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'楊沂瑾'},     // 楊沂瑾，鼻部埋線，未成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:60498, name:'李怡萱'}, // 李怡萱，喬亞登HA×2+肉毒×2+鼻線，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:1499, name:'朱紜璟'},  // 朱紜璟，肉毒除皺，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:15578, name:'周品君'}, // 周品君，瑞斯朗1CC+皮秒+蜂巢+賦活因子3瓶，成交
      {type:'新客', trial_amt:0, total_amt:0, name:'黃先生'},     // 黃先生，鼻基底填充，未成交
      {type:'新客', trial_amt:0, total_amt:23498, name:'邱文珠'}, // 邱文珠，肉毒+原三點仙女3CC，成交
      {type:'新客', trial_amt:0, total_amt:15000, name:'何立慈'}, // 何立慈，肉毒1瓶，成交
    ]
  },
  {
    date:'2026-08-12', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:1499, name:'張曉昀'},  // 張曉昀，肉毒除皺1區，成交
      {type:'新客', trial_amt:0, total_amt:0, name:'林瑞樊'},     // 林瑞樊，頰凹填充，未成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000, name:'何欣'}, // 何欣，體驗體雕+購14堂贈6堂，成交
      {type:'新客', trial_amt:999,  total_amt:15399, name:'劉明宜'}, // 劉明宜，體驗香肩+購6堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0, name:'吳婉歆'},        // 吳婉歆，消耗吳依貞課程
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:75999, name:'陳怡方'}, // 陳怡方，體驗體雕+購30堂贈20堂，成交
      {type:'新客', trial_amt:2000, total_amt:2000, name:'陳嘉湄'},  // 陳嘉湄，體驗體雕2堂，未成交(已約下次)
      {type:'新客', trial_amt:999,  total_amt:15999, name:'吳宛諭'}, // 吳宛諭，體驗體雕+購6堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999, name:'徐湘紜'},  // 徐湘紜，體驗肩頸，未成交
      {type:'新客', trial_amt:2000, total_amt:2000, name:'陳景芸'}, // 陳景芸，體驗音波2部位，未成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999, name:'林佩妮'}, // 林佩妮，體驗音波+購14堂贈6堂，成交
      {type:'新客', trial_amt:999, total_amt:999, name:'張宸淳'},   // 張宸淳，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:17498, name:'古澤繪美'}, // 古澤繪美，體驗音波+香肩+夏日攻略+P4，成交
      {type:'新客', trial_amt:2000, total_amt:2000, name:'鄧羽伶'},  // 鄧羽伶，體驗音波2部位(大腿)，未成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15399, name:'黃冠綺'}, // 黃冠綺，體驗小香肩+購6堂贈2堂，成交
      {type:'新客', trial_amt:2000, total_amt:37000, name:'蘇珈玉'}, // 蘇珈玉，體驗音波+購14堂贈6堂，成交
      {type:'新客', trial_amt:999,  total_amt:2999, name:'林郁婷'},  // 林郁婷，體驗音波+付訂，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999, name:'羅云彤'},   // 羅云彤，體驗音波(大腿)，未成交
      {type:'新客', trial_amt:2000, total_amt:37000, name:'陳家欣'}, // 陳家欣，體驗音波+購14堂贈6堂，成交
      {type:'新客', trial_amt:999,  total_amt:2999, name:'葉容華'},  // 葉容華，體驗音波+付訂，成交
      {type:'新客', trial_amt:2999, total_amt:85799, name:'周欣穎'}, // 周欣穎，體驗肩頸+音波+購音波30堂+蜂巢皮秒油，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:27888, name:'劉珈妘'}, // 劉珈妘，無雙電波×2，成交
    ]
  },
  {
    date:'2026-08-13', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'于珊'},     // 于珊，頰凹填充，未成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'郭瓊葵'}, // 郭瓊葵，體驗體雕2部位，未成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000, name:'程冠馨'}, // 程冠馨，體驗體雕+購14堂贈6堂，成交
      {type:'新客', trial_amt:2000, total_amt:2000, name:'陳資云'},  // 陳資云，體驗體雕2部位，未成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'鄭育芷'},   // 鄭育芷，體驗體雕1部位，未成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'曾郁捷'},   // 曾郁捷，體驗體雕1部位，未成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:1998, name:'黃喬莉'}, // 黃喬莉，體驗香肩+體雕，未成交
      {type:'新客', trial_amt:999,  total_amt:6998, name:'陳瑋瑋'}, // 陳瑋瑋，體驗體雕+購三堂，成交
      {type:'新客', trial_amt:999,  total_amt:6998, name:'陳憶萱'}, // 陳憶萱，體驗體雕+購三堂，成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999, name:'王凱齡'},   // 王凱齡，體驗體雕(手)，未成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'張旻宸'},   // 張旻宸，體驗體雕(大腿)，未成交
      {type:'新客', trial_amt:2000, total_amt:2000, name:'宋妍安'},  // 宋妍安，體驗體雕(大小腿)，未成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'王佳悠'},   // 王佳悠，體驗體雕(腹部)，未成交
      {type:'新客', trial_amt:1998, total_amt:76998, name:'楊于溶'}, // 楊于溶，體驗香肩+體雕+購30堂贈20堂，成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:40999, name:'黨佳文'}, // 黨佳文，體驗音波+購30堂贈20堂，成交
      {type:'新客', trial_amt:999, total_amt:15399, name:'黎玉貞'}, // 黎玉貞，體驗音波+購腹部6堂贈2堂，成交
      {type:'新客', trial_amt:999, total_amt:999, name:'黃意茹'},   // 黃意茹，體驗音波，未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'謝子萱'},   // 謝子萱，體驗音波(大腿)，未成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'張采琳'},   // 張采琳，體驗音波(大腿)，未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'張芝語'},   // 張芝語，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:40999, name:'鄭卜慈'}, // 鄭卜慈，體驗音波+購30堂贈20堂，成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:1599, name:'劉昱謙'},  // 劉昱謙，體驗杏仁酸+加購無針保濕精華，成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:19749, name:'陳逸珊'}, // 陳逸珊，體驗音波+購8堂贈2堂，成交
      {type:'新客', trial_amt:999, total_amt:19749, name:'李心瑀'}, // 李心瑀，體驗音波+購8堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999, name:'洪育婕'}, // 洪育婕，體驗音波(大腿)+購14堂贈6堂，成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:19749, name:'張庭甄'}, // 張庭甄，體驗音波+購8堂贈2堂，成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:8998, name:'陳品華'}, // 陳品華，體驗音波+夏日C位攻略4堂，成交
      {type:'新客', trial_amt:999, total_amt:999, name:'許韓蓁'},  // 許韓蓁，體驗小香肩，未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'鄭舒妃'},  // 鄭舒妃，體驗音波(大腿)，未成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:17000, name:'林欣瑩'}, // 林欣瑩，體驗音波+購6堂贈2堂，成交
      {type:'新客', trial_amt:2000, total_amt:20750, name:'楊潔茹'}, // 楊潔茹，體驗音波+購6堂贈2堂+加購2堂，成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'吳采愉'},   // 吳采愉，體驗小香肩，未成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'蘇芃諭'},  // 蘇芃諭，體驗音波(大腿)，未成交
      {type:'新客', trial_amt:999,  total_amt:15399, name:'陳樂融'}, // 陳樂融，體驗小香肩+購6堂贈2堂，成交
      {type:'新客', trial_amt:999,  total_amt:35999, name:'蔡怡君'}, // 蔡怡君，體驗音波+購14堂贈6堂，成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0, name:'曾詩茵'},        // 曾詩茵，杜伊茹分享音波1堂
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'黃碧盈'},   // 黃碧盈，體驗音波，未成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'余冠瑾'}, // 余冠瑾，體驗音波2部位(大腿)，未成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'林宣妤'}, // 林宣妤，體驗音波2部位，未成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:14999, name:'黃紀茹'}, // 黃紀茹，喬亞登HAJ，成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'廖艾薇'},     // 廖艾薇，黑眼圈填充，未成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'黃小姐'},     // 黃小姐，嘟嘟唇，未成交
      {type:'新客', trial_amt:0, total_amt:22999, name:'王致皓'}, // 王致皓，膠原蛋白針×2，成交
      {type:'新客', trial_amt:0, total_amt:0, name:'許綉君'},     // 許綉君，肉毒臉部，未成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:3999, name:'趙曼真'},   // 趙曼真，蜂巢+皮秒，成交
      {type:'新客', trial_amt:0, total_amt:102000, name:'熊嘉麗'}, // 熊嘉麗，喬亞登+肉毒，成交
      {type:'新客', trial_amt:0, total_amt:0, name:'鐘朝凱'},      // 鐘朝凱，臉部皮秒，未成交
    ]
  },
  {
    date:'2026-08-15', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:61999, name:'楊怡璇'}, // 楊怡璇，肉毒+瑞斯朗HA×3，成交
      {type:'新客', trial_amt:0, total_amt:21999, name:'賈梅梅'}, // 賈梅梅，仙女HA，成交
    ]
  },
  // ─── 8/14 台中原綺 ──────────────────────────
  {
    date:'2026-08-14', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'何欣穎',
    clients:[
      {type:'新客', trial_amt:0, total_amt:48000, name:'徐佳怡'},  // 徐佳怡，再生針3CC，成交
      {type:'新客', trial_amt:0, total_amt:76998, name:'曹雅涵'},  // 曹雅涵，膠原蛋白針+伊蘿絲，成交
      {type:'新客', trial_amt:0, total_amt:186000, name:'王惠儀'}, // 王惠儀，膠原蛋白針+再生針+肉毒，成交
    ]
  },
  {
    date:'2026-08-14', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:48000, name:'賴玥廷'},  // 賴玥廷，再生針3CC，成交
      {type:'新客', trial_amt:0, total_amt:21999, name:'高婉婷'},  // 高婉婷，仙女玻尿酸3CC，成交
    ]
  },
  // ─── 8/17 東門 ──────────────────────────────
  {
    date:'2026-08-17', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15399, name:'李沛芹'}, // 李沛芹，香扃6堂，成交
    ]
  },
  // ─── 8/17 忠孝 ──────────────────────────────
  {
    date:'2026-08-17', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:1998, name:'陳宥華'}, // 陳宥華，小香扃+音波，未成交
    ]
  },
  // ─── 8/17 館前 ──────────────────────────────
  {
    date:'2026-08-17', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:4499, total_amt:11598, name:'陳嘉宜'}, // 陳嘉宜，水拉提+濃縮精華，成交
    ]
  },
  {
    date:'2026-08-17', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999, total_amt:75999, name:'李姿璇'}, // 李姿璇，音波30堂，成交
    ]
  },
  // ─── 8/17 台北原綺 ──────────────────────────
  {
    date:'2026-08-17', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:9999, name:'高畠泉'},  // 高畠泉，消脂針×2，成交
    ]
  },
  {
    date:'2026-08-17', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:23499, name:'楊毓娟'}, // 楊毓娟，女神HA×2+肉毒，成交
      {type:'新客', trial_amt:0, total_amt:21798, name:'陳美齡'}, // 陳美齡，喬亞登+肉毒，成交
    ]
  },
  {
    date:'2026-08-17', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:22349, name:'陳冠豪'},  // 陳冠豪，黑眼圈填充(8/17)+膠原蛋白針(8/19付款)，成交
    ]
  },
  // ─── 8/17 大安 ──────────────────────────────
  {
    date:'2026-08-17', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000, name:'王珮芬'}, // 王珮芬，音波14堂，成交
      {type:'新客', trial_amt:999,  total_amt:75999, name:'陳佳容'}, // 陳佳容，音波30堂，成交
      {type:'新客', trial_amt:2000, total_amt:2000, name:'尹歆文'},  // 尹歆文，音波體驗，未成交
    ]
  },
  // ─── 8/18 東門 ──────────────────────────────
  {
    date:'2026-08-18', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:16499, name:'鄧鈺叡'}, // 鄧鈺叡，夏日攻略+小帆布袋，成交
      {type:'新客', trial_amt:2000, total_amt:17000, name:'簡瑜君'}, // 簡瑜君，體雕6堂贈2堂，成交
      {type:'新客', trial_amt:999,  total_amt:15399, name:'周怡婷'}, // 周怡婷，香肩6堂贈2堂，成交
    ]
  },
  // ─── 8/18 板橋 ──────────────────────────────
  {
    date:'2026-08-18', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999, name:'高佩鈺'}, // 高佩鈺，音波6堂贈2堂，成交
      {type:'新客', trial_amt:999, total_amt:999, name:'張庭瑄'},   // 張庭瑄，體雕體驗，未成交
      {type:'新客', trial_amt:999, total_amt:15399, name:'吳子涵'}, // 吳子涵，香肩6堂贈2堂，成交
      {type:'新客', trial_amt:999, total_amt:35999, name:'許瑞婷'}, // 許瑞婷，香肩14堂贈6堂，成交
      {type:'新客', trial_amt:999, total_amt:6998, name:'謝佩君'},  // 謝佩君，體雕三堂，成交
    ]
  },
  // ─── 8/18 台中原渥 ──────────────────────────
  {
    date:'2026-08-18', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'廖芷緹'},  // 廖芷緹，音波體驗，未成交
      {type:'新客', trial_amt:2000, total_amt:2000, name:'林綺鈺'},  // 林綺鈺，音波體驗(大腿)，未成交
    ]
  },
  {
    date:'2026-08-18', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:11498, name:'李嘉琪'}, // 李嘉琪，無針水光5堂贈5支精華，成交
      {type:'新客', trial_amt:999,  total_amt:15999, name:'余青錦'}, // 余青錦，音波6堂贈2堂，成交
    ]
  },
  // ─── 8/18 忠孝 ──────────────────────────────
  {
    date:'2026-08-18', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:6998, name:'黃郁晴'}, // 黃郁晴，音波馬鞍3堂，成交
    ]
  },
  // ─── 8/18 館前 ──────────────────────────────
  {
    date:'2026-08-18', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:52000, name:'周姵汝'}, // 周姵汝，音波30堂贈20堂，成交
      {type:'新客', trial_amt:999,  total_amt:35999, name:'李羿萱'}, // 李羿萱，音波14堂贈6堂，成交
    ]
  },
  {
    date:'2026-08-18', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:4000, name:'吳芊樺'},  // 吳芊樺，音波保留首購付訂，成交（780產品不計）
    ]
  },
  // ─── 8/18 大安 ──────────────────────────────
  {
    date:'2026-08-18', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:4000, name:'張燊珊'}, // 張燊珊，音波付訂保留，成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'張小宛'},  // 張小宛，小香肩體驗，未成交（780產品不計）
    ]
  },
  {
    date:'2026-08-18', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'洪筱筑'}, // 洪筱筑，音波體驗，未成交
      {type:'新客', trial_amt:999,  total_amt:999, name:'劉洧慈'},  // 劉洧慈，肩頸體驗，未成交
    ]
  },
  // ─── 8/18 台北原綺 ──────────────────────────
  {
    date:'2026-08-18', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:6000, name:'劉昀軒'}, // 劉昀軒，肉毒除皺一區，成交
    ]
  },
  // ─── 8/18 台中原綺 ──────────────────────────
  {
    date:'2026-08-18', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:128495, name:'林宜臻'}, // 林宜臻，電波+音波+仙女+肉毒，成交
    ]
  },
  {
    date:'2026-08-18', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'黃儀芝'},     // 黃儀芝，無雙電波，未成交
      {type:'新客', trial_amt:0, total_amt:1499, name:'李嘉琪'},  // 李嘉琪，肉毒除皺1區，成交
    ]
  },
  // ─── 8/19 東門 ──────────────────────────────
  {
    date:'2026-08-19', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'張育慈'}, // 張育慈，體雕體驗，未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'陳歷儒'}, // 陳歷儒，體雕體驗，未成交
    ]
  },
  // ─── 8/19 板橋 ──────────────────────────────
  {
    date:'2026-08-19', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:7999, name:'王婷萱'},  // 王婷萱，體雕3堂，成交
      {type:'新客', trial_amt:1998, total_amt:1998, name:'呂敏智'},  // 呂敏智，雙體驗，未成交
      {type:'新客', trial_amt:999,  total_amt:15399, name:'陳韋君'}, // 陳韋君，香肩6堂贈2堂，成交（產品4280不計）
      {type:'新客', trial_amt:999,  total_amt:999, name:'蔡宜真'},   // 蔡宜真，體雕體驗，未成交
    ]
  },
  // ─── 8/19 台中原渥 ──────────────────────────
  {
    date:'2026-08-19', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'林宛萱'}, // 林宛萱，音波體驗(大腿)，未成交
    ]
  },
  // ─── 8/19 忠孝 ──────────────────────────────
  {
    date:'2026-08-19', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'呂惠慧'}, // 呂惠慧，音波體驗(大腿)，未成交
      {type:'新客', trial_amt:999, total_amt:999, name:'曾靖婷'}, // 曾靖婷，音波體驗(大腿)，未成交
    ]
  },
  // ─── 8/19 館前 ──────────────────────────────
  {
    date:'2026-08-19', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:12698, name:'詹晴雯'}, // 詹晴雯，無針水光5堂+精華，成交（產品4920不計）
    ]
  },
  // ─── 8/19 大安 ──────────────────────────────
  {
    date:'2026-08-19', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:2999, name:'洪美玉'},  // 洪美玉，音波付訂，成交
    ]
  },
  {
    date:'2026-08-19', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000, name:'馮盈捷'}, // 馮盈捷，音波14堂贈6堂，成交
    ]
  },
  // ─── 8/19 台北原綺 ────────────────────────────────────────
  {
    date:'2026-08-19', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'張華珍'},      // 張華珍，嘟嘟唇，未成交
      {type:'新客', trial_amt:0, total_amt:22999, name:'蔡佳穎'},  // 蔡佳穎，膠原蛋白針，成交
    ]
  },
  {
    date:'2026-08-19', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:15000, name:'曾詩喬'},  // 曾詩喬，肉毒，成交
    ]
  },
  {
    date:'2026-08-19', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:87498, name:'余葦柔'},  // 余葦柔，玻尿酸+肉毒，成交
    ]
  },
  {
    date:'2026-08-19', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'何瑀宸'},      // 何瑀宸，頰凹填充，未成交
    ]
  },
  // ─── 8/20 台北原綺 ────────────────────────────────────────
  {
    date:'2026-08-20', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'邱貞寧'},  // 嘟嘟唇，待確認
    ]
  },
  // ─── 8/20 台中原綺 ────────────────────────────────────────
  {
    date:'2026-08-20', storeKey:'ki_taichung', store:'台中原綺', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:14999, name:'李文婷'},  // 喬雅登1CC，成交
      {type:'新客', trial_amt:0, total_amt:22000, name:'鍾資美'},  // 外三點仙女3CC，成交
      {type:'新客', trial_amt:0, total_amt:34498, name:'陳心蓉'},  // 喬雅登+鼻線+肉毒，成交
    ]
  },
  {
    date:'2026-08-20', storeKey:'ki_taichung', store:'台中原綺', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:6499,  name:'胡聖詮'},  // 水光針+肉毒配方，成交
      {type:'未到', trial_amt:0, total_amt:0,     name:'黃宥妡'},  // 公司公關，不算人頭
    ]
  },
  // ─── 8/19 台中原綺 ────────────────────────────────────────
  {
    date:'2026-08-19', storeKey:'ki_taichung', store:'台中原綺', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:61887, name:'李若喬'}, // 李若喬，無雙電波，成交
    ]
  },
  {
    date:'2026-08-19', storeKey:'ki_taichung', store:'台中原綺', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:32999, name:'陳熙蕾'}, // 陳熙蕾，鼻部埋線，成交
    ]
  },
  // ─── 8/20 大安 ───────────────────────────────────────────
  {
    date:'2026-08-20', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞衫',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15999, name:'羅筱棠'},  // 音波6堂，成交
      {type:'新客', trial_amt:2999, total_amt:2999,  name:'田于軒'},  // 體驗未購，未成交
      {type:'新客', trial_amt:2000, total_amt:37000, name:'林昱伶'},  // 音波14堂，成交
      {type:'新客', trial_amt:999,  total_amt:999,   name:'關毓之'},  // 肩頸體驗，未成交
    ]
  },
  // ─── 8/20 館前 ───────────────────────────────────────────
  {
    date:'2026-08-20', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:20750, name:'李馨均'},  // 音波6堂+2堂，成交（產品4280吳玉卿不計）
      {type:'新客', trial_amt:2000, total_amt:20750, name:'陳冠樺'},  // 音波6堂+2堂，成交（產品4280劉子嫻不計）
    ]
  },
  // ─── 8/21 台北原綺 ────────────────────────────────────────
  {
    date:'2026-08-21', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:1499,  name:'陳又瑄'},  // 肉毒除皺1區，成交
    ]
  },
  {
    date:'2026-08-21', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:57999, name:'沈依霓'},  // 仙女玻尿酸HA，成交
    ]
  },
  // ─── 8/21 台中原綺 ────────────────────────────────────────
  {
    date:'2026-08-21', storeKey:'ki_taichung', store:'台中原綺', brand:'原綺', brandKey:'ki',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:0, total_amt:1499,  name:'呂婷儒'},  // 肉毒除皺1區，成交
    ]
  },
  {
    date:'2026-08-21', storeKey:'ki_taichung', store:'台中原綺', brand:'原綺', brandKey:'ki',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:0, total_amt:32999, name:'葉沼岑'},  // 仙女3CC+1CC，成交
    ]
  },
  // ─── 8/21 大安 ───────────────────────────────────────────
  {
    date:'2026-08-21', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:18999, name:'陳永潔'},  // 肩頸8堂，成交
    ]
  },
  // ─── 8/22 館前 ───────────────────────────────────────────
  {
    date:'2026-08-22', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:17874, name:'吳昀庭'},  // 音波6堂+1堂，成交
      {type:'新客', trial_amt:6499, total_amt:6499,  name:'江盈慧'},  // 雙體驗未購，未成交
      {type:'新客', trial_amt:2000, total_amt:4000,  name:'陳柚瑋'},  // 音波付訂未定課，成交
      {type:'新客', trial_amt:2000, total_amt:77000, name:'陳錦晶'},  // 音波30堂，成交
      {type:'新客', trial_amt:999,  total_amt:35999, name:'黃怡方'},  // 音波14堂，成交
    ]
  },
  // ─── 8/22 忠孝 ───────────────────────────────────────────
  {
    date:'2026-08-22', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:38748, name:'劉可艾'},  // 小香肩+音波，成交
    ]
  },
  // ─── 8/22 台中原渥 ───────────────────────────────────────
  {
    date:'2026-08-22', storeKey:'wo_taichung', store:'台中原渥', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:2999,  name:'邱硯渝'},  // 音波體驗+付訂，成交
      {type:'新客', trial_amt:999, total_amt:15399, name:'廖湘茹'},  // 肩頸6堂，成交
    ]
  },
  // ─── 8/21 台中原渥 ───────────────────────────────────────
  {
    date:'2026-08-21', storeKey:'wo_taichung', store:'台中原渥', brand:'原渥', brandKey:'wo',
    consultant:'呂秋玫',
    clients:[
      {type:'新客', trial_amt:999, total_amt:13959, name:'楊雅芳'},  // 肩頸6堂，成交
    ]
  },
  {
    date:'2026-08-21', storeKey:'wo_taichung', store:'台中原渥', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'謝采慈'},  // 音波體驗，未成交
    ]
  },
  {
    date:'2026-08-21', storeKey:'wo_taichung', store:'台中原渥', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:999, name:'陳玫君'},  // 音波體驗，未成交
    ]
  },
  // ─── 8/20 台中原渥 ───────────────────────────────────────
  {
    date:'2026-08-20', storeKey:'wo_taichung', store:'台中原渥', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客', trial_amt:999, total_amt:15999, name:'曾湘芸'},  // 音波6堂，成交
      {type:'新客', trial_amt:999, total_amt:999,   name:'詹詩儀'},  // 音波體驗，未成交
    ]
  },
  // ─── 8/22 板橋 ───────────────────────────────────────────
  {
    date:'2026-08-22', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15399, name:'陳慧君'},  // 香肩6堂，成交
      {type:'新客', trial_amt:2000, total_amt:7999,  name:'江靜頤'},  // 體雕三堂，成交
      {type:'新客', trial_amt:999,  total_amt:999,   name:'李婉秀'},  // 體雕體驗，未成交（產品1280簡郁珊不計）
    ]
  },
  // ─── 8/21 板橋 ───────────────────────────────────────────
  {
    date:'2026-08-21', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:2000, name:'李姿靜'},  // 體雕體驗，未成交
    ]
  },
  // ─── 8/20 板橋 ───────────────────────────────────────────
  {
    date:'2026-08-20', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:2999, total_amt:86249, name:'葉晏孜'},  // 體雕30堂，成交（780產品白婕瑜不計）
    ]
  },
  // ─── 8/22 東門 ───────────────────────────────────────────
  {
    date:'2026-08-22', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:54000, name:'鄭艾珉'},  // 體雕14堂+夏日攻略，成交（產品400不計）
      {type:'新客', trial_amt:2999, total_amt:32399, name:'周昱瑄'},  // 小香肩+體雕，成交
    ]
  },
  // ─── 8/21 東門 ───────────────────────────────────────────
  {
    date:'2026-08-21', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:16400, name:'鄭巧筠'},  // 腹部體雕6堂，成交
    ]
  },
  // ─── 8/20 東門 ───────────────────────────────────────────
  {
    date:'2026-08-20', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:17000, name:'周思妤'},  // 夏日攻略，成交（產品1280不計）
      {type:'新客', trial_amt:999,  total_amt:999,   name:'簡貝甯'},  // 體雕體驗，未成交
      {type:'新客', trial_amt:2999, total_amt:37999, name:'吳聖蕙'},  // 小香肩14堂，成交
    ]
  },
  {
    date:'2026-08-22', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0,     name:'謝羽柔'},
      {type:'新客', trial_amt:0, total_amt:82498, name:'溫日賢'},
    ]
  },
  {
    date:'2026-08-22', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:9999, name:'蔡亭君'},
    ]
  },
  {
    date:'2026-08-22', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:0, name:'梁平'},
    ]
  },
  {
    date:'2026-08-24', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:37000, name:'吳珮芸'},
      {type:'新客', trial_amt:2000, total_amt:17000, name:'蘇翌婷'},
      {type:'新客', trial_amt:2000, total_amt:7999,  name:'林宜蓁'},
    ]
  },
  {
    date:'2026-08-24', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:7199, total_amt:7199, name:'呂冠慧'},
      {type:'新客', trial_amt:2000, total_amt:2000, name:'蔡宜璇'},
    ]
  },
  {
    date:'2026-08-24', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'新客', trial_amt:999, total_amt:35999, name:'沈洛萍'},
    ]
  },
  {
    date:'2026-08-24', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:999, total_amt:18999, name:'黃子凌'},
    ]
  },
  {
    date:'2026-08-24', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:15999, name:'杜鎔羽'},
      {type:'新客', trial_amt:999,  total_amt:35999, name:'陳宣如'},
    ]
  },
  {
    date:'2026-08-24', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999,  name:'李康薇'},   // 體驗未成交
      {type:'新客', trial_amt:1998, total_amt:1998, name:'葉芷萱'},   // 體驗未成交，780自有產品劉沐晨售不計
    ]
  },
  {
    date:'2026-08-24', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞杉',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:4000, name:'林洛嫻'},  // 體驗+付訂，成交
      {type:'新客', trial_amt:999,  total_amt:999,  name:'許毓芳'},  // 體驗未成交
    ]
  },
  {
    date:'2026-08-24', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:77000, name:'陳韵茹'},
    ]
  },
  {
    date:'2026-08-24', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:88000, name:'練瑋庭'},
    ]
  },
  {
    date:'2026-08-24', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:180000, name:'黃淑怡'},
    ]
  },
  {
    date:'2026-08-25', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:1499, total_amt:3499, name:'宋怡岱'},  // 體驗+訂金，成交
    ]
  },
  {
    date:'2026-08-25', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:24997, name:'許心瑜'},  // 500自有產品蕭雅琪售不計
    ]
  },
  {
    date:'2026-08-25', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客', trial_amt:1998, total_amt:17498, name:'王羿文'},
    ]
  },
  {
    date:'2026-08-25', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0, name:'林千洐'},  // 分享客，潘姿璿分享一堂
    ]
  },
  {
    date:'2026-08-25', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'新客', trial_amt:999,  total_amt:999,   name:'洪維恆'},  // 體驗未成交
      {type:'新客', trial_amt:999,  total_amt:999,   name:'陳妤涵'},  // 體驗未成交，780自有產品劉子嫻售不計
      {type:'新客', trial_amt:1998, total_amt:17498, name:'周曉恩'},  // 成交
    ]
  },
  {
    date:'2026-08-25', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:100888, name:'林依璇'},
    ]
  },
  {
    date:'2026-08-25', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:31398, name:'吳蕙君'},
    ]
  },
  {
    date:'2026-08-25', storeKey:'ki_dongmen', store:'台北原綺', brand:'原綺', brandKey:'ki',
    consultant:'陳詩喬',
    clients:[
      {type:'新客', trial_amt:0, total_amt:14999, name:'張雁筑'},
    ]
  },
  {
    date:'2026-08-25', storeKey:'ki_taichung', store:'台中原綺', brand:'原綺', brandKey:'ki',
    consultant:'何欣穎',
    clients:[
      {type:'新客', trial_amt:0, total_amt:3500, name:'李佩葿'},
    ]
  },
  // ─── 2026-08-01 東門 ──────────────────────────
  {
    date:'2026-08-01', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳怡帆'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張心華'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'雍華珮'},
    ]
  },
  {
    date:'2026-08-01', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'詹靜宜'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'黃豐筑'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'葉亙慈'},
    ]
  },
  // ─── 2026-08-03 東門 ──────────────────────────
  {
    date:'2026-08-03', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'蔡子琪'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'丁予晨'},
    ]
  },
  {
    date:'2026-08-03', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'洪珮珊'},
    ]
  },
  // ─── 2026-08-04 東門 ──────────────────────────
  {
    date:'2026-08-04', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客體驗', trial_amt:7499, total_amt:0, name:'吳嘉馨'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'鄭宜庭'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'趙立嬅'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'夏芷柔'},
    ]
  },
  {
    date:'2026-08-04', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'張舒媛'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'黃鈺淩'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'鄭舒文'},
    ]
  },
  // ─── 2026-08-05 東門 ──────────────────────────
  {
    date:'2026-08-05', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客體驗', trial_amt:1998, total_amt:7999, name:'許瑩瑄'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'丁予晨'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'范家嘉'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李怡慧'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'劉巧婷'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'楊雨禾'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'顏利庭'},
    ]
  },
  {
    date:'2026-08-05', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'林雅珮'},
    ]
  },
  // ─── 2026-08-06 東門 ──────────────────────────
  {
    date:'2026-08-06', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'胡馨芝'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳冠云'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'王溱綾'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'翁文茜'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'王品雯'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'尹瞳婷'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'楊淨合'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'黃依恩'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'傅孟晞'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張可慧'},
    ]
  },
  {
    date:'2026-08-06', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'楊盈慈'},
    ]
  },
  // ─── 2026-08-07 東門 ──────────────────────────
  {
    date:'2026-08-07', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'施家穎'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳宜雅'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳侑潔'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林芸亘'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'尚明樺'},
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'林柔妤'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張奕絃'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'周宛萱'},
    ]
  },
  {
    date:'2026-08-07', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'周昱綺'},
    ]
  },
  // ─── 2026-08-08 東門 ──────────────────────────
  {
    date:'2026-08-08', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳凱婷'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林依君'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林幸蓉'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'曾怡婷'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'劉昀竺'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳虹如'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林詒婷'},
    ]
  },
  {
    date:'2026-08-08', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'劉亞姍'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林萬非'},
    ]
  },
  // ─── 2026-08-10 東門 ──────────────────────────
  {
    date:'2026-08-10', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客體驗', trial_amt:2000, total_amt:35000, name:'葉乃綺'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳若蓁'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'鄭雪君'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張鳳書'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'翁文茜'},
    ]
  },
  {
    date:'2026-08-10', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'溫婉喩'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'郭晏涵'},
    ]
  },
  {
    date:'2026-08-10', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'范允菱'},
    ]
  },
  // ─── 2026-08-11 東門 ──────────────────────────
  {
    date:'2026-08-11', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'黃美萍'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李姿瑩'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張雁筑'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳沛容'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳盈蓁'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'鄭宜萱'},
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳炘薿'},
    ]
  },
  {
    date:'2026-08-11', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳怡臻'},
    ]
  },
  // ─── 2026-08-12 東門 ──────────────────────────
  {
    date:'2026-08-12', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客體驗', trial_amt:1500, total_amt:0, name:'歐庭'},
      {type:'舊客體驗', trial_amt:999, total_amt:20000, name:'陳亮晴'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'洪晨雅'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'簡壎庭'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'楊雨禾'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳雅倫'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'劉佳榕'},
    ]
  },
  {
    date:'2026-08-12', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'張舜潔'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'王均端'},
    ]
  },
  // ─── 2026-08-13 東門 ──────────────────────────
  {
    date:'2026-08-13', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳依貞'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'胡馨芝'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李怡慧'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'周欣誼'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'趙立嬅'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張可慧'},
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'郭詠芷'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'郭詠茹'},
    ]
  },
  {
    date:'2026-08-13', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'李瑋庭'},
    ]
  },
  // ─── 2026-08-14 東門 ──────────────────────────
  {
    date:'2026-08-14', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客體驗', trial_amt:999, total_amt:0, name:'陳怡伶'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'施家穎'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'賴威琳'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'段宗萱'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'謝琦'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張妡栩'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林芸亘'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林幸蓉'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'丁予晨'},
    ]
  },
  {
    date:'2026-08-14', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳怡如'},
    ]
  },
  // ─── 2026-08-15 東門 ──────────────────────────
  {
    date:'2026-08-15', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'張家芸'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳芯伝'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'賴彥潔'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'劉倍嘉'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'莊媛婷'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林芷嫺'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張萱'},
    ]
  },
  {
    date:'2026-08-15', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'邱詩庭'},
    ]
  },
  // ─── 2026-08-17 東門 ──────────────────────────
  {
    date:'2026-08-17', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客體驗', trial_amt:2000, total_amt:35000, name:'彭柏渦'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳妮珈'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'高裴孜'},
    ]
  },
  {
    date:'2026-08-17', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳維芳'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'紀嘉芬'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'葉姿華'},
    ]
  },
  // ─── 2026-08-18 東門 ──────────────────────────
  {
    date:'2026-08-18', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'林梔廷'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'梁可潔'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張雁筑'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'楊雨禾'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李玲聿'},
    ]
  },
  {
    date:'2026-08-18', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳欣芃'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'江玫娟'},
    ]
  },
  // ─── 2026-08-19 東門 ──────────────────────────
  {
    date:'2026-08-19', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'劉佳榕'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'何欣'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李姿瑩'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'鄭宜庭'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張可慧'},
    ]
  },
  {
    date:'2026-08-19', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳阡榕'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'姚敏淳'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'凌嘉均'},
    ]
  },
  // ─── 2026-08-20 東門 ──────────────────────────
  {
    date:'2026-08-20', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳宜雅'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'莊媛婷'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'沈庭芝'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李怡慧'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'劉明宜'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'周欣誼'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'趙立媗'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'傅孟晞'},
    ]
  },
  {
    date:'2026-08-20', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'王惠頡'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'涂志梅'},
    ]
  },
  // ─── 2026-08-21 東門 ──────────────────────────
  {
    date:'2026-08-21', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'王品雯'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'胡馨芝'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳嘉馨'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'蔡子琪'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'黃安忻'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'劉仲恩'},
    ]
  },
  // ─── 2026-08-22 東門 ──────────────────────────
  {
    date:'2026-08-22', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客體驗', trial_amt:3499, total_amt:70599, name:'施秀諭'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'蕭雅方'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林雅珮'},
    ]
  },
  {
    date:'2026-08-22', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'洪玟潔'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'袁蔓媛'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林育亘'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'邱詩庭'},
    ]
  },
  // ─── 2026-08-24 東門 ──────────────────────────
  {
    date:'2026-08-24', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'吳妮珈'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'孫婕明'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'白崢鈺'},
    ]
  },
  {
    date:'2026-08-24', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳若蓁'},
    ]
  },
  // ─── 2026-08-25 東門 ──────────────────────────
  {
    date:'2026-08-25', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'張雁筑'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'黃雅琪'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'楊喬君'},
    ]
  },
  {
    date:'2026-08-25', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'顏瑋琪'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'周姈安'},
    ]
  },
  // ─── 2026-08-26 東門 ──────────────────────────
  {
    date:'2026-08-26', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'邱家榆',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:75000, name:'段蒔希'},
      {type:'新客', trial_amt:999,  total_amt:14400, name:'陳弈文'},
      {type:'新客', trial_amt:2000, total_amt:2000,  name:'陳詠筠'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'莊媛婷'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李怡慧'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'鄭羽汝'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'顏利庭'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_dongmen', store:'東門', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'高詩淳'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'蔡緹漆'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'鄭舒文'},
    ]
  },
  // ─── 2026-08-26 板橋 ──────────────────────────
  {
    date:'2026-08-26', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'森珮筠',
    clients:[
      {type:'新客',    trial_amt:999,  total_amt:5999,  name:'張德宣'},
      {type:'新客',    trial_amt:999,  total_amt:0,     name:'陳思穎'},
      {type:'新客',    trial_amt:3498, total_amt:0,     name:'蘇姿耘'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'陳容姍'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'吳欣芃'},
      {type:'舊客體驗',trial_amt:6000, total_amt:24000, name:'林珍妮'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'黃夙君'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'王意慧'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'蔡欣穎'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'蔡舒惟'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'蘇文玲'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_banqiao', store:'板橋', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'詹雁如'},
    ]
  },
  // ─── 2026-08-26 台中 ──────────────────────────
  {
    date:'2026-08-26', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'林雨芑',
    clients:[
      {type:'新客',    trial_amt:2000, total_amt:35000, name:'邱霈宜'},
      {type:'新客',    trial_amt:1998, total_amt:14400, name:'嚴文均'},
      {type:'新客',    trial_amt:999,  total_amt:0,     product_amt:780, name:'洪薇淳'},
      {type:'新客',    trial_amt:999,  total_amt:28800, name:'黃嘉儀'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'蔡佩珊'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'黃碧嫀'},
      {type:'舊客體驗',trial_amt:2000, total_amt:0,     name:'丁鈺憶'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'謝幀瑀'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'李佳璇'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'陳晏圻'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'洪豐家'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'謝宜君'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'郭子萍',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'李若喬'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李郁宣'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'何欣穎',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'王怡婷'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'呂秋玫',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'王翊萱'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張嘉芬'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'蘇軒儀'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_taichung', store:'台中', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'林沛晨'},
    ]
  },
  // ─── 2026-08-26 忠孝 ──────────────────────────
  {
    date:'2026-08-26', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'翁筱芸',
    clients:[
      {type:'新客',    trial_amt:999,  total_amt:3000,  name:'張凱琦'},
      {type:'舊客體驗',trial_amt:1299, total_amt:14725, name:'張琳'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'楊新瑞'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'亓子芸'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'簡詠恩'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'王詩涵',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'何思涵'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'朱庭慧'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'蔡佳憶'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'林可欣'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'陳宜玫'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李宛慈'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'李宜娟'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'于馨雅'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'公司',
    clients:[
      {type:'其他', trial_amt:0, total_amt:0, name:'何姿儀'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_zhongxiao', store:'忠孝', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'李珮瑄'},
    ]
  },
  // ─── 2026-08-26 站前 ──────────────────────────
  {
    date:'2026-08-26', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'吳凱婷',
    clients:[
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'林芸米'},
      {type:'舊客體驗',trial_amt:999, total_amt:15000, name:'李祖昀'},
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'趙羿婷'},
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'張晴雯'},
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'高菁蓉'},
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'黃泓維'},
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'蕭筠潔'},
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'蕭韶萱'},
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'江紫熏'},
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'王柳堤'},
      {type:'舊客',    trial_amt:0,   total_amt:0,     name:'操星羽'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'廖梓涵',
    clients:[
      {type:'新客', trial_amt:2000, total_amt:0, name:'顏郁玲'},
      {type:'舊客', trial_amt:0,   total_amt:0, name:'紀雅慧'},
      {type:'舊客', trial_amt:0,   total_amt:0, name:'林宣妤'},
      {type:'舊客', trial_amt:0,   total_amt:0, name:'鄭安恬'},
      {type:'舊客', trial_amt:0,   total_amt:0, name:'張心寧'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_zhanqian', store:'站前', brand:'原渥', brandKey:'wo',
    consultant:'其他',
    clients:[
      {type:'舊客', trial_amt:0, total_amt:0, name:'劉子嫺'},
      {type:'舊客', trial_amt:0, total_amt:0, name:'張虔瑜'},
    ]
  },
  // ─── 2026-08-26 大安 ──────────────────────────
  {
    date:'2026-08-26', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'蔡亞杉',
    clients:[
      {type:'新客',    trial_amt:2000, total_amt:35000, name:'吳欣容'},
      {type:'舊客體驗',trial_amt:999,  total_amt:0,     name:'黃澄珊'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'陳宜庭'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'林彥君'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'楊鈞婷'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'吳昕芸'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'馮盈捷'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'謝冠英'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'湯淳涵'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'陳孟汾'},
      {type:'舊客',    trial_amt:0,    total_amt:0,     name:'張雅媛'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'wo_daan', store:'大安', brand:'原渥', brandKey:'wo',
    consultant:'李晨研',
    clients:[
      {type:'新客', trial_amt:999, total_amt:0, name:'洪慈慧'},
      {type:'舊客', trial_amt:0,   total_amt:0, name:'陳佳容'},
      {type:'舊客', trial_amt:0,   total_amt:0, name:'蔡淑華'},
    ]
  },
  // ─── 台中原綺 2026-08-26 ──────────────────────────────────
  {
    date:'2026-08-26', storeKey:'ki_taichung', store:'台中', brand:'原綺', brandKey:'ki',
    consultant:'何欣穎',
    clients:[
      {type:'新客', trial_amt:0, total_amt:100000, name:'沈若筠'},
    ]
  },
  // ─── 台北原綺 2026-08-26 ──────────────────────────────────
  {
    date:'2026-08-26', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'柯孟君',
    clients:[
      {type:'新客', trial_amt:0, total_amt:68999, name:'賴岱瑛'},
      {type:'新客', trial_amt:0, total_amt:31999, name:'杜籽济'},
      {type:'新客', trial_amt:0, total_amt:111499, name:'潘欣蕾'},
      {type:'新客', trial_amt:0, total_amt:0,      name:'邱羿捷'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'陳甯',
    clients:[
      {type:'新客', trial_amt:0, total_amt:32998, name:'黃栩鎧'},
      {type:'新客', trial_amt:0, total_amt:86887, name:'洪嘉憶'},
      {type:'新客', trial_amt:0, total_amt:0,     name:'蔡秀娥'},
    ]
  },
  {
    date:'2026-08-26', storeKey:'ki_dongmen', store:'台北', brand:'原綺', brandKey:'ki',
    consultant:'計品卉',
    clients:[
      {type:'新客', trial_amt:0, total_amt:22000, name:'黃蜜蜜'},
      {type:'新客', trial_amt:0, total_amt:14999, name:'張雅情'},
      {type:'新客', trial_amt:0, total_amt:0,     name:'林薇琦'},
    ]
  },
  // 新增記錄時複製上面的格式
];
