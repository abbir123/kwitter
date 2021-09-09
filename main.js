import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHgQ26VcRHjoVyWUuptzJOYHv_ZyogLlI",
    authDomain: "kwitter-2e6ee.firebaseapp.com",
    databaseURL: "https://kwitter-2e6ee-default-rtdb.firebaseio.com",
    projectId: "kwitter-2e6ee",
    storageBucket: "kwitter-2e6ee.appspot.com",
    messagingSenderId: "366258150090",
    appId: "1:366258150090:web:f06ac15e87f11bef013233"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  function addUser(){
      userName=document.getElementById("userName").value;
      firebase.database().ref("/").child(userName).update({
          purpose: "addUser" 
      })
      
      
  }