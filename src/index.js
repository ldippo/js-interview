import "./styles.css";
import { main } from "./domStuff";
import getKittens from "./getKittens";

const CATS = [
  { name: "Fluffy", age: "2", breed: "Maine Coon" },
  { name: "Echo", age: "7", breed: "Domestic Shorthair" },
  { name: "Poseiden", age: "1", breed: "Russian Blue" },
  { name: "Skye", age: "48", breed: "Domestic Shorthair" },
  { name: "Chili", age: "12", breed: "Savannah Cat" }
];

const EXPECTED_RESULT = [
  { name: "Poseiden", age: "1", breed: "Russian Blue" },
  { name: "Fluffy", age: "2", breed: "Maine Coon" },
  { name: "Echo", age: "7", breed: "Domestic Shorthair" }
];
const kittens = getKittens(CATS);

// const EXPECTED_RESULT = [
//   { name: "Poseiden", age: "1", breed: "Russian Blue" }
// ];
// const kittens = getKittens(CATS, 'Russian Blue');

const valid = JSON.stringify(kittens) === JSON.stringify(EXPECTED_RESULT);

// TEST RUNNER CODE - NO EDIT
main(kittens, valid);
