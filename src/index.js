function displayAnswers(response) {
  console.log("answer generated");

  new Typewriter("#paragraph", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function fetch(event) {
  event.preventDefault();

  let input = document.querySelector("#instruction");
  let apiKey = "t0b1d0fae05ad3dd06fe36a44o3ff11e";
  let prompt = `User input: Generate a Xhosa traditional fact about ${input.value}`;
  let context =
    "You are a Xhosa descendant and you have a deep knownledge of the traditions and roots of the Xhosa bloodline which you are going to share with those that are not in the Xhosa tribe. Your mission is to generate a 7 lines answer.Make sure to follow the user input. Please dont mix up the Zulu culture and Xhosa culture only give answers according to the xhosa culture. Add 'SheCodes AI' in <strong>and write it in a separate line from the last sentance using a <br/> and write it at the end of the answers.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating answer");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayAnswers);
}

let elementForm = document.querySelector("#generator");
elementForm.addEventListener("submit", fetch);

//api wikipedia for pictures
