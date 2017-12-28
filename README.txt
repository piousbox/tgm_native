
cd my-app && react-native start # this is for develpment, somehow. Can I have hot swapping?
cd my-app && react-native run-android
cd my-app && react-native bundle --dev false --platform android --entry-file App.js \
  --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle \
  --assets-dest ./android/app/src/main/res/

/usr/local/node/bin/npm install --save create-react-native-app
/usr/local/node/bin/npm run create-react-native-app my-app
