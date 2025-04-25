const colorInputs = document.querySelectorAll(".colors input");

const generateGradient = () =>{
  console.log("Color update...");
}

colorInputs.forEach(input => {
  //Calling generateGradient funcrion on each color input clicks
    input.addEventListener("input", generateGradient);
});
