const pairs = [
  ["Bitcoin", "BTC"],
  ["Ethereum", "ETH"],
  ["Solana", "SOL"],
  ["Blockchain", "Ledger"]
];

let first = null;
let lock = false;

function startGame() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  first = null;
  lock = false;

  let cards = [];

  pairs.forEach(pair => {
    cards.push({ text: pair[0], match: pair[1] });
    cards.push({ text: pair[1], match: pair[0] });
  });

  cards.sort(() => Math.random() - 0.5);

  cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = card.text;

    div.onclick = () => handleClick(div, card);
    board.appendChild(div);
  });
}

function handleClick(div, card) {
  if (lock || div.classList.contains("matched")) return;

  div.classList.add("active");

  if (!first) {
    first = { div, card };
    return;
  }

  if (first.card.text === card.match) {
    div.classList.add("matched");
    first.div.classList.add("matched");
    first = null;
  } else {
    lock = true;
    setTimeout(() => {
      div.classList.remove("active");
      first.div.classList.remove("active");
      first = null;
      lock = false;
    }, 700);
  }
}

startGame();

