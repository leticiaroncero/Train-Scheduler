var firebaseConfig = {
    apiKey: "AIzaSyCrqH5EhH6_H91hCtnUT8fSgTCzCm2szwo",
    authDomain: "train-scheduler-4f471.firebaseapp.com",
    databaseURL: "https://train-scheduler-4f471.firebaseio.com",
    projectId: "train-scheduler-4f471",
    storageBucket: "train-scheduler-4f471.appspot.com",
    messagingSenderId: "925635835251",
    appId: "1:925635835251:web:ef7f58d7aa2522355a4106",
    measurementId: "G-QR91SE5WT8"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var name = "";
var destination = "";
var firstTrain = "";
var frequency = "";

$("#add-train").on("click", function (event) {
    event.preventDefault();

    name = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#first-train").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref().push({
        trainName: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
    });

    $("#train-name").val("")
    $("#destination").val("")
    $("#first-train").val("")
    $("#frequency").val("")
});

database.ref().on("child_added", function (childSnapshot) {
    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().firstTrain;
    var frequency = childSnapshot.val().frequency;

    $("#my-table").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + "" + "</td><td>" + "" + "</td><tr>")
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});