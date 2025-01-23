document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const dob = document.getElementById("dob").value;
  if (!dob) {
    alert("Please select a valid date of birth!");
    return;
  }

  const dobDate = new Date(dob);
  const today = new Date();

  let ageYears = today.getFullYear() - dobDate.getFullYear();
  let ageMonths = today.getMonth() - dobDate.getMonth();
  let ageDays = today.getDate() - dobDate.getDate();

  // Adjust for negative months or days
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  document.getElementById(
    "result"
  ).textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});