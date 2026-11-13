function store() {
    var userPhone = document.getElementById('phone').value;
    var userPw = document.getElementById('password').value;
    var loginError = document.getElementById('loginError');

    // Retrieve stored values
    var storedPhone = localStorage.getItem('userPhone');
    var storedPw = localStorage.getItem('userPw');

    // Check if inputs match stored values
    if (userPhone === storedPhone && userPw === storedPw) {
        alert('Login successful!');
        window.location.href = 'first page 1.html'; // Redirect to a welcome page or dashboard
    } else {
        loginError.textContent = 'Invalid phone number or password.';
        loginError.style.display = 'block';
    }
}
