import { database } from "./config.js"
import { set,ref,push } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";
var addTask=document.getElementById("add")

addTask.addEventListener("click",function() {
            var input = document.getElementById("taskInput");
            var task = input.value.trim();

            if (task === "") {
                alert("Please enter a task!");
                return;
            }

            var li = document.createElement("li");
            li.textContent = task;

            var btn = document.createElement("button");
            btn.textContent = "Delete";
            btn.className = "delete-btn";

            btn.onclick = function() {
                li.remove();
            };

            li.appendChild(btn);
            document.getElementById("taskList").appendChild(li);

            input.value = "";
            
        })


     window.deleteAll=function() {
            document.getElementById("taskList").innerHTML = "";
}

// function addTask() {
//     let input = document.getElementById("taskInput");
//     let task = input.value.trim();

//     if (task === "") {
//         alert("Please enter a task!");
//         return;
//     }

//     let li = document.createElement("li");
//     let span = document.createElement("span");
//     span.textContent = task;

//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.className = "delete-btn";

//     deleteBtn.onclick = function () {
//         li.remove();
//     };

//     li.appendChild(span);
//     li.appendChild(deleteBtn);

//     document.getElementById("taskList").appendChild(li);

//     input.value = "";
// }

function deleteAll() {
    document.getElementById("taskList").innerHTML = "";
}

       
function showResult() {
     var scoped=ref(database,`inputs`) ;
     var newR=push(scoped);
     var id=newR.key;
   

     var object={ 
        k:id,
        user:input.value
      
     }
     set(newR,object)
     .then(() => { 
       alert("hi")
     })
     .catch((error )=>{ 
        console.log(error);
        
     })
     
    
}

// retryBtn.addEventListener("click", () => {
//     currentQuestionIndex = 0;
//     score = 0;
//     resultScreen.classList.add("hidden");   
//     quizScreen.classList.remove("hidden");
//     loadQuestion();
// });


// loadQuestion();


 
    