document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registration-form');

  registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (password !== confirmPassword) {
          alert('Passwords do not match');
      } else {
          alert('Registration successful!');
          registrationForm.reset();
      }
  });
});
