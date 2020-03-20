let storageCloud = require('@google-cloud/storage')

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
let firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
let admin = require("firebase-admin");
let serviceAccount = require("../service-account-file.json");

// TODO: Replace the following with your app's Firebase project configuration
let firebaseConfig = {
    apiKey: "AIzaSyD1_qM6HcCnG_Bjqq672JM0FpvGtDmnxvc",
    authDomain: "pandoces-cp.firebaseapp.com",
    databaseURL: "https://pandoces-cp.firebaseio.com",
    projectId: "pandoces-cp",
    storageBucket: "pandoces-cp.appspot.com",
    messagingSenderId: "859331037480",
    appId: "1:859331037480:web:6241c1ea9951751042681d",
    measurementId: "G-HD55D1749M"
  };
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pandoces-cp.firebaseio.com"
    });

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the storage service, which is used to create references in your storage bucket
  let storage = admin.storage();

module.exports = app => {
    app.get("/bolos",(req, res)=> {
        res.json('Get dos bolos');
    })

    app.post("/bolos", (req,res) => {
        console.log(req.body);
        res.json('Post dos bolos');
    })
}