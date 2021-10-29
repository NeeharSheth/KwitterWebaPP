function add_user(){
    username= document.getElementById("username_input").value;
    username= username.replace(" ","");

    if(username){
    localStorage.setItem("username",username);
    window.location= "kwitter_room.html";
}
}

function login(){
    used_username= localStorage.getItem("username");
    if(used_username){
    window.location= "kwitter_room.html";
    }}
