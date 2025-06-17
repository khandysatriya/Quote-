const quotes = [
  "Don't give up, great things take time.",
  "One small step today can be the beginning of something big.",
  "Learning is like rowing upstream-if you stop, you go backward.",
  "Mistakes are proof that you are trying.",
  "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain."
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("showQuote");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});