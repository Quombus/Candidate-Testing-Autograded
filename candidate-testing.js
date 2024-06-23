const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ' ';


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? " 
  ,"True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let candidatePrompt= [];
let points = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
   candidateName = input.question("Candidate Name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswer = input.question(question);
correctAnswers1 = `Sally Ride, True, 40, Trajectory, 3`;


  for (let i = 0; i < questions.length; i++) {
    candidatePrompt = input.question( (i + 1) + ') ' + questions[i] + " : ");
    candidateAnswers = candidateAnswers.concat(candidatePrompt);

    console.log("Candidate answer : " + candidateAnswers[i]);
    
      let correctAnsFormat = correctAnswers1.split(', ');
      console.log(`Correct answer : ${correctAnsFormat[i]}
                                                           `);
    
}

let correctAnsFormat2 = correctAnswers1.toUpperCase().split(', ');

let candidateAnsFormat = candidateAnswers.toString();
let candidateAnsFormat2 = candidateAnsFormat.toUpperCase().trim();
let candidateAnsFormat3 = candidateAnsFormat2.split(',');

for (let i = 0; i < questions.length; i++) {
    if (candidateAnsFormat3[i] === correctAnsFormat2[i]) { 
        points = points + 1;
    } 
}
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
 
  let grade = (points * 2) * 10;  //TODO 3.2 use this variable to calculate the candidates score.


 
 console.log("<< Candidate recieved a total of " + points  + ". >>");
if (points === 0 || points === 1  || points === 2 || points === 3 ) {
  console.log("<< Candidate recieved a grade of " + grade + "%. Candidate failed. >>");

} else { 
    console.log("<< Candidate recieved a grade of " + grade + "%. Candidate passed! >>");

}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log('Hello, ' + candidateName + '!');
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};