document.getElementById("loginform").addEventListener("submit", function(event))
event.preventDefault();
alert("login successful!");

let username = document.getElementById("username").value
let password = document.getElementById("password").value
console.log(username, password)

if (username === "admin" && password === "admin") 
alert("login successful!");
window.location.href = "about.html" ;
} else {
    alert("login failed. Please try again")
    