const firebaseConfig = {
    apiKey: "AIzaSyBD3wKexnw799hEbL9g9QiEc6acL5KncQw",
    authDomain: "letschatt-9d732.firebaseapp.com",
    databaseURL: "https://letschatt-9d732-default-rtdb.firebaseio.com",
    projectId: "letschatt-9d732",
    storageBucket: "letschatt-9d732.appspot.com",
    messagingSenderId: "334987713789",
    appId: "1:334987713789:web:a336fddef53b973275b294"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  var username= localStorage.getItem("username");
    document.getElementById("Welcome").innerHTML= "Welcome, "+username+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function addroom(){
      room_name= document.getElementById("room_input").value;
      firebase.database().ref("/").child(room_name).update({
purpose: "making of room"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}

function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
