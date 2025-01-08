document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Αποτροπή ανανέωσης σελίδας

    // Λήψη δεδομένων από τα πεδία της φόρμας
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    // Αποστολή αιτήματος AJAX στο register.php
    fetch("../lib/register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password, email: email })
    })
    .then(response => response.json())
    .then(data => {
        // Εμφάνιση μηνύματος ανάλογα με την απάντηση
        if (data.status === 'success') {
            alert("Registration successful!");
            window.location.href = "index.html"; // Ανακατεύθυνση στη σελίδα σύνδεσης
        } else {
            alert(data.message); // Εμφανίζει μήνυμα λάθους
        }
    })
    .catch(error => console.error("Error:", error));
});