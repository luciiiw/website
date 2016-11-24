#!/bin/bash

npm install -g angular-cli
npm install -g firebase-tools
echo "export const SECRETS = { FIREBASE_API_KEY: $FIREBASE_DEV_API_KEY }" > src/configs/secrets.ts
ng build
firebase deploy -P $FIREBASE_DEV_PROJECT_ID --token=$FIREBASE_TOKEN --non-interactive
