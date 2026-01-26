const subBtn = document.querySelector(`#myForm > button[type="submit"]`);
subBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const name = document.getElementById("username").value;
    const pw = document.getElementById("password").value;
    console.log(`username : ${name}\npassword : ${pw}`)
});
