const appDiv = document.getElementById("app");

function getPeople() {
  fetch("https://swapi.tech/api/people/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.total_recorsd);
      document.getElementById("characters").textContent = data.total_records
    });
}

getPeople();

appDiv.innerHTML = `
  <p>⭐️ Star Wars'da <strong id="characters">---</strong> ana karakter vardır</p>
`;

