#!/bin/bash

npm install -g angular-cli
npm install -g firebase-tools
echo "export const SECRETS = { FIREBASE_API_KEY: $FIREBASE_PROD_API_KEY }" > src/configs/secrets.ts
ng build
firebase deploy -P $FIREBASE_PROD_PROJECT_ID --token=$FIREBASE_TOKEN --non-interactive
