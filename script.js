const clickSound = new Audio("click.mp3");
const matchSound = new Audio("match.mp3");
const winSound = new Audio("win.mp3");
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
clickSound.currentTime = 0;
clickSound.play();

function selectCard(div, item) {
  if (selected.length === 2 || div.classList.contains("matched")) matchSound.currentTime = 0;
matchSound.play();
 return;

  selected.push({ div, item });
 div.classList.add("active");


  if (selected.length === 2) {
    if (
      selected[0].item.text === selected[1].item.pair ||
      selected[1].item.text === selected[0].item.pair
    ) {
      selected.forEach(s => s.div.classList.add("matched")); matchSound.currentTime = 0;
matchSound.play();

    } else {
      setTimeout(() => {
        selected.forEach(s => s.div.classList.remove("active"));
      }, 700);
    }
    selected = [];
  }
}

"StartGame();
function celebrateWin() {
  winSound.currentTime = 0;
  winSound.play();

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "24px";
    confetti.style.animation = "fall 2s linear";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2000);
  }
}
 
