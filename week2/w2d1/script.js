// Select button1 using getElementById
const button1 = document.getElementById("button1");
console.log("Button 1 selected:", button1);

// Define an arrow function to be excuted when button 1 is clicked
const showMessage1 = () => {
  console.log("Button 1 is clicked");
  const messageElement = document.querySelector("#message");
  console.log("Message element selected using querySelector: ", messageElement);

  // change the innerText of the messageElement
  messageElement.innerText =
    "Button 1 was clicked! Horray! we just learned event listeneres.";
};

// Register the event listeneres for the button
button1.addEventListener("click", showMessage1);
