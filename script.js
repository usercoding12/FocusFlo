let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* Welcome Message */

function welcomeMessage(){

alert("Welcome to FocusFlo 📚\nYour smart productivity platform for better focus and study planning.");

updateCart();

}


/* Add to Cart */

function addToCart(product){

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert(product + " added to cart!");

updateCart();

}


/* Update Cart */

function updateCart(){

let count = document.getElementById("cartCount");

let list = document.getElementById("cartItems");

if(count){
count.innerText = cart.length;
}

if(!list) return;

list.innerHTML="";

cart.forEach((item,index)=>{

let li=document.createElement("li");

li.innerHTML=`
<span>${item}</span>
<button class="remove-btn" onclick="removeItem(${index})">Remove</button>
`;

list.appendChild(li);

});

}


/* Remove Item */

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

}


/* Clear Cart */

function clearCart(){

cart=[];

localStorage.removeItem("cart");

updateCart();

}


/* Toggle Cart */
function toggleCart(){

document.getElementById("cartPanel").classList.toggle("active");

}


/* Service Details */

function toggleDetails(id){

let allDetails = document.querySelectorAll(".details");

allDetails.forEach(section => {

if(section.id !== id){
section.style.display = "none";
}

});

let current = document.getElementById(id);

if(current.style.display === "block"){
current.style.display = "none";
}else{
current.style.display = "block";
}

}


/* Contact Form */

document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;

alert("Thank you " + name + "! Your message has been submitted successfully.");

let msg = document.getElementById("successMessage");
msg.style.display = "block";
msg.classList.add("fade-in");
});

/* Page Load */

window.onload = function(){

welcomeMessage();
updateCart();

}

