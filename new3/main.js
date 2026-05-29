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
    const card = document.createElement("card");

    const { gen, en, cnt, date, sp, file } = bird;

    card.innerHTML = `
    <h4>${gen}</h4>
    <span>${en}</span>
    <p class="country">${cnt}</p>
    <p class="date">${date}</p>

    <span class="species">${sp}</span>
    <audio src="${file}" controls ></audio> `;

    container.append(card);
  });
}

//api https://xeno-canto.org/explore/api
