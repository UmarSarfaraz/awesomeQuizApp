const quizDB=[
    {
    question:"Q1: What is the full form of HTML?",
    a: "Hello to my Land",
    b: "Hey text Markup Language",
    c:"Hypertext Makeup Language",
    d:"Hypertext Markup Language",
    ans: "ans4"
    },

    {
        question:"Q2: What is the full form of CSS?",
        a:"Cascading Style Sheep",
        b:"Cascading Style Sheets",
        c:"Cartoon Style Sheep",
        d:"Cascading Super Sheep",
        ans:"ans2"

    },

    {
      question:"Q3: What is the full form of HTTP?",
      a:"Hypertext Transfer Protocol",
      b:"Hypertext Transfer Product",
      c:"Hypertext Test Protocol",
      d:"Hypertest Transfer Protocol",
      ans:"and1"
    },

    {
        question:"Q4: What is the full form of JS?",
        a:"JavaSuper",
        b:"JustScript",
        c:"JavaScript",
        d:"JordenShoes",
        ans:"ans3"

    },

    {
        question:"Q5: What is the full form of PHP?",
        a:"Hypertest Preprocessor",
        b:"Hypertext Preprocessor",
        c:"Hypertext Postprocessor",
        d:"Hypertext Preprocessors",
        ans:"ans2"
    },
];

const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#sumbit');

const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore");
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList= quizDB[questionCount]

    question.innerText=questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;

}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
    
    if(curAnsElem.checked){
    answer=curAnsElem.id;
    }

    });
    return answer;

};

const deSelectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);

}


Submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
    score++;
    };

    questionCount++;
    deSelectAll();
    if(questionCount < quizDB.length){
        loadQuestion();

    }else{
        showScore.innerHTML=`
        <h3> You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onClick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');

    }
}); 
