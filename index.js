import { calculate, default_calculate } from "./cart"

let items_in_cart = 0

document.getElementsByClassName("text-gray-600")[0].textContent = "Developer"

function handleClick(){
    alert("clicked")
    console.log("clicked")
}

// WITHOUT TERNARY
document.getElementById("buy").onclick = function handleClick(){
    let cart = document.getElementById("cart");
    let hidden = cart.classList.contains("hidden")
    if (hidden === true){
        cart.classList.remove("hidden")
    }
    let items = document.getElementById("items")
    items_in_cart += 1;
    items.textContent = items_in_cart;
}

// WITH TERNARY
document.getElementById("buy").onclick = function handleClick(){
    let cart = document.getElementById("cart");
    let hidden = cart.classList.contains("hidden")
    // ADDED TERNARY
    hidden === true ? cart.classList.remove("hidden") : console.log("Not hidden")
    let items = document.getElementById("items")
    items_in_cart += 1;
    items.textContent = items_in_cart;
}

document.getElementById("remove").addEventListener("click", function(){
    if(items_in_cart >= 1) {
        items_in_cart -= 1
    }
    document.getElementById("items").textContent = items_in_cart
})