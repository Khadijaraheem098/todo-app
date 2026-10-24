import { getAuth , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
  var sinap = document.getElementById("sinap");
  const auth = getAuth(); 

    

   sinap .addEventListener("click", function (){ 
    var password =document.getElementById("password").value
   var email =document.getElementById("Email").value
     createUserWithEmailAndPassword(auth, email,password)
      .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href="login.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  console.log("hi");
  
});

 








    
