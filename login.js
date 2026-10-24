import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

  var login=document.getElementById("login")
  const auth = getAuth(); 

    

  login.addEventListener("click", function (){
   var password =document.getElementById("password").value;
   var email =document.getElementById("Email").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // window.location.href="tdo.html"
   alert("helo")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
console.log("pky");

    } )










    
