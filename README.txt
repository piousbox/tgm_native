
== Todo ==

* let's implement a login

== Done ==

== Setup ==

 npm install --save react-native-gesture-handler
 react-native link react-native-gesture-handler
 react-native link react-native-vector-icons

== Develop ==

 react-native run-android

 react-native run-ios
 npm run start
 
== Test ==

 npm run test
 
== Build Setup ==

From: https://facebook.github.io/react-native/docs/signed-apk-android

 keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

key password: simple_password
 keytool -list -v -keystore ~/.android/debug.keystore
 adb uninstall "com.wasya_native2"
 
== Build Redeploy ==

 cd android
 ./gradlew clean
 ./gradlew assembleRelease

/Users/piousbox/projects/react/wasya_native/android/app/build/outputs/apk



== Troubleshooting ==
=== xcrun: error: unable to find utility "instruments", not a developer tool or in PATH ===
https://stackoverflow.com/questions/39778607/error-running-react-native-app-from-terminal-ios

