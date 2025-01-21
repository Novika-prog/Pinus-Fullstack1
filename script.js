function showMessage() {
    let name = document.getElementById("nameInput").value;
    let messageElement = document.getElementById("message");

    if (name.trim() === "") {
        messageElement.textContent = "Silakan masukkan nama Anda!";
        messageElement.style.color = "red";
    } else {
        messageElement.textContent = `Halo, ${name}! Selamat datang!`;
        messageElement.style.color = "#27ae60";
    }
    
    messageElement.classList.add("show");

    setTimeout(() => {
        messageElement.classList.remove("show");
    }, 3000);
}
