const player = require("play-sound")();

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function playSound() {
  player.play("./sound.wav", err => {
    if (err) {
      throw err;
    }
  });
}

async function main() {
  let timeLeft = 10;
  while (timeLeft > 0) {
    console.log(`Remaining: ${timeLeft}`);
    timeLeft -= 1;
    await sleep(1000);
  }
  playSound();
  console.log("Time elapsed!");
}

main();
