var registeredUsers = [];
var currentTab = 'login'; 
var loggedInUserEmail = "";


var authBox = document.getElementById('authBox');
var todoBox = document.getElementById('todoBox');
var authTitle = document.getElementById('authTitle');
var authEmailInput = document.getElementById('authEmail');
var authPasswordInput = document.getElementById('authPassword');
var authSubmitBtn = document.getElementById('authSubmitBtn');
var currentUserLabel = document.getElementById('currentUserLabel');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');


function toggleTab(targetMode) {
    currentTab = targetMode;
    
    
    authEmailInput.value = "";
    authPasswordInput.value = "";

    
    document.getElementById('loginTabBtn').className = (targetMode === 'login') ? 'active-tab' : '';
    document.getElementById('signupTabBtn').className = (targetMode === 'signup') ? 'active-tab' : '';

    if (targetMode === 'login') {
        authTitle.innerText = "User Login";
        authSubmitBtn.innerText = "Sign In";
    } else {
        authTitle.innerText = "Create Account";
        authSubmitBtn.innerText = "Register";
    }
}


function handleAuth() {
    var email = authEmailInput.value.trim();
    var password = authPasswordInput.value.trim();

    if (email === "" || password === "") {
        alert("Please fill in all layout text fields.");
        return;
    }

    if (currentTab === 'signup') {
        
        var userExists = registeredUsers.some(u => u.email === email);
        if (userExists) {
            alert("This user account profile is already registered!");
            return;
        }

        
        registeredUsers.push({ email: email, password: password });
        alert("Registration Successful! Now please log in.");
        toggleTab('login');
    } else {
        
        var validUser = registeredUsers.find(u => u.email === email && u.password === password);
        
        if (validUser) {
            loggedInUserEmail = email;
            
            authBox.classList.add('hidden');
            todoBox.classList.remove('hidden');
            currentUserLabel.innerText = loggedInUserEmail;
        } else {
            alert("Invalid email account formatting or wrong password combination.");
        }
    }
}


function logout() {
    loggedInUserEmail = "";
    taskList.innerHTML = ""; 
    todoBox.classList.add('hidden');
    authBox.classList.remove('hidden');
    toggleTab('login');
}


function addTask() {
    var textValue = taskInput.value.trim();
    if (textValue === "") {
        alert("Cannot add a blank execution task node row!");
        return;
    }


    var li = document.createElement('li');
    li.innerText = textValue;

    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    taskInput.value = ""; 
}

function clearAllTasks() {
    taskList.innerHTML = "";
}
