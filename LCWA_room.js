var firebaseConfig = {
  apiKey: "AIzaSyBdBHU3f_WIUHPNgM2X6oIeSaR8dmbUXY8",
  authDomain: "nobel-corona-virus-chatbo-cwx9.firebaseapp.com",
  databaseURL: "https://nobel-corona-virus-chatbo-cwx9-default-rtdb.firebaseio.com",
  projectId: "nobel-corona-virus-chatbo-cwx9",
  storageBucket: "nobel-corona-virus-chatbo-cwx9.appspot.com",
  messagingSenderId: "804901739452",
  appId: "1:804901739452:web:2cc2a25dd0341714dd29b9",
  measurementId: "G-S6T6CP3V0M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "LCWA_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "LCWA_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }
  