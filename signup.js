function check() {
    var userPhone = document.getElementById('phone').value;
    var userPw = document.getElementById('password').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    // Phone number validation
    if (userPhone.length === 0) {
        alert('Please fill in phone number');
    } else if (userPhone.length !== 10) {
        alert('Phone number must be exactly 10 digits');
    } 
    // Password validation
    else if (userPw.length === 0) {
        alert('Please fill in password');
    } else if (userPw.length < 8) {
        alert('Password must be at least 8 characters long');
    } else if (!userPw.match(numbers)) {
        alert('Password must contain at least one number');
    } else if (!userPw.match(upperCaseLetters)) {
        alert('Password must contain at least one uppercase letter');
    } else if (!userPw.match(lowerCaseLetters)) {
        alert('Password must contain at least one lowercase letter');
    } else {
        // Store data in localStorage
        localStorage.setItem('userPhone', userPhone);
        localStorage.setItem('userPw', userPw);

        alert('You are registered');
        window.location.href = 'login.html'; 
    }
}
