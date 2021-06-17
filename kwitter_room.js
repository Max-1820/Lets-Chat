var firebaseConfig = {
  apiKey: "AIzaSyDfQZbfRPbv2TMnB6AU3UFFtfOnZDgB8xs",
  authDomain: "let-s-chat-399e2.firebaseapp.com",
  projectId: "let-s-chat-399e2",
  storageBucket: "let-s-chat-399e2.appspot.com",
  messagingSenderId: "104123899068",
  appId: "1:104123899068:web:6cceca3c80577a68ae84b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
