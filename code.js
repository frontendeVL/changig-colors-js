const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");

const generateGradient = () => {
  //Creating a gradient string using the select menu value with color input values
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
}

colorInputs.forEach(input => {
  //Calling generateGradient function on each color input clicks
    input.addEventListener("input", generateGradient);
});

