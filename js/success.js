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

let Timeout =false;
function checkForOtherUser() {
    fetch("../lib/check_status.php")
        .then(response => response.json())
        .then(data => {
            if (!(data.status === "inactive")) {
                clearTimeout(inactiveTimeout);
                document.querySelector('.overlay').style.display = 'none';
                document.querySelector('.popup').style.display = 'none';
                window.location.href = '../html/ind.html';
            }else{
                if (Timeout == false){
                    inactiveTimeout = setTimeout(() => {
                        enterSinglePlayerMode();
                    }, 5000);  
                    Timeout = true;
                    document.querySelector('.overlay').style.display = 'block';
                    document.querySelector('.popup').style.display = 'flex';
                }
            }
        })
        .catch(error => console.error("Error checking session status:", error));
}

// Έλεγχος κάθε 5 δευτερόλεπτα
setInterval(checkForOtherUser, 5000);

function enterSinglePlayerMode() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
    alert("Switching to Single Player Mode...");
//     fetch('../lib/updateisactive.php', {
//         method: 'GET'
//     }) .then(response =>{
//         if(!response.ok){
//             throw new Error('Network response was not ok' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error =>{
//         console.error('There was a problem with the fetch operation:', error);
//     });
}
