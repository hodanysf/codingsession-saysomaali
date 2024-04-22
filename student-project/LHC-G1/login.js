document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

   var username = document.getElementById("username").value
   var password = document.getElementById("password").value
   console.log(username, password)

   if (username === "Yir" && password === "Riy") {
    alert("Login succesful");
    window.location.href = "home.html";
   } else {
    alert("login failed. Please try again.");
   }
}) 
