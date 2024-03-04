console.log("Hello",43,true,false, []);

let btnRegister = document.querySelector("#btnRegister");
let txtusername = document.querySelector("#txtusername");
let txtpass = document.querySelector("#txtpass");
let txtCpass = document.querySelector("#txtCpass");
let age = document.querySelector("#age");

btnRegister.onclick = function(){
    register(txtusername.value, txtpass.value, txtCpass.value, age.value);
}

function register (username, password, confirmPassword, age){
   console.log(username, password, confirmPassword, age);
    // alert("Register button has been clicked");

}