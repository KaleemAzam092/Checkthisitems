const quizData = [
  {
    question: 'In which year did Pakistan gain independence?',
    options: ['1945', '1946', '1947', '1948'],
    answer: '1947',
  },
  {
    question: 'Who was the first Governor-General of Pakistan?',
    options: [
      'Liaquat Ali Khan',
      'Muhammad Ali Jinnah',
      'Ayub Khan',
      'Iskander Mirza',
    ],
    answer: 'Muhammad Ali Jinnah',
  },
  {
    question: 'Who was the first Prime Minister of Pakistan?',
    options: [
      'Zulfikar Ali Bhutto',
      'Liaquat Ali Khan',
      'Benazir Bhutto',
      'Nawaz Sharif',
    ],
    answer: 'Liaquat Ali Khan',
  },
  {
    question: 'Who wrote the National Anthem of Pakistan?',
    options: [
      'Allama Iqbal',
      'Hafeez Jalandhari',
      'Faiz Ahmed Faiz',
      'Ahmed Faraz',
    ],
    answer: 'Hafeez Jalandhari',
  },
  {
    question: 'What was the first capital of Pakistan?',
    options: ['Lahore', 'Islamabad', 'Karachi', 'Peshawar'],
    answer: 'Karachi',
  },
  {
    question: "In which year was Pakistan's first Constitution adopted?",
    options: ['1956', '1962', '1973', '1949'],
    answer: '1956',
  },
  {
    question: 'In which year did Allama Iqbal deliver the Allahabad Address?',
    options: ['1928', '1930', '1940', '1947'],
    answer: '1930',
  },
  {
    question: 'On which date was the Pakistan Resolution passed?',
    options: [
      '14 August 1947',
      '23 March 1940',
      '11 September 1948',
      '25 December 1876',
    ],
    answer: '23 March 1940',
  },
  {
    question: 'What is the highest civilian award of Pakistan?',
    options: [
      'Hilal-e-Imtiaz',
      'Sitara-e-Imtiaz',
      'Nishan-e-Pakistan',
      'Tamgha-e-Imtiaz',
    ],
    answer: 'Nishan-e-Pakistan',
  },
  {
    question: 'Which year was islamabad made capital of Pakistan',
    options: ['1958', '1960', '1967', '1971'],
    answer: '1967',
  },
];
// console.log(quizData);

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

// console.log(startScreen, quizScreen, resultScreen);

const startBtn = document.querySelector('#startBtn');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const restartBtn = document.querySelector('#restartBtn');

// console.log(startBtn, prevBtn, nextBtn, restartBtn);

const question = document.querySelector('#question');
const options = document.querySelector('#options');
const questionNumber = document.querySelector('#questionNumber');
const timer = document.querySelector('#timer');

// console.log(question, options, questionNumber, timer);

const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const unanswered = document.getElementById('unanswered');
const percentage = document.getElementById('percentage');
const review = document.getElementById('review');
const score = document.getElementById('score');

// console.log(correct, wrong, unanswered, percentage, review);

let currentQuestion = 0;
let userAnswer = [];
let timeLeft = 60;
let interval;

startBtn.addEventListener('click', () => {
  startScreen.classList.toggle('hidden');
  quizScreen.classList.toggle('hidden');

  showQuestion();
});

let showQuestion = () => {
  clearInterval(interval);
  timeLeft = 60;
  startTimer();

  questionNumber.innerText = `Question ${currentQuestion + 1}`;
  let qtn = quizData[currentQuestion];
  questionNumber.innerText = qtn.question;
  options.innerHTML = '';
  qtn.options.forEach((opt, index) => {
    let btn = document.createElement('button');
    btn.innerText = opt;
    btn.classList.add('option');

    if (userAnswer[currentQuestion] === index) {
      btn.classList.add('selected');
    }
    btn.onclick = () => selectAns(index);

    options.appendChild(btn);
  });
};
// const qtn = quizData[currentQuestion];

// questionNumber.innerText = `Question ${currentQuestion + 1}`
// question.innerText = qtn.question;

// options.innerHTML = ""
// qtn.options.map((option, index)=>{
//   const btn = document.createElement("button");
//   btn.innerText = option;
//   btn.classList.add("option")

//   if(userAnswers[currentQuestion] === index){
//     btn.classList.add("selected")
//   }

//   btn.onclick = () => selectAnswer(index)
//   options.appendChild(btn)
// })

let selectAns = () => {
  userAnswer[currentQuestion] = index;
  showQuestion();
};

let startTimer = () => {
  timer.innerText = 60;
  interval = setInterval(() => {
    timer.innerText = 60;
    timeLeft--;
    timer.innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(interval);
      nextQuestion();
    }
  }, 1000);
};

let nextQuestion = () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    showQuestion();
  }
};
nextBtn.addEventListener('click', () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    showQuestion();
  }
});
