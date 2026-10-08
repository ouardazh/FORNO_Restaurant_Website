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
