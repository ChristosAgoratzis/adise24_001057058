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
        <p>Memo is a memory card game that challenges players to enhance their concentration and memory skills. The objective is simple: players need to find matching pairs of cards from a grid of face-down cards. Each turn, a player flips over two cards, trying to uncover pairs that match. If the cards match, the player keeps the pair and takes another turn. If they don't match, the cards are flipped back over, and the next player takes their turn.</p>
    </div>
</body>
</html>