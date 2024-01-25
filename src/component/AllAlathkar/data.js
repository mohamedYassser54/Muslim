import React from "react";
import { NavLink } from "react-router-dom";
import  img from "./image/1.png";
import  img2 from "./image/2.png";
import img3 from "./image/3.png"
import img4 from "./image/4.png"
import img5 from "./image/5.png"
import img6 from "./image/6.png"
import img7 from "./image/7.png"
import img8 from "./image/8.png" 
import img9 from "./image/9.png" 
import img10 from "./image/10.png" 
import img11 from "./image/11.png" 
import img12 from "./image/12.png" 
import img13 from "./image/13.png" 
import img14 from "./image/14.png" 
const data = [
    {
        id:1,
        image:img,
        title:"أذكار الصباح",
        to:"/alathkaralsabah",
    },
    {
        id:2,
        image:img2,
        title:"أذكار المساء",
        to:"/alathkaralmsa",
    },
    {
        id:3,
        image:img3,
        title:"دعاء الذهاب إلى المسجد",
        to:"/athkarMasjid1",
    },
    {
        id:5,
        image:img4,
        title:"دعاء دخول المسجد",
        to:"/athkarMasjid2",
    },
    {
        id:6,
        image:img5,
        title:"دعاء الخروج من المسجد",
        to:"/athkarMasjid3",
    },
    {
        id:7,
        image:img6,
        title:"أذكار النوم",
        to:"/alathkaralnawm",
    },
    {
        id:8,
        image:img13,
        title:"دعاء الفزع عند النوم",
        to:"/Sleep",
    },
    {
        id:9,
        image:img14,
        title:"أذكار الإستيقاظ من النوم",
        to:"/Wakeup",
    },
    {
        id:10,
        image:img8,
        title:"دعاء السفر",
        to:"/safar",
    },
    {
        id:11,
        image:img9,
        title:"دعاء صلاة الاستخارة",
        to:"/istikhara",
    },
    {
        id:12,
        image:img10,
        title:"الدعاء إذا رأى المطر",
        to:"/rain",
    },
    {
        id:14,
        image:img11,
        title:"دعاء لبس الثوب الجديد",
        to:"/newclothes",
    },
    {
        id:15,
        image:img12,
        title:"دعاء زيارة القبور",
        to:"/maqaber",
    },
    {
        id:16,
        image:img7,
        title:"دعاء من أصيب بمصيبة",
        to:"/mosiba",
    },
]

export default data;