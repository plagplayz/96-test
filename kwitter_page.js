const firebaseConfig = {
    apiKey: "AIzaSyCfkdmkOMbIa8JobCKrTnrJrtXS_ABr1xg",
    authDomain: "test-49470.firebaseapp.com",
    databaseURL: "https://test-49470-default-rtdb.firebaseio.com",
    projectId: "test-49470",
    storageBucket: "test-49470.appspot.com",
    messagingSenderId: "405383266344",
    appId: "1:405383266344:web:e3be67ec09c0a24d74b51d",
  };

  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("output").innerHTML=user_name+" : "+msg;
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();
