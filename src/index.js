#!/usr/bin/env node
import { createInterface } from "readline";
import Sentencer from "sentencer";
import { positiveAdjectives, negativeAdjectives } from "./lists.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ASCIIString = [];
let adjectiveArray = [];
let adjectiveString = "";

// return the base log of a number, in this case 2 ** n
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

Sentencer.configure({
  nounList: [],

  adjectiveList: positiveAdjectives,

  actions: {
    my_action: function () {
      return "something";
    },
  },
});

function splitStringAndReturnASCII(string) {
  string.split("").forEach(s => {
    ASCIIString.push(s.charCodeAt(0));
  });
  console.log(ASCIIString);
  ASCIIString.forEach(a => {
    console.log(getBaseLog(2, a));
  });
}

rl.question("> ", function (string) {
  splitStringAndReturnASCII(string);
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

// for (let i = 0; i < getBaseLog(2, string.charCodeAt(0)); i += 1) {
//   adjectiveArray.push(" {{ adjective }}");
// }

// const sentence = Sentencer.make(
//   `You are a${adjectiveArray} ${positiveNoun}. Speak your mind!`
// );

// console.log(sentence.replaceAll(",", ""));
