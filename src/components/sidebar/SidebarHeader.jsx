import { Typography } from "@mui/material";

import avatar from "../../assets/avatar.jpg";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import { useState } from "react";
import ThemeActionButton from "../ThemeActionButton";
import { CustomAvatar } from "../common";
const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={avatar} size={200} fallback="SB" />

      <Typography variant="h6" color="pink">
        <Typography variant="caption" color="skyblue">
          {" {{ "}
        </Typography>
        <RandomReveal
          isPlaying
          duration={3}
          characterSet={alphabetPersian}
          characters="سجاد باصبری"
          onComplete={() => setStart(true)}
        />
        <Typography variant="caption" color="skyblue">
          {" }} "}
        </Typography>
      </Typography>
      {start && (
        <Typography variant="caption" color="gray">
          <Typography variant="caption" color="crimson">
            {" {{ "}
          </Typography>
          <RandomReveal
            isPlaying
            duration={3}
            characterSet={alphabetPersian}
            characters="برنامه نویس فرانت اند"
          />
          <Typography variant="caption" color="crimson">
            {" }} "}
          </Typography>
        </Typography>
      )}
    </>
  );
};

export default SidebarHeader;
