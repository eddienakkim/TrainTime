var config = {
    apiKey: "AIzaSyCEgOutiR_BTJMCdip9xHceEeqD41WImy8",
    authDomain: "class-project-f8b83.firebaseapp.com",
    databaseURL: "https://class-project-f8b83.firebaseio.com/",
    projectId: "class-project-f8b83",
    storageBucket: "class-project-f8b83.appspot.com",
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submitbtn").on("click", function(event){
    event.preventDefault();
    var trainName = $("#name-input").val().trim()
    var dest = $("#destination-input").val().trim()
    var firstTrain = moment($("#firstTrain-input").val().trim(), "hh:mm").subtract(10, "years").format("X");
    var freq = $("#frequency-input").val().trim()

    var newTrain = {
        name: trainName,
        destination: dest,
        firstTrain: firstTrain,
        frequency: freq
    }
    
    
    database.ref().push(newTrain)

    $("#name-input").val("")
    $("#destination-input").val("")
    $("#firstTrain-input").val("")
    $("#frequency-input").val("")

  })

  database.ref().on("child_added", function(snapshot){
      var name = snapshot.val().name;
      var destination = snapshot.val().destination;
      var firstTrain = snapshot.val().firstTrain;
      var frequency = snapshot.val().frequency;

      var remainder = moment().diff(moment.unix(firstTrain), "minutes")%frequency;
      var minutes = frequency - remainder;
      var arrival = moment().add(minutes,"m").format("hh:mm A");

      $("#traintable > tBody").append("<tr><td>"+name+"</td><td>"+destination+"</td><td>"+frequency+"</td><td>"+arrival+"</td><td>"+minutes+"</td><td>")
  })

  