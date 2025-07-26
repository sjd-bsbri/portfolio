import { useState, useEffect } from "react";
import { devSkills } from "../../constants/skills";
import Skill from "./Skill";

const Skills = ({ column }) => {
  const [skills, setSkills] = useState({
    javascript: 0, html: 0, css: 0, reactJs: 0, git: 0,
    laravel: 0, mui: 0, next: 0, tailwind: 0, typescript: 0,zod:0,zustand:0
  });

  useEffect(() => {
    const targets = {
      javascript: 70, html: 80, css: 75, reactJs: 65, git: 55,
      laravel: 40, mui: 75, next: 60, tailwind: 70, typescript: 50,zustand:45,zod:60
    };

    const timer = setInterval(() => {
      setSkills(prevSkills => {
        let newSkills = {};
        for (const key in prevSkills) {
          const diff = Math.random() * 10;
          newSkills[key] = Math.min(prevSkills[key] + diff, targets[key]);
        }
        return newSkills;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const allSkills = [
    { id: 'react', data: devSkills.reactSkill, value: skills.reactJs },
    { id: 'html', data: devSkills.htmlSkill, value: skills.html },
    { id: 'css', data: devSkills.cssSkill, value: skills.css },
    { id: 'js', data: devSkills.jsSkill, value: skills.javascript },
    { id: 'mui', data: devSkills.muiSkill, value: skills.mui },
    { id: 'typescript', data: devSkills.typescriptSkill, value: skills.typescript },
    { id: 'next', data: devSkills.nextSkill, value: skills.next },
    { id: 'tailwind', data: devSkills.tailwindSkill, value: skills.tailwind },
    { id: 'git', data: devSkills.gitSkill, value: skills.git },
    { id: 'zod', data: devSkills.zodSkill, value: skills.zod },
    { id: 'zustand', data: devSkills.zustandSkill, value: skills.zustand },
    
    { id: 'laravel', data: devSkills.laravelSkill, value: skills.laravel },
  ];

  const midIndex = Math.ceil(allSkills.length / 2);
  const skillsToRender = column === 1 
    ? allSkills.slice(0, midIndex) 
    : allSkills.slice(midIndex);

  return (
    <>
      {skillsToRender.map(skill => (
        <Skill
          key={skill.id}
          name={skill.data.name}
          icon={skill.data.icon}
          color={skill.data.color}
          value={skill.value}
        />
      ))}
    </>
  );
};

export default Skills;