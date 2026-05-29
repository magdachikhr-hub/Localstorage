const container = document.querySelector(".container");

async function getBirdRecords() {
  const response = await fetch(
    'https://xeno-canto.org/api/3/recordings?query=sp:"larus fuscus"&key=demo',
  );

  const data = await response.json();

  const recordings = data.recordings;

  displayCard(recordings); //same as render
}

getBirdRecords();

function displayCard(birds) {
  birds.forEach((bird) => {
    const div = document.createElement("card");

    card.innerHTML = `
    <h4></h4>
    <span></span>
    <p class="cauntry"></p>
    <p class="date"></p>

    <span class="spiece "></span>
    <audio src=""></audio> `;
  });
}

//api https://xeno-canto.org/explore/api
