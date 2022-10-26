var xx = document.querySelector(".burger-menu-list");
xx.style.display ="none";


function toggleMenu() {
    var x = document.querySelector(".burger-menu-list");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


window.onclick = function() {
    // toggleMenu();
}

var menu = document.querySelector(".burger-menu");

menu.addEventListener("click",()=> toggleMenu());


// contact validation 




function  validation(){
    var nom  = document.querySelector("#nom");
    var prenom  = document.querySelector("#prenom");
    var tel  = document.querySelector("#tel");
    var email  = document.querySelector("#email");
    var message  = document.querySelector("#message");
    var emailTest =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if(nom.value.length<3  || prenom.value.length<3 || tel.value.length < 10  || emailTest === false || message.value.length<20)
    {
        alert("something is not correct");
    }
    else{
        console.log (nom.value + " "+ prenom.value + " " + tel.value + " "+ email.value + " "+ message.value);
    }
}


var btnContact = document.querySelector(".btn-contact");


btnContact.addEventListener("click", ()=> validation());