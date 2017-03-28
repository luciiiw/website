import { SECRETS } from './secrets';

export const CONFIG = {
  firebaseConfig: {
    apiKey: SECRETS.FIREBASE.API_KEY,
    authDomain: SECRETS.FIREBASE.AUTH_DOMAIN,
    databaseURL: SECRETS.FIREBASE.DATABASE_URL,
    storageBucket: SECRETS.FIREBASE.STORAGE_BUCKET,
    messagingSenderId: SECRETS.FIREBASE.MESSAGING_SENDER_ID
  }
}
