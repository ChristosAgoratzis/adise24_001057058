<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>BLOKUS</title>
    <link rel="stylesheet" href="../css/index.css">
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline' chrome-extension://* https://kit.fontawesome.com">
    <script src="https://kit.fontawesome.com/867d7466a3.js" crossorigin="anonymous"></script>
    <script src="../js/index.js?v=<?php echo time(); ?>"></script>
</head>
<body>
    <?php
    ini_set('session.cookie_lifetime', 3600);  // Θέτει το lifetime του session cookie σε 1 ώρα (σε δευτερόλεπτα)
    session_set_cookie_params(3600);
    session_start(); // Ενεργοποίηση του session

    // Αν ο χρήστης είναι ήδη συνδεδεμένος, ανακατευθύνετε τον στην σελίδα επιτυχίας
    if (isset($_SESSION['user_id'])) {
    header("Location: success.html");
    exit();
    }
?>
    <div class="title">BLOKUS</div>
    <div class="about-icon" onclick="togglePopup()">
        <i class="fa-solid fa-circle-info"></i>
    </div>

    <div class="container">
        <h2 style="font-size: 30px;">Login</h2>
        <form onsubmit="loginUser(event)">
            <input id ="username" type="text"  placeholder="Username" required>
            <input id = "password" type="password"  placeholder="Password" required>
            <input type="submit" value="Submit">
        </form>
        <div class="register">
            Don't have an account? <a href="register.html">Register here!</a>
        </div>
    </div>
    <p id="responseMessage"></p>
    <div id="message"></div>
    <div class="popup" id="popup">
        <h3>Informations about the game</h3>
    </div>
</body>
</html>