var LoginForm =document.getElementById("LoginForm");
var  RegForm = document.getElementById("RegForm");
let titleLogin = document.getElementById('titleLogin');
let titleReg = document.getElementById('titleReg');


function login(){
    RegForm.style.transform ="translateX(0px)";
    LoginForm.style.transform ="translateX(0px)";
    titleLogin.classList.add("active");
    titleReg.classList.remove("active");
}

function register(){
    RegForm.style.transform ="translateX(300px)";
    LoginForm.style.transform ="translateX(300px)";
    titleLogin.classList.remove("active");
    titleReg.classList.add("active");
}


//
