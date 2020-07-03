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

let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humidity");
let tempvalue = document.querySelector("#tempvalue");
let humidityvalue = document.querySelector("#Humidityvalue");

function updatetemp(val) {
  tempvalue.textContent = `Temp : ${val}`;
  firebase.database().ref("temp").set({
    value: val,
  });
}

function updatehumidity(val) {
  humidityvalue.textContent = `Humidity : ${val}`;
  firebase.database().ref("humidity").set({
    value: val,
  });
}
