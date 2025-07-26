import { Box, Typography, useTheme, keyframes, Grid, Divider } from "@mui/material";
import { Helmet } from "react-helmet-async";

import { DevInfo, Skills } from "../components/pages";
import { CustomAvatar } from "../components/common";
import avatar from "../assets/avatar02.jpg";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedSection = ({ children, delay = 0, sx }) => (
  <Box sx={{
    ...sx,
    opacity: 0,
    animation: `${fadeInUp} 0.8s ease-out forwards`,
    animationDelay: `${delay}s`,
  }}>
    {children}
  </Box>
);

const About = ({ helmetTitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: theme.palette.mode === "dark" 
          ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
          : "linear-gradient(135deg, #f0f2f5 0%, #e6e9f0 50%, #eef1f5 100%)",
        color: 'text.primary',
        overflowY: "auto",
        "&::-webkit-scrollbar": { width: '6px' },
        "&::-webkit-scrollbar-track": { background: 'transparent' },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.mode === 'dark' ? '#444' : '#ccc',
          borderRadius: '3px'
        },
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" />
        <style>{`body { font-family: 'Vazirmatn', sans-serif !important; }`}</style>
      </Helmet>

      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: { xs: 3, md: 6 } }}>

        <Grid container spacing={6} alignItems="center" direction={{xs: 'column-reverse', md: 'row'}}>
          <Grid item xs={12} md={5}>
             <AnimatedSection delay={0.2}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <CustomAvatar 
                        avatar={avatar} 
                        fallback={"SB"} 
                        size={280}
                        sx={{ boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}
                    />
                </Box>
             </AnimatedSection>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <AnimatedSection delay={0}>
              <DevInfo />
            </AnimatedSection>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 8 }}>
            <AnimatedSection delay={0.4}>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, textAlign: 'center' }}>
                  مهارت‌ها  
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Skills column={1} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Skills column={2} />
                    </Grid>
                </Grid>
            </AnimatedSection>
        </Box>
        
      </Box>
    </Box>
  );
};

export default About;





