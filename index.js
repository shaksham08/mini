//! Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJcatdirgvtOWG2oCZbz4I7zai3XtZYFA",
  authDomain: "fieldservices-173ea.firebaseapp.com",
  databaseURL: "https://fieldservices-173ea.firebaseio.com",
  projectId: "fieldservices-173ea",
  storageBucket: "fieldservices-173ea.appspot.com",
  messagingSenderId: "534164270264",
  appId: "1:534164270264:web:8a632fa04b824137d1584d",
  measurementId: "G-ZZ66B4H3GD",
};
//! Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//! Get a reference to the database service
var database = firebase.database();

let slot1temp = document.querySelector("#slot1temp");
let slot1humidity = document.querySelector("#slot1humidity");
let slot1product = document.querySelector("#slot1product");
let slot1weight = document.querySelector("#slot1weight");
let slot1harvest = document.querySelector("#slot1harvest");
let slot1expiry = document.querySelector("#slot1expiry");
let slotone = document.querySelector("#slot1");

console.log(slot1temp);

setInterval(() => {
  firebase
    .database()
    .ref("temp/value")
    .once("value")
    .then(function (snapshot) {
      let data = snapshot.val();
      slot1temp.textContent = `Temp : ${data} degree`;
      console.log(typeof data);
      if (parseFloat(data) > 30) {
        slotone.classList.add("danger");
      } else {
        slotone.classList.remove("danger");
      }
    });

  firebase
    .database()
    .ref("humidity/value")
    .once("value")
    .then(function (snapshot) {
      let data = snapshot.val();
      slot1humidity.textContent = `Humidity : ${data} %`;
    });

  firebase
    .database()
    .ref("Stock/1/productName")
    .once("value")
    .then(function (snapshot) {
      let data = snapshot.val();
      slot1product.textContent = `Product Name : ${data}`;
    });

  firebase
    .database()
    .ref("Stock/1/weight")
    .once("value")
    .then(function (snapshot) {
      let data = snapshot.val();
      slot1weight.textContent = `Weight : ${data} Kg`;
    });

  firebase
    .database()
    .ref("Stock/1/harvestDate")
    .once("value")
    .then(function (snapshot) {
      let data = snapshot.val();
      slot1harvest.textContent = `Harvest Date : ${data}`;
    });

  firebase
    .database()
    .ref("Stock/1/expiryDate")
    .once("value")
    .then(function (snapshot) {
      let data = snapshot.val();
      slot1expiry.textContent = `Expiry Date : ${data}`;
    });
}, 1500);
