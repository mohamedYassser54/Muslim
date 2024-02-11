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
        id:1,
        question: 'كم عدد سور القرآن الكريم؟',
        options: ['مئة و تسعة عشرة سورة', 'مئة و خمسة عشرة سورة', 'مئة و أربعة عشرة سورة'],
        correctAnswer: 'مئة و أربعة عشرة سورة',
      },
      {
        id:2,
        question: 'ما السورة التي بدأت باسم من أسماء الله الحسنى؟',
        options: ['سورة القدر', 'سورة الأنفال', 'سورة الرحمن'],
        correctAnswer: 'سورة الرحمن',
      },
      {
        id:3,
        question: 'ما هو اسم زوجة النبي صلى الله عليه وسلم الأولى؟',
        options: ['أم سلمة', 'خديجة بنت خويلد', 'عائشه بنت أبي بكر'],
        correctAnswer: 'خديجة بنت خويلد',
      },
      {id:4,
        question: 'ما هي السورة التي تحدثت عن تقسيم الغنائم؟',
        options: ['سورة الأنفال', 'سورة الكهف', 'سورة الملك'],
        correctAnswer: 'سورة الأنفال',
      },
      {
        id:5,
        question: ' من هو النبي الذي بعثه الله إلى قوم عاد؟',
        options: ['موسى عليه السلام', 'هود عليه السلام', 'داود عليه السلام'],
        correctAnswer: 'هود عليه السلام',
      },
      {
        id:6,
        question: ' كم كان عمر النبي صلى الله عليه وسلم عندما بعث؟',
        options: ['40 عاماً', '44 عاماً', '42 عاماً'],
        correctAnswer: '40 عاماً',
      },
      {
        id:7,
        question: ' من هو النبي الذي كلم الله؟',
        options: ['داود عليه السلام', 'يوسف عليه السلام', 'موسى عليه السلام'],
        correctAnswer: 'موسى عليه السلام',
      },
      {
        id:8,
        question: ' من أكثر الأنبياء ذكراً بالقرآن؟',
        options: ['داود عليه السلام وذكر 234مرة', 'يوسف عليه السلام وذكر 226مرة', 'موسى عليه السلام وذكر 236مرة'],
        correctAnswer: 'موسى عليه السلام وذكر 236مرة',
      },
      {
        id:9,
        question: ' كم عدد مذاهب المسلمين؟',
        options: ['أربعة مذاهب', 'سبعة مذاهب', 'خمسة مذاهب'],
        correctAnswer: 'أربعة مذاهب',
      },
      {
        id:10,
        question: ' كم عدد أركان الإيمان ؟',
        options: ['أربعة أركان', 'ستة أركان', 'خمسة أركان'],
        correctAnswer: 'ستة أركان',
      },
      {
        id:11,
        question: 'من هو النبي الذي آمن به كل قومه؟',
        options: ['يونس عليه السلام', 'نوح عليه السلام', 'صالح عليه السلام'],
        correctAnswer: 'يونس عليه السلام',
      },
      {
        id:12,
        question: 'كم كان عدد المسلمين في غزوة أحد؟',
        options: ['٢٠٠٠ وانسحب منهم عبد الله بن أبي ومن معه من المنافقين ١٣٠٠ فأصبحوا ٧٠٠', '١١٠٠ وانسحب منهم عبد الله بن أبي ومن معه من المنافقين ١٠٠ فأصبحوا ١٠٠٠', '١٠٠٠ وانسحب منهم عبد الله بن أبي ومن معه من المنافقين ٣٠٠ فأصبحوا ٧٠٠'],
        correctAnswer: '١٠٠٠ وانسحب منهم عبد الله بن أبي ومن معه من المنافقين ٣٠٠ فأصبحوا ٧٠٠',
      },
      {
        id:13,
        question: 'من هو النبي الذي روادته المرأة التي تربى في بيتها؟',
        options: ['يوسف عليه السلام', 'عيسى عليه السلام', 'صالح عليه السلام'],
        correctAnswer: 'يوسف عليه السلام',
      },
      {
        id:14,
        question: 'من النبي الذي طلب منه قومه أن ينزل لهم مائدة من السماء ؟',
        options: ['يوسف عليه السلام', 'عيسى عليه السلام', 'صالح عليه السلام'],
        correctAnswer: 'عيسى عليه السلام',
      },
      {
        id:15,
        question: 'من هو أول الأئمة الأربعة ؟',
        options: ['المالكي', 'الشافعي', 'أبو حنيفة'],
        correctAnswer: 'أبو حنيفة',
      },
      {
        id:16,
        question: 'من أول من دول علم أصول الفقه؟',
        options: ['المالكي', 'الشافعي', 'أبو حنيفة'],
        correctAnswer: 'الشافعي',
      },
      {
        id:17,
        question: 'من هو الصحابي الجليل الذي اقترح على أبي بكر الصديق أن يجمع القرآن الكريم ؟',
        options: ['عمر بن الخطاب', 'علي بن أبي طالب', ' عثمان بن عفان'],
        correctAnswer: 'عمر بن الخطاب',
      },
      {
        id:18,
        question: 'من هو الصحابي الجليل الذي تزوج اثنتين من بنات الرسول صلى الله عليه وسلم؟',
        options: ['عمر بن الخطاب', 'علي بن أبي طالب', 'عثمان بن عفان'],
        correctAnswer: 'عثمان بن عفان',
      },
      {
        id:19,
        question: 'من هو الصحابي الجليل الذي عند ذكر اسمه نقول ( كرم الله وجهه )؟',
        options: ['عمر بن الخطاب', 'علي بن أبي طالب', ' عثمان بن عفان'],
        correctAnswer: 'علي بن أبي طالب',
      },
      {
        id:20,
        question: 'كم عدد أولي العزم من الرسل؟',
        options: ['أربعة', 'ستة ', 'خمسة'],
        correctAnswer: 'خمسة',
      },
      {
        id:21,
        question: 'من هو النبي الذي دعا ربه: ” أني مسني الضر وأنت أرحم الراحمين؟',
        options: [' إسماعيل عليه السلام', 'شعيب عليه السلام ', 'أيوب عليه السلام'],
        correctAnswer: 'أيوب عليه السلام',
      },
      {
        id:22,
        question: 'من هو النبي الملقب بروح الله',
        options: ['موسى عليه السلام', ' محمد عليه الصلاة والسلام ', 'عيسى عليه السلام'],
        correctAnswer: 'عيسى عليه السلام',
      },
      {
        id:23,
        question: 'من هو النبي الذي كاد به إخوته ورموه في البئر وهو صغيرًا؟',
        options: ['يوسف عليه السلام', 'يعقوب عليه السلام ', ' إسحاق عليه السلام '],
        correctAnswer: 'يوسف عليه السلام',
      },
      {
        id:24,
        question: 'من هم الأسباط؟',
        options: ['أبناء عمومة سيدنا يوسف عليه السلام', 'أبناء سيدنا يوسف عليه السلام ', 'أخوة سيدنا يوسف عليه السلام'],
        correctAnswer: 'أخوة سيدنا يوسف عليه السلام',
      },
      {
        id:25,
        question: ' من هو النبي الذي قال لابنه: “” يَا بُنَيَّ ارْكَب مَّعَنَا وَلَا تَكُن مَّعَ الْكَافِرِينَ”، كما ورد في القرآن الكريم؟',
        options: ['سيدنا يعقوب عليه السلام', 'سيدنا نوح عليه السلام', 'سيدنا إبراهيم عليه السلام'],
        correctAnswer: 'سيدنا نوح عليه السلام',
      },
      {
        id:26,
        question: 'من هو النبي الذي الذي انشق له البحر؟',
        options: [' هود  عليه السلام', 'موسى عليه السلام', ' عيسى عليه السلام '],
        correctAnswer: 'موسى عليه السلام',
      },
      {
        id:27,
        question: 'من هو النيي الملقب بالذبيح؟',
        options: [' هود  عليه السلام', 'اسماعيل عليه السلام', ' عيسى عليه السلام '],
        correctAnswer: 'اسماعيل عليه السلام',
      },
      {
        id:28,
        question: 'من هو النبي الذي حاول قومه تعذيبه بالنار فجعلها الله عليه بردًا وسلامًا ؟',
        options: ['إبراهيم عليه السلام', 'اسماعيل عليه السلام ', ' عيسى عليه السلام '],
        correctAnswer: 'إبراهيم عليه السلام',
      },
      {
        id:29,
        question: 'إلى أي قوم بعث صالح عليه السلام؟',
        options: ['إلى قوم لوط', 'إلى قوم عاد ', 'إلى قوم ثمود'],
        correctAnswer: 'إلى قوم ثمود',
      },
      {
        id:30,
        question: 'ما هي أطول سورة في القرآن الكريم ؟',
        options: ['سورة الكهف', 'سورة البقرة', '  سورة الواقعة' ],
        correctAnswer: 'سورة البقرة',
      },
      
    ];

    setQuestions(generatedQuestions);
    const randomIndex = getRandomUnusedIndex(generatedQuestions);
    setCurrentQuestionIndex(randomIndex);
  }, []);

  const getRandomUnusedIndex = (questionsList) => {
    const unusedQuestions = questionsList.filter((_, index) => !usedQuestions.includes(index));

    if (unusedQuestions.length === 0 || usedQuestions.length >= 10) {
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
