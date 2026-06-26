import { initializeApp, getApps } from "firebase/app";
import { 
  initializeFirestore, 
  enableIndexedDbPersistence,
  CACHE_SIZE_UNLIMITED,
  doc,
  getDocFromServer
} from "firebase/firestore";
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
  experimentalForceLongPolling: true,
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
}, firebaseConfig.firestoreDatabaseId || "(default)");

// Detect if we are running inside the AI Studio preview iframe or sandboxed container environment
const isIframe = typeof window !== "undefined" && (
  window.self !== window.top ||
  window.location.hostname.includes("run.app") ||
  navigator.userAgent.includes("aistudio")
);

if (!isIframe) {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code == 'failed-precondition') {
      console.warn("Multiple tabs open, persistence can only be enabled in one tab at a time.");
    } else if (err.code == 'unimplemented') {
      console.warn("The current browser does not support all of the features required to enable persistence");
    }
  });
} else {
  console.log("Running inside AI Studio preview iframe: Multi-tab IndexedDB persistence disabled to prevent connection lockups.");
}

// Critical validation constraint: Test connection to Firestore on initialization
async function testConnection() {
  try {
    await getDocFromServer(doc(db, "hospital_clinical_records", "test-connection"));
    console.log("Firestore connection test: successfully connected to the backend.");
  } catch (error) {
    if (error instanceof Error && (error.message.includes("offline") || error.message.includes("Could not reach"))) {
      console.error("Firestore offline warning - please check your Firebase configuration: ", error.message);
    } else {
      console.warn("Firestore connection check status: ", error);
    }
  }
}
testConnection();

export const auth = getAuth(app);


