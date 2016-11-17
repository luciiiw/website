import { SECRETS } from './secrets';

export const CONFIG = {
  firebaseConfig: {
    apiKey: SECRETS.FIREBASE_API_KEY,
    authDomain: "uw-blueprint-dev.firebaseapp.com",
    databaseURL: "https://uw-blueprint-dev.firebaseio.com",
    storageBucket: "uw-blueprint-dev.appspot.com"
  }
}
