function show_event1(){
    var temp = document.getElementById("ileOsob1").value;
    temp = Number.parseInt(temp,10);
    if(temp >= 4){
        alert("Brak wystarczającej ilości miejsc do rezerwacji")
    }else{
        var info = "Ilosc miejsc na bilecie: " + temp;
        document.getElementById("event_my_1").style.display = "block";
        document.getElementById("ileOsobEvent1").innerHTML = info;
    }
}

function show_event2(){
    document.getElementById("event_my_2").style.display = "block"
    var temp = document.getElementById("ileOsob2").value;
    var info = "Ilosc miejsc na bilecie: " + temp;
    document.getElementById("ileOsobEvent2").innerHTML = info;
}

function show_event3(){
    var temp = document.getElementById("ileOsob3").value;
    temp = Number.parseInt(temp,10);
    if(temp == 6){
        alert("Brak wystarczającej ilości miejsc do rezerwacji")
    }else{
        var info = "Ilosc miejsc na bilecie: " + temp;  
    document.getElementById("event_my_3").style.display = "block";
    document.getElementById("ileOsobEvent3").innerHTML = info;
    }
}

function hide_event1(){ 
    document.getElementById("event_my_1").style.display = "none"
    
}

function hide_event2(){
    
    document.getElementById("event_my_2").style.display = "none"
    
}

function hide_event3(){
    
    document.getElementById("event_my_3").style.display = "none"
    
    
}