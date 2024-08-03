document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const passwordErrorSpan = document.querySelector('#password-error');
  const signinButton = document.querySelector('#Signin');

  signinButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (localStorage.getItem('userData')) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      console.log(userData);

      const enteredEmail = emailInput.value;
      const enteredPassword = passwordInput.value;

      const foundUser = userData.find((user) => user.email === enteredEmail && user.password === enteredPassword);

      if (foundUser) {
        console.log('Login successful!');
        window.location.href = 'appointment.html';
      } else {
        passwordErrorSpan.textContent = 'Enter valid username and password';
        passwordErrorSpan.style.color = 'red';
      }

    } else {
      console.log('No users found in local storage');
    }
  });
});