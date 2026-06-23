import { initializeApp, getApps } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import defaultFirebaseConfig from "../firebase-applet-config.json";

let firebaseConfig = defaultFirebaseConfig;
try {
  const storedOverride = localStorage.getItem("hospital_firebase_config_override");
  if (storedOverride) {
    const parsed = JSON.parse(storedOverride);
    if (parsed && parsed.projectId) {
      firebaseConfig = { ...defaultFirebaseConfig, ...parsed };
    }
  }
} catch (e) {
  console.error("Error loading Firebase override config:", e);
}

const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

// Initialize Firestore using the configured database ID with long polling to prevent connection hanging
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
}, firebaseConfig.firestoreDatabaseId || "default-db");

export const auth = getAuth(app);

