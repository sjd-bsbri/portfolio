import {
   Eboo,Portfolio,Next,Shop,TopBlog,TopHome
} from "../assets/courses";

// Import technology icons
import React from 'react';
import ReactIcon from '@mui/icons-material/Code';
import JSIcon from '@mui/icons-material/Javascript';
import NextIcon from '@mui/icons-material/AllInclusive';
import TSIcon from '@mui/icons-material/DataObject';
import MUIIcon from '@mui/icons-material/DesignServices';
import TailwindIcon from '@mui/icons-material/Palette';
import HTMLIcon from '@mui/icons-material/Html';
import CSSIcon from '@mui/icons-material/Css';
import GitIcon from '@mui/icons-material/Source';
import ResponsiveIcon from '@mui/icons-material/DevicesOther';
import ZarinpalIcon from '@mui/icons-material/Payments';
import ZodIcon from '@mui/icons-material/VerifiedUser';
import ZustandIcon from '@mui/icons-material/Storage';

export const courses = [
    {
        title: "  پروژه فروشگاه   ",
        image: Shop,
        link: "https://sjd-bsbri.github.io/shop",
        info: " این پروژه با ریکت نوشته شده . امکان اضافه کردن ، حذف و فیلتر محصولات در این پروژه وجود دارد",
        technologies: [
            { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
            { name: "JavaScript", icon: <JSIcon />, color: "#F7DF1E" },
            { name: "HTML5", icon: <HTMLIcon />, color: "#E34F26" },
            { name: "CSS3", icon: <CSSIcon />, color: "#1572B6" },
            { name: "Git", icon: <GitIcon />, color: "#F05032" },
            { name: "Responsive Design", icon: <ResponsiveIcon />, color: "#0078D7" },
        ]
    },
   
    {
        title: " سایت شخصی خودم ",
        image: Portfolio,
        link: "https://sjd-bsbri.github.io/portfolio",
        info: `این پروژه با ریکت و متریال یو آی نوشته شده . در این پروژه از بسیاری از کامپوننت های متریال یو آی استفاده شده و امکان اعتبارسنجی در بخش فرم ها نیز وجود دارد`,
        technologies: [
            { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
            { name: "JavaScript", icon: <JSIcon />, color: "#F7DF1E" },
            { name: "Material UI", icon: <MUIIcon />, color: "#0081CB" },
            { name: "HTML5", icon: <HTMLIcon />, color: "#E34F26" },
            { name: "CSS3", icon: <CSSIcon />, color: "#1572B6" },
            { name: "Form Validation", icon: <GitIcon />, color: "#4CAF50" },
        ]
    },
    {
        title: "   پروژه پلتفرم مشارکت جمعی هادی",
        image: Next,
        link: "https://h-quchan.ir/",
        info: `این پروژه با نکست، ریکت، تایپ اسکریپت و تیلویند نوشته شده. این پروژه دارای درگاه پرداخت زرین پال و کاملا ریسپانسیو است`,
        technologies: [
            { name: "Next.js", icon: <NextIcon />, color: "#000000" },
            { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
            { name: "TypeScript", icon: <TSIcon />, color: "#3178C6" },
            { name: "Tailwind CSS", icon: <TailwindIcon />, color: "#06B6D4" },
            { name: "Zarinpal", icon: <ZarinpalIcon />, color: "#FFD700" },
            { name: "Zod", icon: <ZodIcon />, color: "#3068B7" },
            { name: "Zustand", icon: <ZustandIcon />, color: "#7952B3" },
            { name: "Responsive Design", icon: <ResponsiveIcon />, color: "#0078D7" },
        ]
    },
   
    {
        title: "پروژه بلاگ سایت تاپ لرن  ",
        image: TopBlog,
        link: "https://sjd-bsbri.github.io/toplearn-blog",
        info: `   در این پروژه از ریکت و متریال یو آی استفاده شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ با متریال یو آی به صورت کاملا ریسپانسیو طراحی شده`,
        technologies: [
            { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
            { name: "JavaScript", icon: <JSIcon />, color: "#F7DF1E" },
            { name: "Material UI", icon: <MUIIcon />, color: "#0081CB" },
            { name: "HTML5", icon: <HTMLIcon />, color: "#E34F26" },
            { name: "CSS3", icon: <CSSIcon />, color: "#1572B6" },
            { name: "Responsive Design", icon: <ResponsiveIcon />, color: "#0078D7" },
        ]
    },
    {
        title: "پروژه صفحه اصلی سایت تاپ لرن",
        image: TopHome,
        link: "#",
        info: ` این پروژه با تیل ویند نوشته شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ با تیل ویند به صورت کاملا ریسپانسیو طراحی شده`,
        technologies: [
            { name: "JavaScript", icon: <JSIcon />, color: "#F7DF1E" },
            { name: "Tailwind CSS", icon: <TailwindIcon />, color: "#06B6D4" },
            { name: "HTML5", icon: <HTMLIcon />, color: "#E34F26" },
            { name: "CSS3", icon: <CSSIcon />, color: "#1572B6" },
            { name: "Responsive Design", icon: <ResponsiveIcon />, color: "#0078D7" },
        ]
    },

    {
        title: "    پروژه سایت ایبو ",
        image: Eboo,
        link: "https://sjd-bsbri.github.io/eboo",
        info: ` این پروژه با ریکت و متریال یو آی نوشته شده . از ویژگی این پروژه ، داشتن پنل ادمین هست که با وارد کردن رمز عبور ، امکان ورود به پنل ادمین وجود دارد `,
        technologies: [
            { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
            { name: "JavaScript", icon: <JSIcon />, color: "#F7DF1E" },
            { name: "Material UI", icon: <MUIIcon />, color: "#0081CB" },
            { name: "HTML5", icon: <HTMLIcon />, color: "#E34F26" },
            { name: "CSS3", icon: <CSSIcon />, color: "#1572B6" },
            { name: "UserPanel", icon: <GitIcon />, color: "#4CAF50" },
        ]
    },
  
    
];
