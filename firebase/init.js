import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 🔐 Control de dominios autorizados (Comentar línea para deshabilitar restricción)
const ALLOWED_DOMAINS = ['wiihope.web.app', 'localhost'];

let auth = null;
let db = null;

const isAllowed = !ALLOWED_DOMAINS || ALLOWED_DOMAINS.includes(window.location.hostname);

if (isAllowed) {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} else {
  console.warn('🚫 Firebase deshabilitado en este dominio:', window.location.hostname);
}

export { auth, db };