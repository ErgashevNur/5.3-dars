const text = document.querySelector("h1");
const input = document.querySelector("input");

input.addEventListener("input", () => {
  text.style.fontSize = `${input.value}px`;
  console.log(input.value);
});
