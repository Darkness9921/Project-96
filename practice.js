

   
  var firebaseConfig = {
    apiKey: "AIzaSyAz1sGIAomTJhPa-4Y_g5htUOFL8kBGmOE",
    authDomain: "covid-19bot-hlnw.firebaseapp.com",
    databaseURL: "https://covid-19bot-hlnw-default-rtdb.firebaseio.com",
    projectId: "covid-19bot-hlnw",
    storageBucket: "covid-19bot-hlnw.appspot.com",
    messagingSenderId: "14219727959",
    appId: "1:14219727959:web:f4067c8c137420af177f12"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
