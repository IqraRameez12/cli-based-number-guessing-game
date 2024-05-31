import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "please guess a number between 1-10"
    },
]);
if (answer.userGuessingNumber === randomNumber) {
    console.log("you guess a right number");
}
else {
    console.log("you guess a wrong number");
}
