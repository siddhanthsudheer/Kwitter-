
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
likes:0
});

documnet.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
     firebase_message_id = childKey;
     message_data = childData;

     function redirectToRoomName(name)
     {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
     }

     function logout()
     {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
     }
      
      
     function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
   

     function getData()
     { 
     firebase_message_id = childKey;    
     message_data = childData;

     console.log(firebase_message_id);
     console.log(message_data);
     name = message_data['name'];
     message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"img class='user_tick.png'></h4>";
message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+ "onclick='updateLike(this.id)'>";
span_with_tag = ">span class='glyphicon glyphicon-thumbs'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_data + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

    } }); }); }
    getData();

    function updateLike(message_id)
    {
        console.log("clicked on like button - " + message_id);
         button_id = message_id;
        Likes = document.getElementById(button_id).value;
         updated_likes = Number(likes);
        console.log(updated_likes);
    
         firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
        });

    }
