document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupBox").style.display = "flex";
    document.getElementById("spinner").style.display = "block";
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            fetch('../lib/logout.php')
                .then(response => {
                    if (response.ok) {
                        localStorage.setItem('isLoggedIn','false');
                        window.location.href = '../html/index.html'; 
                    }
                })
                .catch(error => console.error('Σφάλμα κατά την αποσύνδεση:', error));
        });
    }
});


function checkForOtherUser() {
    fetch("../lib/check_status.php")
        .then(response => response.json())
        .then(data => {
            if (!(data.status === "inactive")) {
                document.querySelector('.overlay').style.display = 'none';
                document.querySelector('.popup').style.display = 'none';
            }else{
                document.querySelector('.overlay').style.display = 'block';
                document.querySelector('.popup').style.display = 'flex';
                
            }
        })
        .catch(error => console.error("Error checking session status:", error));
}

// Έλεγχος κάθε 5 δευτερόλεπτα
setInterval(checkForOtherUser, 5000);


