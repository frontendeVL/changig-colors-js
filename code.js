const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector("refresh");

const getRandomColor = () => {
  //Generating a random color in hexadecimal format
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
  if(isRandom){

  }
  //Creating a gradient string using the select menu value with color input values
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
}

colorInputs.forEach(input => {
  //Calling generateGradient function on each color input clicks
    input.addEventListener("input", generateGradient);
});

selectMenu.addEventListener("change", generateGradient);
refreshBtn.addEventListener("click", () => generateGradient(true));