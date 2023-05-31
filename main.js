// Vehicle types
const vehicleTypes = ['Motorbike', 'Car', 'Small Van', 'Small Bus'];

// Vehicle makes
const vehicleMakes = ['Ford', 'Toyota', 'Honda', 'BMW', 'Volkswagen', 'Audi', 'Mercedes', 'Nissan'];

// Engine types
const engineTypes = ['Diesel', 'Petrol', 'Hybrid', 'Electric'];

// Booking types
const bookingTypes = ['Annual Service', 'Major Service', 'Repair/Fault', 'Major Repair'];

// Populate options for select elements
const vehicleTypeSelect = document.getElementById('vehicle-type');
vehicleTypes.forEach(type => {
  const option = document.createElement('option');
  option.text = type;
  vehicleTypeSelect.add(option);
});

const vehicleMakeSelect = document.getElementById('vehicle-make');
vehicleMakes.forEach(make => {
  const option = document.createElement('option');
  option.text = make;
  vehicleMakeSelect.add(option);
});

const engineTypeSelect = document.getElementById('engine-type');
engineTypes.forEach(type => {
  const option = document.createElement('option');
  option.text = type;
  engineTypeSelect.add(option);
});

const bookingTypeSelect = document.getElementById('booking-type');
bookingTypes.forEach(type => {
  const option = document.createElement('option');
  option.text = type;
  bookingTypeSelect.add(option);
});

// Function to handle registration form submission
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const vehicleType = vehicleTypeSelect.value;
  const vehicleMake = vehicleMakeSelect.value;
  const vehicleLicense = document.getElementById('vehicle-license').value;
  const engineType = engineTypeSelect.value;
  const bookingType = bookingTypeSelect.value;
  const comments = document.getElementById('comments').value;

  // Save form data to the database or perform necessary actions
  // ...

  // Clear form values
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('vehicle-license').value = '';
  document.getElementById('comments').value = '';
});

// Function to handle login form submission
document.querySelectorAll('form')[1].addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const phone = document.getElementById('login-phone').value;

  // Perform login and redirect to user dashboard
  // ...
});

// Function to handle admin section form submission
document.querySelectorAll('form')[2].addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const date = document.getElementById('date').value;

  // Fetch bookings for the selected date and display the schedule
  // ...
});

// Function to print the schedule
function printSchedule() {
  // Get the current schedule and print it
  // ...
}

// Function to print the invoice
function printInvoice() {
  // Get the selected booking details and print the invoice
  // ...
}
