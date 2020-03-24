const customExpress = require('./config/customExpress')
const app = customExpress();
const port = 3000;
const admin = require('firebase-admin');
const serviceAccount = require("./service-account-file.json");
const storage = admin.storage();
const storageRef = storage.ref();

let firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pandoces-cp.firebaseio.com",
  apiKey: "AIzaSyD1_qM6HcCnG_Bjqq672JM0FpvGtDmnxvc",
  authDomain: "pandoces-cp.firebaseapp.com",
  databaseURL: "https://pandoces-cp.firebaseio.com",
  projectId: "pandoces-cp",
  storageBucket: "pandoces-cp.appspot.com",
  messagingSenderId: "859331037480",
  appId: "1:859331037480:web:6241c1ea9951751042681d",
  measurementId: "G-HD55D1749M"
  };

admin.initializeApp({firebaseConfig});

app.listen(port, () =>{
  console.log(`Rodando na Porta ${port}`)
})

