import React, { useState, useEffect } from 'react';
import img from './image2/3.png'
import style from '../css/game.module.css'
function Game() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const generatedQuestions = [
      {
        question: 'كم عدد سور القرآن الكريم؟',
        options: ['مئة و تسعة عشرة سورة', 'مئة و خمسة عشرة سورة', 'مئة و أربعة عشرة سورة'],
        correctAnswer: 'مئة و أربعة عشرة سورة',
      },
      {
        question: 'ما السورة التي بدأت باسم من أسماء الله الحسنى؟',
        options: ['سورة القدر', 'سورة الأنفال', 'سورة الرحمن'],
        correctAnswer: 'سورة الرحمن',
      },
      {
        question: 'ما هو اسم زوجة النبي صلى الله عليه وسلم الأولى؟',
        options: ['أم سلمة', 'خديجة بنت خويلد', 'عائشه بنت أبي بكر'],
        correctAnswer: 'خديجة بنت خويلد',
      },
      {
        question: 'ما هي السورة التي تحدثت عن تقسيم الغنائم؟',
        options: ['سورة الأنفال', 'سورة الكهف', 'سورة الملك'],
        correctAnswer: 'سورة الأنفال',
      },
      {
        question: ' من هو النبي الذي بعثه الله إلى قوم عاد؟',
        options: ['موسى عليه السلام', 'هود عليه السلام', 'داود عليه السلام'],
        correctAnswer: 'هود عليه السلام',
      },
      {
        question: ' كم كان عمر النبي صلى الله عليه وسلم عندما بعث؟',
        options: ['40 عاماً', '44 عاماً', '42 عاماً'],
        correctAnswer: '40 عاماً',
      },
      {
        question: ' من هو النبي الذي كلم الله؟',
        options: ['داود عليه السلام', 'يوسف عليه السلام', 'موسى عليه السلام'],
        correctAnswer: 'موسى عليه السلام',
      },
      {
        question: ' من أكثر الأنبياء ذكراً بالقرآن؟',
        options: ['داود عليه السلام وذكر 234مرة', 'يوسف عليه السلام وذكر 226مرة', 'موسى عليه السلام وذكر 236مرة'],
        correctAnswer: 'موسى عليه السلام وذكر 236مرة',
      },
      {
        question: ' كم عدد مذاهب المسلمين؟',
        options: ['أربعة مذاهب', 'سبعة مذاهب', 'خمسة مذاهب'],
        correctAnswer: 'أربعة مذاهب',
      },
      {
        question: ' كم عدد أركان الإيمان ؟',
        options: ['أربعة أركان', 'ستة أركان', 'خمسة أركان'],
        correctAnswer: 'ستة أركان',
      },
      {
        question: 'من هو النبي الذي آمن به كل قومه؟',
        options: ['يونس عليه السلام', 'نوح عليه السلام', 'صالح عليه السلام'],
        correctAnswer: 'يونس عليه السلام',
      },
      
    ];

    setQuestions(generatedQuestions);
    const randomIndex = getRandomUnusedIndex(generatedQuestions);
    setCurrentQuestionIndex(randomIndex);
  }, []);

  const getRandomUnusedIndex = (questionsList) => {
    const unusedQuestions = questionsList.filter((_, index) => !usedQuestions.includes(index));

    if (unusedQuestions.length === 0) {
      setGameOver(true);
      return -1; 
    }

    const randomIndex = Math.floor(Math.random() * unusedQuestions.length);
    const selectedQuestionIndex = questionsList.indexOf(unusedQuestions[randomIndex]);
    setUsedQuestions((prevUsedQuestions) => [...prevUsedQuestions, selectedQuestionIndex]);
    return selectedQuestionIndex;
  };

  const handleAnswer = (answer) => {
    setUserAnswer(answer);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 3);
    }

    nextQuestion();
  };

  const nextQuestion = () => {
    setUserAnswer(null);

    const randomIndex = getRandomUnusedIndex(questions);

    if (randomIndex !== -1) {
      setCurrentQuestionIndex(randomIndex);
    }
  };

  const onClick = () =>{
    window.location.reload();
  }

  return (
    <div className={style.Game}>
      <img src={img}/>
      <div className={style.card}>

      {gameOver ? (
        <div className={style.end}>
          <h1>انتهت اللعبة</h1>
          <p>نهاية اللعبة! النقاط الإجمالية: 30/{score}</p>
          <button onClick={onClick} className={style.reload}>العب مرة أخري</button>
        </div>
      ) : questions.length > 0 ? (
        <div className={style.Allcard}>
          <p>{questions[currentQuestionIndex].question}</p>

          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}

          {userAnswer !== null && (
            <div>
              {userAnswer === questions[currentQuestionIndex].correctAnswer ? (
                <div>
                  <h2>إجابة صحيحة!</h2>
                </div>
              ) : (
                <div>
                  <h2>إجابة خاطئة!</h2>
                  <p>الإجابة الصحيحة هي: {questions[currentQuestionIndex].correctAnswer}</p>
                </div>
              )}
            </div>
          )}

          <p>النقاط: {score}</p>
        </div>
      ) : (
        <div>
          <h2>لا توجد أسئلة متاحة</h2>
        </div>
      )}
      </div>
    </div>
  );
}

export default Game;
