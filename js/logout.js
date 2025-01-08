windows.addEventListener('beforeunload',function(e){
    navigator.sendBeacon('../lib/logout.php');
});