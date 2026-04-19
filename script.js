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
this.reset();
});

/* Page Load */

window.onload = function(){

welcomeMessage();
updateCart();

}
/* Pomodoro Timer */

let workTime = 1500;
let breakTime = 300;

let time = workTime;
let timerInterval = null;
let isWorkSession = true;

function updateDisplay(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

let timerElement = document.getElementById("timer");

if(timerElement){
timerElement.innerText =
minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

}

function startTimer(){

if(timerInterval) return;

timerInterval = setInterval(function(){

time--;

updateDisplay();

if(time <= 0){

clearInterval(timerInterval);
timerInterval = null;

if(isWorkSession){

alert("Focus session completed! Take a break.");

isWorkSession = false;
time = breakTime;

let session = document.getElementById("sessionType");
if(session) session.innerText = "Break Session";

}else{

alert("Break finished! Back to work.");

isWorkSession = true;
time = workTime;

let session = document.getElementById("sessionType");
if(session) session.innerText = "Work Session";

}

updateDisplay();

}

},1000);

}

function pauseTimer(){

clearInterval(timerInterval);
timerInterval = null;

}

function resetTimer(){

clearInterval(timerInterval);
timerInterval = null;

isWorkSession = true;
time = workTime;

let session = document.getElementById("sessionType");
if(session) session.innerText = "Work Session";

updateDisplay();

}

updateDisplay();


/* Study Planner Tool */

function addTask(){

let input = document.getElementById("taskInput");

if(!input) return;

let task = input.value.trim();

if(task === "") return;

let li = document.createElement("li");

li.textContent = task;

document.getElementById("taskList").appendChild(li);

input.value = "";

}
function updateHabitProgress(){

let checkboxes = document.querySelectorAll(".habit-list input");

let completed = 0;

checkboxes.forEach(cb => {

if(cb.checked){
completed++;
cb.parentElement.style.textDecoration = "line-through";
cb.parentElement.style.opacity = "0.6";
}else{
cb.parentElement.style.textDecoration = "none";
cb.parentElement.style.opacity = "1";
}

});

let total = checkboxes.length;

let percent = (completed / total) * 100;

let bar = document.getElementById("progressBar");

if(bar){
bar.style.width = percent + "%";
}

let status = document.getElementById("habitStatus");

if(status){
status.innerText = completed + " / " + total + " habits completed";
}

}