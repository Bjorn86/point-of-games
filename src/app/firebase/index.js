// IMPORT PACKAGES
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// IMPORT CONFIG
import { firebaseConfig } from './config';

// INITIALIZE FIREBASE AND METHODS
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
