function read() {
  let name = prompt("What is your name?");
  let books = prompt("What types of books are you interested in?");
  let email = prompt("What is your email?");
  alert("Thank you, " + name + ". We will be in touch via email.");
}
document.querySelector("button").addEventListener("click", read);
