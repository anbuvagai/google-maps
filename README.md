 (in command prompt)  run  
 npx create-expo-app -t expo-template -blank-typescript

open    vs code 

running android emulator through vs code

![Screenshot 2025-01-07 121726](https://github.com/user-attachments/assets/84af3b2b-123b-4500-916a-9156961ebd48)


 run
 npm run start

 install
 "react-native-geolocation-service"
 "react-native-maps"
 "expo-linking"

![Screenshot 2025-01-07 145311](https://github.com/user-attachments/assets/833623a8-9488-43fc-81e2-308903ebd0cb)

create google API in google cloud console
enable 
Maps SDK for Android
Directions API
Maps JavaScript API					
Places API

![Screenshot 2025-01-07 123938](https://github.com/user-attachments/assets/f8222cde-e863-468f-a180-b7fcf2b1afc2)




run
npx expo prebuild


add 
android\app\src\main\AndroidManifest.xml
<meta-data android:name="com.google.android.geo.API_KEY" android:value="AIzaSyB9A7mFonAZxp3xtbU72JHQ3U4aqqfdZoQ"/>
<uses-library android:name="org.apache.http.legacy" android:required="false"/>


run
npx expo run:android



![Screenshot 2025-01-07 145440](https://github.com/user-attachments/assets/d80b87e5-e978-4045-ac77-64f2ffa8d11d)


  
