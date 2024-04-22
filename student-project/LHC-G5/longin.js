document.getElementById("LoginForm").addEventListener("submit",function(event) {
event .preventDefault();
alert("Login Successful!");

let username = document.getElementById("username").value
let password = document.getElementById("password").value
console.log(username, password)
})