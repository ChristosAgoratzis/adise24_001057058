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
    session_start();
    require "../lib/dbconnect.php";
    session_start();
    $query = "SELECT is_active FROM Users WHERE username = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param("s", $_SESSION['username']);
    $stmt->execute();
    $stmt->bind_result($is_active);
    if ($is_active == 1) {
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