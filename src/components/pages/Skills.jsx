import { useState, useEffect } from "react";
import { devSkills } from "../../constants/skills";
import Skill from "./Skill";
const Skills = () => {
  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [git, setGit] = useState(0);
  const [laravel, setLaravel] = useState(0);
  const [mui, setMui] = useState(0);
  const [next, setNext] = useState(0);
  const [tailwind, setTailwind] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 55);
      });

      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });

      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 65);
      });

      setLaravel((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 20);
      });
      setMui((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });
      setNext((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 45);
      });
      setTailwind((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });

      setReactJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 55);
      });

      // setNodeJs((oldProgress) => {
      //   const diff = Math.random() * 10;
      //   return Math.min(oldProgress + diff, 86);
      // });

      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 40);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { htmlSkill, cssSkill, reactSkill, jsSkill, 
     gitSkill,laravelSkill,muiSkill,nextSkill,tailwindSkill } =
    devSkills;
  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={javascript}
      />

<Skill
        name={muiSkill.name}
        icon={muiSkill.icon}
        color={muiSkill.color}
        value={mui}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={reactJs}
      />

<Skill
        name={tailwindSkill.name}
        icon={tailwindSkill.icon}
        color={tailwindSkill.color}
        value={tailwind}
      />

<Skill
        name={nextSkill.name}
        icon={nextSkill.icon}
        color={nextSkill.color}
        value={next}
      />

     
      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        color={gitSkill.color}
        value={git}
      />

<Skill
        name={laravelSkill.name}
        icon={laravelSkill.icon}
        color={laravelSkill.color}
        value={laravel}
      />
    </>
  );
};
export default Skills;
