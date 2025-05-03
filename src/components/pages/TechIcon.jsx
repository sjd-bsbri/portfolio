import React from 'react';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGithub,
  FaCode,
  FaCreditCard,
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMui,
  SiRedux,
  SiPrisma,

  SiZod
} from 'react-icons/si';
import { GiBearFace } from "react-icons/gi";
  



import { MdAdminPanelSettings,MdPhonelink, MdVerified,MdOutlineDiamond } from 'react-icons/md';

const TechIcon = ({ tech, size = 24 }) => {
  const getIcon = () => {
    switch (tech.toLowerCase()) {
      case 'react':
        return <FaReact size={size} color="#61DAFB" />;
      case 'html':
      case 'html5':
        return <FaHtml5 size={size} color="#E34F26" />;
      case 'css':
      case 'css3':
        return <FaCss3Alt size={size} color="#1572B6" />;
      case 'javascript':
      case 'js':
        return <FaJsSquare size={size} color="#F7DF1E" />;
      case 'typescript':
      case 'ts':
        return <SiTypescript size={size} color="#3178C6" />;
      case 'nextjs':
      case 'next.js':
        return <SiNextdotjs size={size}  />;
      case 'tailwind':
      case 'tailwindcss':
        return <SiTailwindcss size={size} color="#06B6D4" />;
      case 'material-ui':
      case 'mui':
        return <SiMui  size={size} color="#007FFF" />;
      case 'redux':
        return <SiRedux size={size} color="#764ABC" />;
     
      case 'responsive':
        return <MdPhonelink size={size} color="#0098E6" />;
      case 'git':
      case 'github':
        return <FaGithub size={size} color="#181717" />;
      case 'user-panel':
      case 'user':
        return <MdAdminPanelSettings size={size} color="#FF5722" />;
      case 'prisma':
      case 'db':
        return <SiPrisma  size={size} color="#FFFFFF" />;
      case 'zarinpal':
      case 'payment':
        return <FaCreditCard size={size} color="#FFD700" />;
      case 'zod':
      case 'validation':
        return <SiZod size={size} color="#3068B7" />;
      case 'zustand':
      case 'state-management':
        return <GiBearFace size={size} color="#49443E" />;
      default:
        return <FaCode size={size} color="#607D8B" />;
    }
  };

  return getIcon();
};

export default TechIcon; 