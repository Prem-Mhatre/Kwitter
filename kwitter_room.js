var firebaseConfig = {
      apiKey: "AIzaSyDQp5AmDCu6T6RM5XGEIZExEjay6Rql8zU",
      authDomain: "kwitter-20df5.firebaseapp.com",
      databaseURL: "https://kwitter-20df5-default-rtdb.firebaseio.com",
      projectId: "kwitter-20df5",
      storageBucket: "kwitter-20df5.appspot.com",
      messagingSenderId: "46770199928",
      appId: "1:46770199928:web:7ec01cc9fb27515b753c8d",
      measurementId: "G-1FKRK5FE1V"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"
    
    function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
    }
  
    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    row = "<div class='room_container'><div class='room_name' id="+ Room_names +" onclick='redrectToRoomName(this.id)'>#" + Room_names + "</div> <hr></div>";
    document.getElementById("output").innerHTML += row;
    });});}
    getData();
  
    function redrectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }

    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");

        window.location = "index.html";
    }