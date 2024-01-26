import React,{useState} from 'react'
import style from '../css/message.module.css'
function Message() {
    const [selectedWord, setSelectedWord] = useState(null);
    const List =[
        "( وبشر الصابرين  الذين إذا أصابتهم مصيبة قالوا إنّا لله وإنّا إليه راجعون )",
        "( وما تقدموا لأنفسكم من خيرٍ تجدوه عند الله )",
        "( واستعينوا بالصبر والصلاة وإنها لكبيرة إلا على الخاشعين )",
        "( وتعاونوا على البر والتقوى ولا تعاونوا على الإثم والعدوان )",
        "( واتقوا يومًا لا تجزي نفس عن نفسٍ شيئًا ولا يقبل منها شفاعة ولا يؤخذ منها عدل ولا هم ينصرون )",
        "( والذين آمنوا وعملوا الصالحات أولئك أصحاب الجنة هم فيها خالدون )",
        "( وأقيموا الصلاة وآتوا الزكاة وما تقدموا لأنفسكم من خيرٍ تجدوه عند الله إن الله بما تعملون بصير )",
        "( ومن يتق الله يجعل له مخرجًا ويرزقه من حيث لا يحتسب )",
        "( لا يكلف الله نفسًا إلا وسعها لها ما كسبت وعليها ما اكتسبت )",
        "( ويمكرون ويمكر الله والله خير الماكرين )",
        "( فإن مع العسر يسرًا إن مع العسر يسرًا )",
        "( ما أصابك من حسنة فمن الله وما أصابك من سيئة فمن نفسك )"
    ]
    const selectRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * List.length);
        const randomWord = List[randomIndex];
        setSelectedWord(randomWord);
      };
  return (
    <div className={style.message}>
        <div className={style.text}><p>{selectedWord}</p></div>
        
<button role="button" class={style.button_name} onClick={selectRandomWord}>اضغط</button>
    </div>
  )
}

export default Message;
