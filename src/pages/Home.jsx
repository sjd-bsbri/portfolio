import { useEffect, useRef, useCallback, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import TextTransition, { presets } from "react-text-transition";

import { links } from "../constants/Particles";
import bg02 from "../assets/bg02.jpeg";

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);

  const strings = [
    " برنامه نویس هستم",
    "🧑🏻‍💻 توسعه دهنده فرانت اند هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["سجاد باصبری"],
      typeSpeed: 90,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(stringsTransition);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg02})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title> {helmetTitle} </title>
      </Helmet>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />
      <Box sx={{ display: "flex" }} component="div">
        <Typography variant="h3" color="green">
          {"{{"}
        </Typography>
        <Typography ref={nameEl} variant="h3" color="gold"></Typography>
        <Typography variant="h3" color="green">
          {"}}"}
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }} component="div">
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
            color="#000"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "lightgreen",
              mt: 4,
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography variant="h4" color="#000" sx={{ mt: 4, mr: 1 }}>
          من 
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
