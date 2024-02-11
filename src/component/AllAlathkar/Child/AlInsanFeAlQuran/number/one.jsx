import React from 'react'
import style from'../../css/number.module.css'
function one() {
  return (
    <div>
    {/* <iframe src="https://youtu.be/fyHqHof8-xU?t=1" width="420" height="315"></iframe> */}
    <iframe
        className={style.video}
        src="https://www.youtube.com/embed/fyHqHof8-xU"
        title="قصص الإنسان في القرآن | الحلقة 1 | أصحاب الأخدود - ج 1 | Human Stories from Qur'an"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        controls autoplay loop
        // style={{ width: iframeSize.width, height: iframeSize.height }}
      ></iframe>
      
         
       </div>
  )
}

export default one
// width="1084" height="610"