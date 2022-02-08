function rejestacja() {
    var nazwa = document.getElementById("login").value;
    var pwd = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    if (pwd == "ZAQ!2wsx") {
        document.getElementById("p1").innerHTML = "Konto zostało utworzone.";
    } else {
        document.getElementById("p1").innerHTML = "Konto już istnieje."

    }
    history.replaceState({}, null, "/index.html");
}