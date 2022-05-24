/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct_answer = 0;
answer = false;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
let message = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const question1 = prompt("Is Java the same as JavaScript?");
question1.toLowerCase();

if (question1 === "no") {
    answer = true;
    correct_answer += 1;
} else {
    correct_answer = 0;
}


const question2 = prompt("Which of the following JavaScript commands instructs a browser to open a dialog box with a message?");
question2.toLowerCase();

if (question2 === "alert()") {
    answer = true;
    correct_answer += 1;
} else {
    correct_answer = 0;
}


const question3 = prompt("Which of the following is an HTTP method that can be used in the method attribute on a form?");
question3.toLowerCase();

if (question3 === "post") {
    answer = true;
    correct_answer += 1;
} else {
    correct_answer = 0;
}


const question4 = prompt("Who is Guil Hernandez?");
question4.toLowerCase();

if (question4 === "teacher") {
    answer = true;
    correct_answer += 1;
} else {
    correct_answer = 0;
}


const question5 = prompt("Is Python the same as JavaScript?");
question5.toLowerCase();

if (question5 === "no") {
    answer = true;
    correct_answer += 1;
} else {
    correct_answer = 0;
}


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correct_answer === 5){
    rank = `Congrats! You got <span style = "color: red">${correct_answer}</span> answers. Your rank is Gold`;
    message.innerHTML = `<h1>${rank}</h1>`
} else if (correct_answer >= 3 && correct_answer <= 4) { /*It is better to write correct_answer >= 3. It is shorter.*/
    rank = `Congrats! You got <span style = "color: red">${correct_answer}</span> answers. Your rank is Silver`;
    message.innerHTML = `<h1>${rank}</h1>`
} else if (correct_answer >= 1 && correct_answer <= 2) { /*It is better to write correct_answer >= 1. It is shorter.*/
    rank = `Congrats! You got <span style = "color: red">${correct_answer}</span> answers. Your rank is Bronze`;
    message.innerHTML = `<h1>${rank}</h1>`
} else {
    rank = `No crown. You got <span style = "color: red">${correct_answer}</span> answers.`;
    message.innerHTML = `<h1>${rank}</h1>`
}




// 6. Output results to the <main> element

