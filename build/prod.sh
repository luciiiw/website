#!/bin/bash
echo "export const SECRETS = { FIREBASE: { API_KEY: '$FIREBASE_PROD_API_KEY', AUTH_DOMAIN: '$FIREBASE_PROD_AUTH_DOMAIN', DATABASE_URL: '$FIREBASE_PROD_DATABASE_URL', STORAGE_BUCKET: '$FIREBASE_PROD_STORAGE_BUCKET', MESSAGING_SENDER_ID: '$FIREBASE_PROD_MESSAGING_SENDER_ID' } }" > src/configs/secrets.ts
ng build
firebase deploy -P $FIREBASE_PROD_PROJECT_ID --token=$FIREBASE_TOKEN --non-interactive
