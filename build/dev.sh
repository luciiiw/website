#!/bin/bash

npm install -g angular-cli
npm install -g firebase-tools
npm install firebase
rm node_modules/firebase/firebase.d.ts
echo "export const SECRETS = { FIREBASE_API_KEY: '$FIREBASE_DEV_API_KEY' }" > src/configs/secrets.ts
ng build
firebase deploy -P $FIREBASE_DEV_PROJECT_ID --token=$FIREBASE_TOKEN --non-interactive
