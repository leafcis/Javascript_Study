function clock() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById('clockclock').innerHTML = hour + "시 " +  min + "분 " + sec + "초";
    setInterval("clock()", 1);
}

function checkTime(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}
