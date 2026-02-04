 function parseDOB(dob) {
  const parts = dob.split('-').map(Number);
  return { Y: parts[0], M: parts[1], D: parts[2] };
}

function computeD(Y, M, D) {
  const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  let y = Y - (M < 3 ? 1 : 0);
  return (  y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +

    Math.floor(y / 400) + t[M - 1] + D) % 7;
    
  
}

function getAkanNames(day, gender) {
  const males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if  (gender === "male" ) return '${male[day]} (born on ${days[day]}';

if (gender === "female") return '${female[day]} (born on ${days[day]})'; 
  return `${name} (${days[day]})`;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("akanForm");
  const result = document.getElementById("akanResult");

  form.addEventListener('submit', e => {
    e.preventDefault();

    const dob = document.getElementById('dob').value;
    const genderInput = document.querySelector('input[name="gender"]:checked');

    if (!dob || !genderInput) {
      result.textContent = "Please fill all fields";
      return;
    }

    const { Y, M, D } = parseDOB(dob);
    const day = computeD(Y, M, D);

    result.textContent = getAkanNames(day, genderInput.value);
  });
});
