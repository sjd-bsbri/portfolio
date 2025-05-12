import { Card, CardContent, Box, Container, Typography, Fade, Divider, useMediaQuery } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import {
  HomeRepairServiceRounded,
  SchoolRounded,
  SettingsEthernetRounded,
  Person,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import CustomDivider from "../components/common/CustomDivider";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";

const Resume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundImage: theme.palette.mode === "dark" 
          ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
          : "linear-gradient(135deg, #f0f2f5 0%, #e6e9f0 50%, #eef1f5 100%)",
        overflowY: "scroll",
        boxShadow: theme.palette.mode === "dark" 
          ? "0 10px 30px 0 rgba(0, 0, 0, 0.8)" 
          : "0 10px 30px 0 rgba(0, 0, 0, 0.15)",
        borderRadius: 0,
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: theme.palette.mode === "dark" ? "#0a0a0a" : "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.mode === "dark" ? "#333" : "#888",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.mode === "dark" ? "#555" : "#555",
        },
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Fade in={loading} timeout={1000}>
          <Box>
            <Container maxWidth="lg" sx={{ py: 4 }}>
              <CustomDivider
                align="center"
                bColor="error.main"
                icon={<Person />}
                cColor="error"
                text="بایوگرافی من"
              />
            
              <Grid container spacing={isMobile ? 4 : 6} sx={{ mt: 4 }}>
                <Grid xs={12} sm={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ 
                    flex: 1, 
                    p: 3, 
                    borderRadius: 4,
                    background: theme.palette.mode === "dark" 
                      ? 'rgba(26, 32, 53, 0.7)' 
                      : 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: theme.palette.mode === "dark"
                      ? '0 10px 30px rgba(0, 0, 0, 0.25)'
                      : '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === "dark"
                        ? '0 15px 35px rgba(0, 0, 0, 0.3)'
                        : '0 15px 35px rgba(0, 0, 0, 0.15)',
                    }
                  }}>
                    <CustomDivider
                      align="center"
                      bColor="warning.main"
                      icon={<HomeRepairServiceRounded />}
                      cColor="warning"
                      text="تجربیات"
                    />
                    <DevExpTimeline loading={loading} />
                  </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ 
                    flex: 1, 
                    p: 3, 
                    borderRadius: 4,
                    background: theme.palette.mode === "dark" 
                      ? 'rgba(26, 32, 53, 0.7)' 
                      : 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: theme.palette.mode === "dark"
                      ? '0 10px 30px rgba(0, 0, 0, 0.25)'
                      : '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === "dark"
                        ? '0 15px 35px rgba(0, 0, 0, 0.3)'
                        : '0 15px 35px rgba(0, 0, 0, 0.15)',
                    }
                  }}>
                    <CustomDivider
                      align="center"
                      bColor="info.main"
                      icon={<SchoolRounded />}
                      cColor="info"
                      text="تحصیلات"
                    />
                    <DevEduTimeline loading={loading} />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Fade>
      </CardContent>
    </Card>
  );
};

export default Resume;
