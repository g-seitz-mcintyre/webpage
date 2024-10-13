document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate input fields
  if (name === "" || email === "" || subject === "" || message === "") {
    document.getElementById('formResponse').innerText = "Please fill out all fields.";
    document.getElementById('formResponse').style.color = 'red';
    return;
  }

  // Here you would normally send the data to a server via an API.
  // For this example, we'll just display a message as a simulation.
  
  document.getElementById('formResponse').innerText = "Thank you for contacting us!";
  document.getElementById('formResponse').style.color = 'green';

  // Clear the form
  document.getElementById('contactForm').reset();
});
