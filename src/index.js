function fetch(event) {
  event.preventDefault();

  new Typewriter("#paragraph", {
    strings: `The Xhosa people are descendants of Nguni clans who settled in the southeastern part of Southern Africa displacing
   the original inhabitants, the Khoisan. Archaeological evidence suggests that 
   the Xhosa people have inhabited the area since the 7th century.`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let elementForm = document.querySelector("#generator");
elementForm.addEventListener("submit", fetch);
