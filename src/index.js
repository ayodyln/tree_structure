// Todo: Javascript Tree Structure Generation
/*
Convert the flat data structure into a tree structure with ES6+ Javascript. 

Scenario: There is a database of family members that isn't organized as a "family tree". 
Convert the constant `flatData` into a object and return it from main().

Hints: Array methods and Recursion.
*/
const flatData = [
  {
    name: "Laura Smith",
    parent: null,
  },
  {
    name: "Abigail Jones",
    parent: "Laura Smith",
  },
  {
    name: "Jacob Jones",
    parent: "Laura Smith",
  },
  {
    name: "Ali Richards",
    parent: "Abigail Jones",
  },
  {
    name: "Zach Richards",
    parent: "Abigail Jones",
  },
  {
    name: "William Jones",
    parent: "Jacob Jones",
  },
  {
    name: "Delta",
    parent: "Jacob Jones",
  },
]

function main(db, parent) {}

//? Function Call and console output
// console.log(JSON.stringify(main(flatData, null), null, 2))

//! Testing Purposes - Do not change.
export default main
