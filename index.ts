#!/usr/bin/env node
shabang

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstnumber" },
  { message: "Enter second Number", type: "number", name: "secondnumber" },
  {
    message: "please select operation to perform",
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "multiplication", "division"],
  },
]);



// conditional statament

if (answer.operator === "Addition") {
 console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);}
    else if (answer.operator === "multiplication") {
        console.log(answer.firstnumber * answer.secondnumber);}
        else if (answer.operator === "division") {
            console.log(answer.firstnumber / answer.secondnumber);}
            else { console.log("Please enter valid operator")}

     