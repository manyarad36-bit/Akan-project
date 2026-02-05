document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('akanForm');
  const result = document.getElementById('akanResult');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : null;

    if (!day || !month || !year || !gender) {
      result.textContent = 'Please fill in all fields.';
      return;
    }

    if (day < 1 || day > 31 || month < 1 || month > 12) {
      result.textContent = 'Invalid day or month.';
      return;
    }

    // Use JS Date for reliable day-of-week calculation and validate the created date
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
      result.textContent = 'Invalid date.';
      return;
    }

    const d = date.getDay(); // 0 = Sunday, 6 = Saturday

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    const akanName = gender === 'male' ? maleNames[d] : femaleNames[d];

    result.textContent = `You were born on a ${days[d]} and your Akan name is ${akanName}.`;

    form.reset();
  });
});

