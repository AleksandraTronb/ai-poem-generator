function displayPoem(responce) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: responce.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function poemGenerator(event) {
  event.preventDefault();
  console.log("generate a poem");
  let apiKey = "869fb0d3774e410b801b3o2atc64d943";
  let userInstruction = document.querySelector("#user-instructions");
  console.log(userInstruction.value);
  let prompt = `Generate an Ukrainian poem about ${userInstruction.value}`;
  let context = `User instructions:You are a romantic poem expert and love to write short poems. Your mission is generate 4 lines poem in Ukrainian language and separete each line with <br />. Make sure to follow user instruction.`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(url).then(displayPoem);
}
let poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", poemGenerator);
