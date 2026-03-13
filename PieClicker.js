const pie = document.querySelector("#pie-Clicker img");

pie.addEventListener("mouseenter", () => {
    pie.src = "pieShadow.png";
});

pie.addEventListener("mouseleave", () =>{
    pie.src = "pie.png";
});