// -----cart-----------------
let panier = document.getElementById("panierbtn");
let cart = document.getElementById("cart");
let close = document.getElementById("close");
let decouvrirbtn = document.querySelector(".decouvrir-carte");

panier.addEventListener("click", function(){
    cart.style.display = "block";
    console.log('hiiiii');
    
});

close.addEventListener("click", function(){
    cart.style.display = "none";
});
decouvrirbtn.addEventListener("click", function(){
    cart.style.display = "none";
})



// -------Search pizza--------
let search = document.getElementById("searchPizza");
let pizzas = document.querySelectorAll(".card-pizza");



search.addEventListener("input", function(){
    let txt = search.value.toLowerCase();
    pizzas.forEach(function(pizza){
        let name = pizza.textContent.toLowerCase();

        if (name.includes(txt)) {
            pizza.style.display = "block";
        }
        else{
            pizza.style.display = "none";
        }
    });
})


// -----Category-----------
let category = document.getElementById("category");

category.addEventListener("change", function(){
     
        pizzas.forEach(function(pizza){
            let type = pizza.querySelector(".txt-gris").textContent.toLowerCase();

            if (category.value === "all" || type.includes(category.value)) {
                pizza.style.display = ""; 
            }
            else{
                pizza.style.display = "none";
            }
        })
        
    
})

// ----add pizza------
let panierPizza = [];

let ajouterPizza = document.querySelectorAll(".ajouterPizza");
let itemsPizza = document.getElementById("Items");
let count = document.querySelector(".count");
let namePizza = document.querySelectorAll(".name-pizza");
let pricePizza = document.querySelectorAll(".price-pizza");
let crtMessage = document.getElementById("crtMessage");
let deletePizza = document.querySelectorAll(".delete-pizza");

ajouterPizza.forEach(function (button) {
    button.addEventListener("click", function(){

        for (let i = 0; i < ajouterPizza.length; i++) {
            if (button === ajouterPizza[i]) {
                panierPizza.push({
                    name: namePizza[i].textContent,
                    price: pricePizza[i].textContent,
                    quantity: 1
                })
                
            }
            
        }
       count.textContent = panierPizza.length;
       crtMessage.style.display = "none";
       itemsPizza.innerHTML ="";
       panierPizza.forEach(function(pizza){
        itemsPizza.innerHTML += `
         <div class="cart-item">
      <div class="cart-pizza-info">
        <h3> ${pizza.name} </h3>
        <p> ${pizza.price} /pizza </p>

        <div class="quantity">
          <button class="minus"> - </button>
          <span> ${pizza.quantity} </span>
          <button class="plus"> + </button>
        </div>
      </div>

      <div class="cart-pizza-price">
        <strong> ${parseInt(pizza.price) * pizza.quantity} MAD </strong>
        <button class="delete-pizza"> Supprimer </button>
      </div>
    </div>
        `;
       })

       
    })
    
});

deletePizza.forEach(function(button, index){
    button.addEventListener("click", function(){
        panierPizza.splice(index, 1);


     
})
});

// ----add Button----
let buttons =  document.querySelectorAll(".ajouterPizza");
buttons.forEach(button => {
    button.addEventListener("click", function () {


            buttons.forEach(btn => {
               btn.classList.remove("added");
               btn.innerHTML = "+ Ajouter";
            });
            
        
            this.classList.add("added");
            this.innerHTML = "✓ Ajoutée"
        
        
    })
})