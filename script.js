// Okul Şifresi Girişi
const loginForm = document.getElementById("loginForm");
const dataEntryForm = document.getElementById("dataEntryForm");
const correctPassword = "okul123";

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = loginForm.querySelector('input[type="password"]').value;
    if (password === correctPassword) {
        loginForm.style.display = "none";
        dataEntryForm.style.display = "block";
    } else {
        alert("Şifre yanlış!");
    }
});

// Toplam Atık Sayacı
let totalWaste = 0;

dataEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const weight = parseFloat(dataEntryForm.querySelector('input[type="number"]').value);
    totalWaste += weight;

    // Güncel Toplam Atık
    document.getElementById("wasteCount").textContent = totalWaste.toFixed(1);
    dataEntryForm.reset();
});
