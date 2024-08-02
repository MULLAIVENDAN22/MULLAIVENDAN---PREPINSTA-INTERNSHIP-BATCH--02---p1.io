const doctorSelect = document.getElementById('doctor');
const time_smith = document.getElementById('time-smith');
const time_williams = document.getElementById('time-williams');
const time_jhonson = document.getElementById('time-jhonson');
const bookAppointmentButton = document.getElementById('submit');



time_smith.classList.add('timing');
time_williams.classList.add('timing');
time_jhonson.classList.add('timing');

// Add an event listener to the doctor select element
doctorSelect.addEventListener('change', (e) => {

  time_smith.classList.add('timing');
  time_williams.classList.add('timing');
  time_jhonson.classList.add('timing');

  const selectedDoctor = e.target.value.toLowerCase();
  console.log(selectedDoctor);
  console.log(typeof (selectedDoctor))

  if (selectedDoctor === "smith") {
    console.log("hrllo");

    time_smith.classList.remove('timing')
  }

  else if (selectedDoctor === "williams") {
    time_williams.classList.remove('timing')
  }

  else if (selectedDoctor === "jhonson") {
    time_jhonson.classList.remove('timing')
  }

});




let patientIdCounter = {
  smith: 1,
  williams: 1,
  jhonson: 1
};

// Function to generate unique ID for each patient
function generatePatientId(doctorName) {
  const initials = doctorName.charAt(0).toUpperCase() + doctorName.charAt(1).toUpperCase();
  const id = `${initials}-${String(patientIdCounter[doctorName]).padStart(4, '0')}`;
  patientIdCounter[doctorName]++;
  console.log(id);

  return id;
}

// Function to save details to local storage
function saveDetailsToLocalStorage(patientId, patientName, doctorName, date, time) {
  const appointmentDetails = {
    id: patientId,
    patientName,
    doctorName,
    date,
    time
  };
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.push(appointmentDetails);
  localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Add event listener to book appointment button
bookAppointmentButton.addEventListener('click', (e) => {
  e.preventDefault();
  const selectedDoctor = doctorSelect.value.toLowerCase();
  const patientName = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.querySelector(`#time-${selectedDoctor} select`).value;
  const booked = document.getElementById('booked');

  // Generate unique ID for patient
  const patientId = generatePatientId(selectedDoctor);

  // Save details to local storage
  saveDetailsToLocalStorage(patientId, patientName, selectedDoctor, date, time);

  // Display "Appointment Booked" message
  booked.textContent = "Appointment Booked";
  booked.style.display = "block"; // Show the message

  // Hide the message after 2 seconds
  setTimeout(() => {
    booked.style.display = "none"; // Hide the message
  }, 2000);

  // Make time non-selectable
  const timeOption = document.querySelector(`#time-${selectedDoctor} option[value="${time}"]`);
  timeOption.disabled = true;
});

// Add event listener to doctor select element
doctorSelect.addEventListener('change', (e) => {
  const selectedDoctor = e.target.value.toLowerCase();
  const timeElement = document.getElementById(`time-${selectedDoctor}`);
  timeElement.classList.remove('timing');
});






const viewAppointmentButton = document.querySelector('#view-appointment-form');
const passwordInput = document.querySelector('#app-id');
const passwordError = document.querySelector('#password-error');
const detailsContainer = document.querySelector('#details');

// Add event listener to the "View Appointment" button
viewAppointmentButton.addEventListener('click', (e) => {
  e.preventDefault();

  console.log("view appointment");


  const enteredId = passwordInput.value.trim();
  const storedData = localStorage.getItem('appointments');
  const parsedData = storedData ? JSON.parse(storedData) : [];

  // Check if the entered ID is valid
  const validId = parsedData.find((appointment) => appointment.id === enteredId);



  if (validId) {
    // Display the appointment details
    const appointmentDetails = `
    <p>ID: ${validId.id}</p>
    <p>Name: ${validId.patientName}</p>
    <p>Doctor Name: ${validId.doctorName}</p>
    <p>Date: ${validId.date}</p>
    <p style="padding-bottom:18px!important;">Time: ${validId.time}</p>
  `;
    detailsContainer.innerHTML = appointmentDetails;
    passwordError.textContent = '';
  } else {
    // Display an error message
    passwordError.textContent = 'Invalid ID';
    detailsContainer.innerHTML = '';
    passwordError.style.display = "block";

    setTimeout(() => {
      passwordError.style.display = "none";
    }, 2000);

  }
});


const cancelAppointmentButton = document.querySelector('#cancel-appointment-form');
const cancel = document.getElementById('cancel');

cancelAppointmentButton.addEventListener('click', (e) => {
  e.preventDefault();

  const enteredId = passwordInput.value.trim();
  const storedData = localStorage.getItem('appointments');
  const parsedData = storedData ? JSON.parse(storedData) : [];

  // Check if the entered ID is valid
  const validIdIndex = parsedData.findIndex((appointment) => appointment.id === enteredId);

  if (validIdIndex !== -1) {
    // Store the doctorName and time values before removing the appointment
    const doctorName = parsedData[validIdIndex].doctorName;
    const time = parsedData[validIdIndex].time;

    // Remove the appointment details from local storage
    parsedData.splice(validIdIndex, 1);
    localStorage.setItem('appointments', JSON.stringify(parsedData));

    // Make the booked time clickable again
    const timeOption = document.querySelector(`#time-${doctorName} option[value="${time}"]`);
    timeOption.disabled = false;

    // Display a success message
    cancel.textContent = 'Appointment Cancelled';
    cancel.style.display = "block";

    setTimeout(() => {
      cancel.style.display = "none";
    }, 2000);

    // Clear the appointment details
    detailsContainer.innerHTML = '';
  } else {
    // Display an error message
    passwordError.textContent = 'Invalid ID';
    passwordError.style.display = "block";

    setTimeout(() => {
      passwordError.style.display = "none";
    }, 2000);
  }
});




const page = document.getElementById('page-2');

page.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Login page');
  window.location.href = 'sign-in.html';
})