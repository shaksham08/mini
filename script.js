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

function getData() {
  return Math.random();
}
var chartT = new Highcharts.Chart({
  chart: {
    renderTo: "chart-temperature",
    backgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
      stops: [
        [0, "rgb(255, 255, 255)"],
        [1, "rgb(200, 200, 255)"],
      ],
    },
  },
  title: { text: "Temperature" },
  series: [
    {
      showInLegend: false,
      data: [],
    },
  ],
  plotOptions: {
    line: { animation: false, dataLabels: { enabled: true } },
    series: { color: "#059e8a" },
  },
  xAxis: { type: "datetime", dateTimeLabelFormats: { second: "%H:%M:%S" } },
  yAxis: {
    title: { text: "Temperature (Celsius)" },
    //title: { text: 'Temperature (Fahrenheit)' }
  },
  credits: { enabled: false },
});
setInterval(function () {
  firebase
    .database()
    .ref("temp/value")
    .once("value")
    .then(function (snapshot) {
      let data = snapshot.val();

      let x = new Date().getTime();
      // y = parseFloat(this.responseText);
      //console.log(this.responseText);

      let y = parseFloat(data);
      if (chartT.series[0].data.length > 100) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
    });
}, 5000);

var chartH = new Highcharts.Chart({
  chart: {
    renderTo: "chart-humidity",
    backgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
      stops: [
        [0, "rgb(255, 255, 255)"],
        [1, "rgb(200, 200, 255)"],
      ],
    },
  },
  title: { text: "Humidity" },

  series: [
    {
      showInLegend: false,
      data: [],
    },
  ],
  plotOptions: {
    line: { animation: false, dataLabels: { enabled: true } },
  },
  xAxis: {
    type: "datetime",
    dateTimeLabelFormats: { second: "%H:%M:%S" },
  },

  yAxis: {
    title: { text: "Humidity (%)" },
  },
  credits: { enabled: false },
});
setInterval(function () {
  firebase
    .database()
    .ref("humidity/value")
    .once("value")
    .then(function (snapshot) {
      let data = snapshot.val();

      let x = new Date().getTime();
      // y = parseFloat(this.responseText);
      //console.log(this.responseText);

      let y = parseFloat(data);
      if (chartH.series[0].data.length > 100) {
        chartH.series[0].addPoint([x, y], true, true, true);
      } else {
        chartH.series[0].addPoint([x, y], true, false, true);
      }
    });
}, 5000);

chartT.setOptions({
  chart: {
    style: {
      fontFamily: "serif",
    },
  },
});

chartH.setOptions({
  chart: {
    style: {
      fontFamily: "serif",
    },
  },
});
