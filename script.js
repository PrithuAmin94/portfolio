// On the header we want to add a greeting based on the time of day
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();
let greetingMessage;
if (currentHour < 12) {
  greetingMessage = "Good Morning!";
} else if (currentHour < 18) {
  greetingMessage = "Good Afternoon!";
} else {
  greetingMessage = "Good Evening!";
}
greetingElement.textContent = greetingMessage;

// Adding the back to top button
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
