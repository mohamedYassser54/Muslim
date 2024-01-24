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
        to:"/athkarMasjid3",
    },
    {
        id:8,
        image:img7,
        title:"دعاء من أصيب بمصيبة",
        to:"/athkarduaa",
    },
    {
        id:9,
        image:img8,
        title:"دعاء السفر",
        to:"/safar",
    },
]

export default data;