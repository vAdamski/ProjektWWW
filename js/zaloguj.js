function loguj(){
    var nazwa  = document.getElementById("login").value;
    var pwd  = document.getElementById("password").value;        
    if(nazwa!='usergr2' || pwd!="ZAQ!2wsx"){
        document.getElementById("p1").innerHTML = "Zle hasło lub nazwa użytkownika";
        document.getElementById("p1").style.backgroundColor = "#001236";
    }
    history.replaceState({}, null, "/index.html");
}