//pie clicker html element
const pie = document.querySelector("#pie-Clicker img");
//pie hovver skugga effekt
pie.addEventListener("mouseenter", () => {
    pie.src = "pieShadow.png";
});

pie.addEventListener("mouseleave", () =>{
    pie.src = "pie.png";
});



//spel data
let score = 0;
let pointsPerClick = 1;

//html element
const scoreElement = document.getElementById("score");
const pointsPerClickElement = document.getElementById("points-per-click");

//funtction display
function updateDisplay(){
    scoreElement.textContent = score;
    pointsPerClickElement.textContent = pointsPerClick;

}

//function handel click
function handelClick(){
    score = score + pointsPerClick
    updateDisplay();
}

//Event listener
pie.addEventListener("click", handelClick);

updateDisplay();