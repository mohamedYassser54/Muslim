import React from "react";
import { NavLink } from "react-router-dom";
import  img from "./image/1.png";
import  img2 from "./image/2.png";
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
]

export default data;