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
   
username= localStorage.getItem("username");
room_name= localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
/*console.log(firebase_message_id);
console.log(message_data);*/
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_with_tag= "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>"+message+"</h4>";
like_with_tag="<button class='btn btn-warning' id="+firebase_message_id+" onclick='updateLike(this.id)' value="+like+">";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+" </span></button><hr>"
row= name_with_tag+message_with_tag+like_with_tag+span_with_tag;
document.getElementById("output").innerHTML+= row;
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function msg_send(){
msg= document.getElementById("msg_input").value;
firebase.database().ref(room_name).push({
      name: username,
message: msg,
like: 0
});
document.getElementById("msg_input").value="";
}

function updateLike(name){
button_id= name;
console.log(name);
likes= document.getElementById(button_id).value;
console.log(likes);
updated_likes= Number(likes)+1;

firebase.database().ref(room_name).child(button_id).update({
      like: updated_likes
});
}
