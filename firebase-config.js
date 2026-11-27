// Firebase 設定（公開資訊，資料保護靠 Firestore 權限規則）
export const firebaseConfig = {
  apiKey: "AIzaSyBky02bKmEFXmGhUFwC_sfDIcjwqUUViE8",
  authDomain: "brand-performance-f8b01.firebaseapp.com",
  projectId: "brand-performance-f8b01",
  storageBucket: "brand-performance-f8b01.firebasestorage.app",
  messagingSenderId: "101750341824",
  appId: "1:101750341824:web:99a17cc71ec35bd209ad25"
};

// 編輯者白名單（要同步修改 Firestore 權限規則）
export const EDITORS = [
  'chengmaomao0317@gmail.com',
  'jatw14701@gmail.com',
  'lalueur.marketing@gmail.com',
];
