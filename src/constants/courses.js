import {
    Eboo, Portfolio, Next, Shop, TopBlog, TopHome, DomainManagement, WeatherApp, nextCrach, movieApp, quizOnline, musicianPortfolio
} from "../assets/courses";

export const courses = [


    {
        id: 10,
        title: "پروژه فیلم نت ",
        image: movieApp,
        link: "https://sjd-bsbri.github.io/movie-app/",
        info: ` این پروژه با نکست، ریکت، تایپ اسکریپت و تیلویند نوشته شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ به صورت کاملا ریسپانسیو طراحی شده`,
        technologies: ["nextjs", "react", "typescript", "tailwind", "zod", "html", "css", "responsive"]
    },



    {
        id: 2,
        title: " سایت شخصی خودم ",
        image: Portfolio,
        link: "https://sjd-bsbri.github.io/portfolio",
        info: `این پروژه با ریکت و متریال یو آی نوشته شده . در این پروژه از بسیاری از کامپوننت های متریال یو آی استفاده شده و امکان اعتبارسنجی در بخش فرم ها نیز وجود دارد`,
        technologies: ["react", "material-ui", "javascript", "html", "responsive"]
    },
    {
        id: 3,
        title: "   پروژه پلتفرم مشارکت جمعی هادی",
        image: Next,
        link: "https://h-quchan.ir/",
        info: `این پروژه با نکست، ریکت، تایپ اسکریپت و تیلویند نوشته شده. این پروژه دارای درگاه پرداخت زرین پال و کاملا ریسپانسیو است`,
        technologies: ["nextjs", "react", "typescript", "tailwind", "zarinpal", "zod", "zustand", "prisma", "responsive"]
    },


    {
        id: 5,
        title: "پروژه صفحه اصلی سایت تاپ لرن",
        image: TopHome,
        link: "https://sjd-bsbri.github.io/toplearn-home/",
        info: ` این پروژه با ریکت و تیلویند نوشته شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ  به صورت کاملا ریسپانسیو طراحی شده`,
        technologies: ["react", "tailwind", "html", "css", "responsive"]
    },

    {
        id: 12,
        title: "    پروژه  پورتفولیو ",
        image: musicianPortfolio,
        link: "https://ehsan-basabri-musician.vercel.app/",
        info: ` این پروژه با نکست، ریکت، تایپ اسکریپت و تیلویند نوشته شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ به صورت کاملا ریسپانسیو طراحی شده `,
        technologies: ["nextjs", "react", "typescript", "tailwind", "html", "css", "responsive"]
    },

    {
        id: 9,
        title: "پروژه  تیچینگ مدیا ",
        image: nextCrach,
        link: "https://sjd-bsbri.github.io/next-crach/",
        info: ` این پروژه با نکست و ریکت نوشته شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ به صورت کاملا ریسپانسیو طراحی شده`,
        technologies: ["nextjs", "react", "html", "css", "responsive"]
    },
    {
        id: 6,
        title: "    پروژه سایت ایبو ",
        image: Eboo,
        link: "https://sjd-bsbri.github.io/eboo",
        info: ` این پروژه با ریکت و متریال یو آی نوشته شده . از ویژگی این پروژه ، داشتن پنل کاربری هست که با وارد کردن رمز عبور ، امکان ورود به پنل کاربری وجود دارد `,
        technologies: ["react", "material-ui", "javascript", "user-panel", "responsive"]
    },



    {
        id: 8,
        title: "پروژه  هواشناسی آنلاین",
        image: WeatherApp,
        link: "https://sjd-bsbri.github.io/Weather-App",
        info: ` این پروژه با ریکت و تیلویند نوشته شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ به صورت کاملا ریسپانسیو طراحی شده`,
        technologies: ["react", "tailwind", "html", "css", "responsive"]
    },



    {
        id: 1,
        title: "  پروژه فروشگاه   ",
        image: Shop,
        link: "https://sjd-bsbri.github.io/shop",
        info: " این پروژه با ریکت نوشته شده . امکان اضافه کردن ، حذف و فیلتر محصولات به سبد خرید در این پروژه وجود دارد",
        technologies: ["react", "javascript", "html", "css", "responsive"]
    },


    {
        id: 4,
        title: "پروژه بلاگ سایت تاپ لرن  ",
        image: TopBlog,
        link: "https://sjd-bsbri.github.io/toplearn-blog",
        info: `   در این پروژه از ریکت و متریال یو آی استفاده شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ با متریال یو آی به صورت کاملا ریسپانسیو طراحی شده`,
        technologies: ["react", "material-ui", "javascript", "user-panel", "authentication", "chat", "responsive"]
    },



    {
        id: 7,
        title: "پروژه مدیریت دامنه",
        image: DomainManagement,
        link: "https://sjd-bsbri.github.io/domain-management/",
        info: ` این پروژه با ریکت، تایپ اسکریپت، ریداکس، انت دیزاین و تیلویند نوشته شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ به صورت کاملا ریسپانسیو طراحی شده`,
        technologies: ["react", "typescript", "redux", "antdesign", "tailwind", "html", "css", "responsive"]
    },

    {
        id: 11,
        title: "پروژه آزمون آنلاین",
        image: quizOnline,
        link: "https://sjd-bsbri.github.io/quiz-app-NEXT/",
        info: ` این پروژه با نکست، ریکت، تایپ اسکریپت، زاستند و تیلویند نوشته شده و در سایزهای مختلف صفحه نمایش مثل موبایل ، تبلت و لپتاپ به صورت کاملا ریسپانسیو طراحی شده`,
        technologies: ["nextjs", "react", "typescript", "zustand", "tailwind", "html", "css", "responsive"]
    },



];
