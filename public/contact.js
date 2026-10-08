const form = document.getElementById("messageForm");
const containerForm = document.querySelector(".container-form");
const messageSuccess = document.getElementById("message-success");
const praprerMessage = document.getElementById("praprerMessage");

praprerMessage.addEventListener("click", function(event){
    event.preventDefault();

    

    const nom = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;
    const maison = document.getElementById("selectCountry").value;
    const message = document.getElementById("message").value;

    let sujet = "";

    if(document.getElementById("question").checked){
        sujet = "Une question";
    }
    else if(document.getElementById("reservation").checked){
        sujet = "Reservation";
    }
    else if(document.getElementById("evenement").checked){
        sujet = "Evenement";
    }

    

    containerForm.innerHTML =`
    <div class="message-success">
    <small> VOTRE DEMANDE </small>
    <h1>Merci, ${nom} <span>! </span> </h1>
    <p> Votre message de démonstration est prêt. </p>
    <hr>
    
    <div class="result">
    <small> Maison </small>
    <p> ${maison} </p>
    </div>

    <hr>

    <div class="result">
    <small> Sujet </small>
    <p> ${sujet} </p>
    </div>

    <hr>

    <div class="result">
    <small> E-mail </small>
    <p> ${email} </p>
    </div>

    <hr>

    <div class="result">
    <small> Message </small>
    <p> ${message} </p>
    </div>

    <small class="note"> Aucun message n'a été envoyé. Cette présentation permet simplement d'essayer le formulaire.
    </small>

    </div>
    
    `

    
})