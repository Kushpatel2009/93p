
const firebaseConfig = {
      apiKey: "AIzaSyCKnDhs7qQTpkDfBtXnxXnQaPBnKbjE2aM",
      authDomain: "chat-app-ff0bf.firebaseapp.com",
      projectId: "chat-app-ff0bf",
      storageBucket: "chat-app-ff0bf.appspot.com",
      messagingSenderId: "522599470991",
      appId: "1:522599470991:web:268e12f5708fdb1d011dfa",
      measurementId: "G-32BN069D8P"
    };
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
