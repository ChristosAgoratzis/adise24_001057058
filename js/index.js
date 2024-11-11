function togglePopup() {
    const popup = document.getElementById('popup');
    // Εναλλαγή εμφάνισης του pop-up
    if (popup.style.display == 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}



function loginUser(event){
    event.preventDefault(); // Αποτρέπει την προεπιλεγμένη υποβολή της φόρμας

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    fetch('../lib/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Ορίζουμε το περιεχόμενο ως JSON
        },
        body: JSON.stringify({ username: username, password: password }), // Μετατροπή σε JSON
    })
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
        if(data.message == "ok"){
            window.location.href = '../html/success.html'; 
        }else{
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
   
}

