const buttons = document.querySelectorAll(".rating-number");

const submit = document.getElementById("btn");
const rating = document.querySelector(".span__value");
const card = document.querySelector(".card"); 
const success = document.querySelector(".thanku");

let value;


buttons.forEach((button) => {
    button.addEventListener ("click", (e) => {
        buttons.forEach((button) => button.classList.remove("list__change"));
        e.target.classList.add("list__change");
        value = e.target.textContent;
    });
});



submit.addEventListener("click", () =>{
    rating.textContent = value;
    card.style.display = "none";
    success.style.display = "block";

    console.log("working");
});