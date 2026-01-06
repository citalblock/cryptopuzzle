const pairs = {
  Bitcoin: "BTC",
  Citalblock: "CB",
  Binance: "BNB",
  Litecoin: "LTC"
};

let selected = [];
let gameDiv = document.getElementById("game");

function startGame() {
  gameDiv.innerHTML = "";
  selected = [];

  let items = [];

  for (let key in pairs) {
    items.push({ text: key, pair: pairs[key] });
    items.push({ text: pairs[key], pair: key });
  }

  items.sort(() => Math.random() - 0.5);

  items.forEach(item => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerText = item.text;

    div.onclick = () => selectCard(div, item);
    gameDiv.appendChild(div);
  });
}

function selectCard(div, item) {
  if (selected.length === 2 || div.classList.contains("matched")) return;

  selected.push({ div, item });
 div.classList.add("active");


  if (selected.length === 2) {
    if (
      selected[0].item.text === selected[1].item.pair ||
      selected[1].item.text === selected[0].item.pair
    ) {
      selected.forEach(s => s.div.classList.add("matched"));
    } else {
      setTimeout(() => {
        selected.forEach(s => s.div.classList.remove("active"));
      }, 700);
    }
    selected = [];
  }
}

startGame();
