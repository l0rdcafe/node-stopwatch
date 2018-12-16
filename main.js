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
  if (process.argv.length < 3) {
    console.log("Please provide a duration in minutes to countdown.");
    process.exit(1);
  }

  try {
    const duration = process.argv[2] * 60;
    let timeLeft = duration;
    while (timeLeft > 0) {
      console.log(`Remaining: ${timeLeft}`);
      timeLeft -= 1;
      await sleep(1000);
    }
    playSound();
    console.log("Time elapsed!");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main();
