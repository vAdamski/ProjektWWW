function show_event1(){
    var temp = document.getElementById("ileOsob1").value;
    temp = Number.parseInt(temp,10);
    if(temp >= 4){
        alert("Brak wystarczającej ilości miejsc do rezerwacji")
    }else{
    document.getElementById("event_my_1").style.display = "block";
    }
}

function show_event2(){
    document.getElementById("event_my_2").style.display = "block"
}

function show_event3(){
    var temp = document.getElementById("ileOsob3").value;
    temp = Number.parseInt(temp,10);
    if(temp == 6){
        alert("Brak wystarczającej ilości miejsc do rezerwacji")
    }else{
    document.getElementById("event_my_3").style.display = "block";
    }
}

function hide_event1(){ 
    var temp = document.getElementById("ileOsob1").value;
    document.getElementById("event_my_1").style.display = "none"
    document.getElementById("ileOsobEvent1").value = temp;
}

function hide_event2(){
    var temp = document.getElementById("ileOsob2").value;
    document.getElementById("event_my_2").style.display = "none"
    document.getElementById("ileOsobEvent2").value = temp;
}

function hide_event3(){
    var temp = document.getElementById("ileOsob3").value;
    document.getElementById("event_my_3").style.display = "none"
    document.getElementById("ileOsobEvent3").value = temp;
    
}