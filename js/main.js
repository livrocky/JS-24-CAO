console.log("main");

const baseUrl = "https://radial-reinvented-shoe.glitch.me/";
const cardsContEl = document.querySelector(".cards-container");

async function getProperties() {
  const resp = await fetch(baseUrl);
  const props = await resp.json();
  console.log("props===", props);
  console.log(props, cardsContEl);
}

getProperties();

function renderCards(cardsArr, dest) {
  dest.innerHTML = cardsArr
    .map(
      (cObj) => `
    <div class="single-card">
                <img src="${cObj.image}">
                <div class="card-info">
                    <h2 class="price">${cObj.price}</h2>
                    <p class="city"><i> ${cObj.city}</i> </p>
                    <p class="description">${cObj.description}</p>
                </div>
            </div>`
    )
    .join("");
}
