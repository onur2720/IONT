import React, {useEffect, useState} from 'react';
import {initializeApp} from 'firebase/app'
const firebaseConfig =  {
        apiKey: "AIzaSyC0InSOpWMWjlVdwrB6VtZ3fp5fzcfs_CQ",
        authDomain: "skole-9161f.firebaseapp.com",
        databaseURL: "https://skole-9161f-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "skole-9161f",
        storageBucket: "skole-9161f.appspot.com",
        messagingSenderId: "342333892337",
        appId: "1:342333892337:web:80d870ed1a5c6943482b50",
        measurementId: "G-VWV28X2CEW"
      };

      function initFirebase() {
          if(!firebase.apps.length) {
            const app = initializeApp(firebaseConfig);

          }
      }
      initFirebase();
      export {firebase};