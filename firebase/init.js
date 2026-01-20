// 🚨 SOLO permite Firebase en dominio oficial
const ALLOWED_DOMAINS = ['wiihope.web.app', 'localhost'];

const currentDomain = window.location.hostname;

if (!ALLOWED_DOMAINS.includes(currentDomain)) {
  console.warn('🚫 Firebase deshabilitado en este dominio');
  export const auth = null;
  export const db = null;
} else {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
}