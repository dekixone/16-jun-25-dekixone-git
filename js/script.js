
    function handleSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const dob = document.getElementById('dob').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const message = document.getElementById('messageText').value;

      document.getElementById('outputName').textContent = name;
      document.getElementById('userName').textContent = name;
      document.getElementById('outputDob').textContent = dob;
      document.getElementById('outputGender').textContent = gender;
      document.getElementById('outputMessage').textContent = message;

      const now = new Date().toUTCString();
      document.getElementById('currentTime').textContent = now;
      return false;
    }
  