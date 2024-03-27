import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { NavLink } from 'react-router-dom';
import  AlerRamadan from '../alert/alerRamadan';
import Btn1 from '../btn/btn17';
import  Alert1 from '../alert/alert4';
import  Alert2 from '../alert/alert3';
import img from '../image/left.png'
import style from '../css/task.module.css';

function Task3() {
  const [count, setCount] = useState(() => {
    const storedCount = Cookies.get('count');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  const [totalClicks, setTotalClicks] = useState(() => {
    const storedTotalClicks = Cookies.get('totalClicks17');
    return storedTotalClicks ? parseInt(storedTotalClicks, 10) : 0;
  });

  const [totalClicksathk, setTotalClicksathk] = useState(() => {
    const storedTotalClicks = Cookies.get('totalClicksathk17');
    return storedTotalClicks ? parseInt(storedTotalClicks, 10) : 0;
  });

  const [totalClickscard, setTotalClickscard] = useState(() => {
    const storedTotalClicks = Cookies.get('totalClickscard17');
    return storedTotalClicks ? parseInt(storedTotalClicks, 10) : 0;
  });
  const [tdClicks, setTdClicks] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0, 
    20: 0, 
    21: 0, 
    22: 0, 
    23: 0, 
    25: 0, 
    26: 0, 
    27: 0, 
    30: 0, 
  });


  // الفجر
  const [tdColor1, setTdColor1] = useState(() => Cookies.get('tdColor20147') || style.color);
  const [tdColor2, setTdColor2] = useState(() => Cookies.get('tdColor20148') || style.color);
  const [tdColor3, setTdColor3] = useState(() => Cookies.get('tdColor20170') || style.color);

  // الظهر
  const [tdColor4, setTdColor4] = useState(() => Cookies.get('tdColor20149') || style.color);
  const [tdColor5, setTdColor5] = useState(() => Cookies.get('tdColor20151') || style.color);
  const [tdColor6, setTdColor6] = useState(() => Cookies.get('tdColor20152') || style.color);
  // العصر
  const [tdColor7, setTdColor7] = useState(() => Cookies.get('tdColor20153') || style.color);
  const [tdColor8, setTdColor8] = useState(() => Cookies.get('tdColor20154') || style.color);
  const [tdColor9, setTdColor9] = useState(() => Cookies.get('tdColor20155') || style.color);
  // المغرب
  const [tdColor10, setTdColor10] = useState(() => Cookies.get('tdColor20156') || style.color);
  const [tdColor11, setTdColor11] = useState(() => Cookies.get('tdColor20157') || style.color);
  const [tdColor12, setTdColor12] = useState(() => Cookies.get('tdColor20158') || style.color);
  // العشاء
  const [tdColor13, setTdColor13] = useState(() => Cookies.get('tdColor20159') || style.color);
  const [tdColor14, setTdColor14] = useState(() => Cookies.get('tdColor20160') || style.color);
  const [tdColor15, setTdColor15] = useState(() => Cookies.get('tdColor20161') || style.color);
  // الصلاة
  const [tdColor25, setTdColor25] = useState(() => Cookies.get('tdColor201325') || style.color);
  const [tdColor26, setTdColor26] = useState(() => Cookies.get('tdColor201326') || style.color);
  const [tdColor27, setTdColor27] = useState(() => Cookies.get('tdColor201327') || style.color);
  // الاذكار
  const [tdColor16, setTdColor16] = useState(() => Cookies.get('tdColor20162') || style.color);
  const [tdColor17, setTdColor17] = useState(() => Cookies.get('tdColor20163') || style.color);
  const [tdColor18, setTdColor18] = useState(() => Cookies.get('tdColor20164') || style.color);
  const [tdColor19, setTdColor19] = useState(() => Cookies.get('tdColor20165') || style.color);
  const [tdColor30, setTdColor30] = useState(() => Cookies.get('tdColor201399') || style.color);
  
  // ثواب
  const [tdColor20, setTdColor20] = useState(() => Cookies.get('tdColor66') || style.color);
  const [tdColor21, setTdColor21] = useState(() => Cookies.get('tdColor67') || style.color);
  const [tdColor22, setTdColor22] = useState(() => Cookies.get('tdColor68') || style.color);
  const [tdColor23, setTdColor23] = useState(() => Cookies.get('tdColor69') || style.color);

  const [colorChanged, setColorChanged] = useState(false);

  useEffect(() => {
    if (colorChanged) {
        // الفجر
      Cookies.set('tdColor20147', tdColor1);
      Cookies.set('tdColor20148', tdColor2);
      Cookies.set('tdColor20170', tdColor3);
        // الظهر
      Cookies.set('tdColor20149', tdColor4);
      Cookies.set('tdColor20151', tdColor5);
      Cookies.set('tdColor20152', tdColor6);
        // العصر
      Cookies.set('tdColor20153', tdColor7);
      Cookies.set('tdColor20154', tdColor8);
      Cookies.set('tdColor20155', tdColor9);
        // المغرب
      Cookies.set('tdColor20156', tdColor10);
      Cookies.set('tdColor20157', tdColor11);
      Cookies.set('tdColor20158', tdColor12);
        // العشاء
      Cookies.set('tdColor20159', tdColor13);
      Cookies.set('tdColor20160', tdColor14);
      Cookies.set('tdColor20161', tdColor15);
        // الصلاة
        Cookies.set('tdColor201325', tdColor25);
        Cookies.set('tdColor201326', tdColor26);
        Cookies.set('tdColor201327', tdColor27);
        // الاذكار
      Cookies.set('tdColor20162', tdColor16);
      Cookies.set('tdColor20163', tdColor17);
      Cookies.set('tdColor20164', tdColor18);
      Cookies.set('tdColor20165', tdColor19);
      Cookies.set('tdColor201399', tdColor30);

        // ثواب
      Cookies.set('tdColor966', tdColor20);
      Cookies.set('tdColor967', tdColor21);
      Cookies.set('tdColor968', tdColor22);
      Cookies.set('tdColor969', tdColor23);
      setColorChanged(false);
    }
  }, [tdColor1, tdColor2, tdColor3,
    tdColor4,
    tdColor5,
    tdColor6,
    tdColor8,
    tdColor9,
    tdColor10,
    tdColor11,
    tdColor12,
    tdColor13,
    tdColor14,
    tdColor15,
    tdColor16,
    tdColor17,
    tdColor18,
    tdColor19,
    tdColor20,
    tdColor21,
    tdColor22,
    tdColor23,
     colorChanged]);

  useEffect(() => {
    Cookies.set('totalClicks17', totalClicks);
  }, [totalClicks]);

  useEffect(() => {
    Cookies.set('totalClicksathk17', totalClicksathk);
  }, [totalClicksathk]);

  useEffect(() => {
    Cookies.set('totalClickscard17', totalClickscard);
  }, [totalClickscard]);

  const handleTdClick = (tdNumber) => {
    if (!colorChanged && tdClicks[tdNumber] < 5 && totalClicks < 90) {
      setCount((prevCount) => prevCount + 1);
      setTdClicks((prevClicks) => ({ ...prevClicks, [tdNumber]: prevClicks[tdNumber] + 5 }));
      setTotalClicks((prevTotal) => Math.min(prevTotal + 5, 90));
  
      switch (tdNumber) {
        case 1:
          setTdColor1('#9a4bd2');
          break;
        case 2:
          setTdColor2('#9a4bd2');
          break;
        case 3:
          setTdColor3('#9a4bd2');
          break;
        case 4:
          setTdColor4('#9a4bd2');
          break;
        case 5:
          setTdColor5('#9a4bd2');
          break;
        case 6:
          setTdColor6('#9a4bd2');
          break;
        case 7:
          setTdColor7('#9a4bd2');
          break;
        case 8:
          setTdColor8('#9a4bd2');
          break;
        case 9:
          setTdColor9('#9a4bd2');
          break;
        case 10:
          setTdColor10('#9a4bd2');
          break;
        case 11:
          setTdColor11('#9a4bd2');
          break;
        case 12:
          setTdColor12('#9a4bd2');
          break;
        case 13:
          setTdColor13('#9a4bd2');
          break;
        case 14:
          setTdColor14('#9a4bd2');
          break;
        case 15:
          setTdColor15('#9a4bd2');
          break;
        case 16:
          setTdColor16('#9a4bd2');
          break;
          case 25:
          setTdColor25('#9a4bd2');
          break;
        case 26:
          setTdColor26('#9a4bd2');
          break;
        case 27:
          setTdColor27('#9a4bd2');
          break;
        default:
          break;
      }
  
      setColorChanged(true);
    }
  };

  
  const handleTdClickath = (tdNumber) => {
    if (!colorChanged && tdClicks[tdNumber] < 5 && totalClicks < 115) {
      setCount((prevCount) => prevCount + 1);
      setTdClicks((prevClicks) => ({ ...prevClicks, [tdNumber]: prevClicks[tdNumber] + 5 }));
      setTotalClicksathk((prevTotal) => Math.min(prevTotal + 5,25));
      switch (tdNumber) {
        case 16:
          setTdColor16('#9a4bd2');
          break;
        case 17:
          setTdColor17('#9a4bd2');
          break;
        case 18:
          setTdColor18('#9a4bd2');
          break;
        case 19:
          setTdColor19('#9a4bd2');
          break;
        case 19:
          setTdColor19('#9a4bd2');
          break;
          case 30:
            setTdColor30('#9a4bd2');
            break;
        default:
          break;
      }
  
      setColorChanged(true);
    }
  };
  
  const handleTdClickcard = (tdNumber) => {
    if (!colorChanged && tdClicks[tdNumber] < 5 && totalClicks < 115) {
      setCount((prevCount) => prevCount + 1);
      setTdClicks((prevClicks) => ({ ...prevClicks, [tdNumber]: prevClicks[tdNumber] + 5 }));
      setTotalClickscard((prevTotal) => Math.min(prevTotal + 5,20));
      switch (tdNumber) {
        case 20:
          setTdColor20('#9a4bd2');
          break;
        case 21:
          setTdColor21('#9a4bd2');
          break;
        case 22:
          setTdColor22('#9a4bd2');
          break;
        case 23:
          setTdColor23('#9a4bd2');
          break;
        default:
          break;
      }
  
      setColorChanged(true);
    }
  };

  const back = ()=>{
    window.history.back(-1);
  }

  return (
    <div className={style.alltask}>
      <div className={style.btnnav}>
        <NavLink to="/Task17">
      <button className={style.button}>
      اليوم الثامن  عشر     <svg fill="currentColor" viewBox="0 0 24 24" className={style.icon}>
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
     </svg>
    </button>
    </NavLink>
      <h1 className={style.h1btn}>{<Btn1/>}</h1>
    <button className={style.button}onClick={back}><img src={img} alt="" className={style.icon}/></button>
      </div>
      
      <div>
        <div className={style.alltable}>
        <h1 className={style.h1}>
        <h1>الصلاه {totalClicks}</h1>
      </h1>
          <table >
            <thead>
              <tr>
               <th>الصلاه</th>
                <th>الفريضة</th>
                <th>النافلة</th>
                <th>المسجد</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={style.btncard}>الفجر</td>
                <td style={{ backgroundColor: tdColor1 }} className={style.btn} onClick={() => handleTdClick(1)}></td>
                <td style={{ backgroundColor: tdColor2 }} className={style.btn} onClick={() => handleTdClick(2)}></td>
                <td style={{ backgroundColor: tdColor3 }} className={style.btn} onClick={() => handleTdClick(3)}></td>
              </tr>
              <tr>
                <td className={style.btncard}>الظهر</td>
                <td style={{ backgroundColor: tdColor4 }} className={style.btn} onClick={() => handleTdClick(4)}></td>
                <td style={{ backgroundColor: tdColor5 }} className={style.btn} onClick={() => handleTdClick(5)}></td>
                <td style={{ backgroundColor: tdColor6 }} className={style.btn} onClick={() => handleTdClick(6)}></td>
              </tr>
              <tr>
                <td className={style.btncard}>العصر</td>
                <td style={{ backgroundColor: tdColor7 }} className={style.btn} onClick={() => handleTdClick(7)}></td>
                <td style={{ backgroundColor: tdColor8 }} className={style.btn} onClick={() => handleTdClick(8)}></td>
                <td style={{ backgroundColor: tdColor9 }} className={style.btn} onClick={() => handleTdClick(9)}></td>
              </tr>
              <tr>
                <td className={style.btncard}>المغرب</td>
                <td style={{ backgroundColor: tdColor10 }} className={style.btn} onClick={() => handleTdClick(10)}></td>
                <td style={{ backgroundColor: tdColor11 }} className={style.btn} onClick={() => handleTdClick(11)}></td>
                <td style={{ backgroundColor: tdColor12 }} className={style.btn} onClick={() => handleTdClick(12)}></td>
              </tr>
              <tr>
                <td className={style.btncard}>العشاء</td>
                <td style={{ backgroundColor: tdColor13 }} className={style.btn} onClick={() => handleTdClick(13)}></td>
                <td style={{ backgroundColor: tdColor14 }} className={style.btn} onClick={() => handleTdClick(14)}></td>
                <td style={{ backgroundColor: tdColor15 }} className={style.btn} onClick={() => handleTdClick(15)}></td>
              </tr>
              <tr className={style.allfootertable}>
                <td className={style.footertable} onClick={() => handleTdClick(25)}>الصلاة الضحي</td>
                <td className={style.footertable} onClick={() => handleTdClick(26)}>صلاة الشروق</td>
                <td className={style.footertable} onClick={() => handleTdClick(27)}>قيام الليل</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* اذكار */}
        <div className={style.alltable}>
        <h1 className={style.h1}>
        <h1 className={style.athkar}>الأذكار {totalClicksathk}</h1>
      </h1>
          <table >
            <tbody className={style.allathkar}>
              <tr>
                <td className={style.btncard}><NavLink to="/alathkaralsabah">اذكار الصباح </NavLink></td>
                <td style={{ backgroundColor: tdColor16 }} className={style.btn} onClick={() => handleTdClickath(16)}></td>
              </tr>
              <tr>
                <td className={style.btncard} ><NavLink to="/alathkaralmsa">أذكار المساء</NavLink></td>
                <td style={{ backgroundColor: tdColor17 }} className={style.btn} onClick={() => handleTdClickath(17)}></td>
              </tr>
              <tr>
                <td className={style.btncard}> <AlerRamadan/></td>
                <td style={{ backgroundColor: tdColor30 }} className={style.btn} onClick={() => handleTdClickath(30)}></td>
              </tr>
              <tr>
                <td className={style.btncard}> <Alert2/></td>
                <td style={{ backgroundColor: tdColor18 }} className={style.btn} onClick={() => handleTdClickath(18)}></td>
              </tr>
              <tr>
                <td className={style.btncard}><Alert1/></td>
                <td style={{ backgroundColor: tdColor19 }} className={style.btn} onClick={() => handleTdClickath(19)}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={style.allcard}>
      <h1 className={style.athkar}>عبادات {totalClickscard}</h1>
      <div className={style.allcardbtn}>
        <div className={style.cardbtn} onClick={()=>handleTdClickcard(20)}>صدقة</div>
        <div className={style.cardbtn} onClick={()=>handleTdClickcard(21)}>بر الوالدين</div>
        <div className={style.cardbtn} onClick={()=>handleTdClickcard(22)}>دعاء للمسلمين</div>
        <div className={style.cardbtn} onClick={()=>handleTdClickcard(23)}>زيارة مريض</div>
      </div>
      </div>
    </div>
  );
}

export default Task3;
