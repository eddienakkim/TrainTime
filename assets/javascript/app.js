var firebaseConfig = {
    apiKey: "AIzaSyAUuKAKICdIn5KfiE4IPggcmf6josM__gw",
    authDomain: "class-project-bab91.firebaseapp.com",
    databaseURL: "https://class-project-bab91.firebaseio.com",
    projectId: "class-project-bab91",
    storageBucket: "class-project-bab91.appspot.com",
    messagingSenderId: "1031038654969",
    appId: "1:1031038654969:web:a20d1760da945a23054528",
    measurementId: "G-LE4B97CM2C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var trainData = firebase.database();

  $("#submitbtn").on("click", function(){
      var trainName = $("#name-input").val().trim()
      var dest = $("#destination-input").val().trim()
      var firstTrain = $("#firstTrain-input").val().trim()
      var freq = $("#frequency-input").val().trim()
  })