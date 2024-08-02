const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordErrorSpan = document.getElementById('password-error');

let timeout = null;

function checkPasswordMatch() {
  clearTimeout(timeout);
  timeout= setTimeout(() => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      passwordErrorSpan.textContent = 'Password does not match';
      passwordErrorSpan.style.color = 'red';
    } else {
      passwordErrorSpan.textContent = '';
    }
  }, 2000); // 2-second timeout interval
}

passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);



const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const fname = fnameInput.value;
  const lname = lnameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const email = emailInput.value;
  const booked = document.getElementById('booked');

  if (password !== confirmPassword) {
    passwordErrorSpan.textContent = 'Password does not match';
    passwordErrorSpan.style.color = 'red';
    return;
  }

    booked.textContent = "Appointment Booked";
    booked.style.display = "block"; // Show the message

    // Hide the message after 2 seconds
    setTimeout(() => {
      booked.style.display = "none"; // Hide the message
    }, 2000);
  

  const newData = {
    fname,
    lname,
    password,
    email
  };

  // Read existing data from local storage
  const storedData = localStorage.getItem('userData');
  let userData = [];
  if (storedData) {
    userData = JSON.parse(storedData);
  }

  // Add new entry to the array
  userData.push(newData);

  // Write updated array back to local storage
  const updatedJsonData = JSON.stringify(userData, null, 2);
  localStorage.setItem('userData', updatedJsonData);

  // Clear input fields
  fnameInput.value = '';
  lnameInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
  emailInput.value = '';
});