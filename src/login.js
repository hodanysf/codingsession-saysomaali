document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Check username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'johndoe' && password === 'arsenal') {
        // Redirect to about me page
        window.location.href = 'about.html';
    } else {
        alert('Invalid username or password!');
    }
});