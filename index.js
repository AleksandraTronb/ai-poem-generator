function displayPoem(responce) {
  let waitElement = document.querySelector("#wait");
  waitElement.classList.add("hidden");

  new Typewriter("#poem", {
    strings: responce.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function poemGenerator(event) {
  event.preventDefault();
  let waitElement = document.querySelector("#wait");
  let poem = document.querySelector("#poem");
  poem.innerHTML = "";
  waitElement.classList.remove("hidden");
  let userInstruction = document.querySelector("#user-instructions");
  let apiKey = "869fb0d3774e410b801b3o2atc64d943";
  console.log(userInstruction.value);

  let prompt = `Generate an Ukrainian poem about ${userInstruction.value}`;
  let context = `User instructions:You are a romantic poem expert and love to write short poems. Your mission is generate 4 lines poem in Ukrainian language and separete each line with <br />. Make sure to follow user instruction.`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(url).then(displayPoem);
}
let poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", poemGenerator);
