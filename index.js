function poemGenerator(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Як умру, то поховайте <br> Мене на могилі <br>Серед степу широкого <br>На Вкраїні милій,",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemElement = document.querySelector("#poem-form");
poemElement.addEventListener("submit", poemGenerator);
