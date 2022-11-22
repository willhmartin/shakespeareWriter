#!/usr/bin/env node
import { createInterface } from "readline";
import Sentencer from "sentencer";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const positiveNoun = "lord";

const negativeNoun = "peasant";

let codeString = [];
let adjectiveArray = [];
let adjectiveString = "";

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// rl.question("How many adjectives? > ", function (string) {
//   for (let i = 0; i < Number(string); i += 1) {
//     adjectiveArray.push(" {{ adjective }}");
//   }

//   console.log(Sentencer.make(`You are a${adjectiveArray} ${negativeNoun}.`));
// });

Sentencer.configure({
  nounList: [],

  // adjectiveList: [
  //   "bad",
  //   "cowardly",
  //   "cursed",
  //   "damned",
  //   "dirty",
  //   "disgusting",
  //   "distasteful",
  //   "dusty",
  //   "evil",
  //   "fat",
  //   "fat-kidneyed",
  //   "fatherless",
  //   "foul",
  //   "hairy",
  //   "half-witted",
  //   "horrible",
  //   "horrid",
  //   "infected",
  //   "lying",
  //   "miserable",
  //   "misused",
  //   "oozing",
  //   "rotten",
  //   "smelly",
  //   "snotty",
  //   "sorry",
  //   "stinking",
  //   "stuffed",
  //   "stupid",
  //   "vile",
  //   "villainous",
  //   "worried",
  // ],
  // amazing beautiful blossoming bold brave charming clearest cunning cute delicious embroidered fair fine gentle golden good handsome happy healthy honest lovely loving mighty noble peaceful pretty prompt proud reddest rich smooth sunny sweet sweetest trustworthy warm

  adjectiveList: [
    "amazing",
    "beautiful",
    "blossoming",
    "bold",
    "brave",
    "charming",
    "clearest",
    "cunning",
    "cute",
    "delicious",
    "embroidered",
    "fair",
    "fine",
    "gentle",
    "golden",
    "good",
    "handsome",
    "happy",
    "healthy",
    "honest",
    "lovely",
    "loving",
    "mighty",
    "noble",
    "peaceful",
    "pretty",
    "prompt",
    "proud",
    "reddest",
    "rich",
    "smooth",
    "sunny",
    "sweet",
    "sweetest",
    "trustworthy",
    "warm",
  ],

  actions: {
    my_action: function () {
      return "something";
    },
  },
});

rl.question("> ", function (string) {
  console.log(getBaseLog(2, string.charCodeAt(0)));
  for (let i = 0; i < getBaseLog(2, string.charCodeAt(0)); i += 1) {
    adjectiveArray.push(" {{ adjective }}");
  }

  const sentence = Sentencer.make(
    `You are a${adjectiveArray} ${positiveNoun}. Speak your mind!`
  );

  console.log(sentence.replaceAll(",", ""));
});

rl.on("close", function () {
  console.log("\n Bye Bye");
  process.exit(0);
});

// rl.question("How many adjectives? > ", function (string) {
//   for (let i = 0; i < Number(string); i += 1) {
//     adjectiveArray.push(" {{ adjective }}");
//   }

//   console.log(Sentencer.make(`You are a${adjectiveArray} ${negativeNoun}.`));
// });

// rl.question("> ", function (string) {
//   const splitString = string.split("");
//   splitString.forEach(c => {
//     codeString.push(c.charCodeAt(0));
//   });
//   console.log(codeString);
//   codeString.forEach(c => {
//     console.log(getBaseLog(2, c));
//   });
// });
