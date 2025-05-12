import { useState, useEffect } from "react";

import { Typography, Card, CardContent, Slide, Box, Paper, Container, Fade } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle, EmailRounded, LocationOnRounded, PhoneRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { CustomDivider } from "../components/common/";
import worldMap from "../assets/map.svg";
import { ContactForm } from "../components/pages";
import { useTheme } from "@mui/material/styles";

const Contact = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Container maxWidth="lg">
          <Fade in={loading} timeout={800}>
            <Box>
              <Box sx={{ textAlign: "center", mb: 5 }}>
                <CustomDivider
                  align="center"
                  bColor="warning.main"
                  cColor="warning"
                  icon={<AccountCircle />}
                  text="ارتباط با من"
                />
                
              </Box>

              <Grid container spacing={4} alignItems="stretch">
                <Slide
                  direction="right"
                  in={loading}
                  style={{
                    transitionDelay: loading ? "300ms" : "0ms",
                  }}
                >
                  <Grid xs={12} sm={12} md={8}>
                    <Paper
                      elevation={6}
                      sx={{
                        p: 3,
                        height: "100%",
                        borderRadius: 2,
                        background: theme.palette.mode === "dark" 
                          ? 'rgba(26, 32, 53, 0.7)' 
                          : 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: theme.palette.mode === "dark"
                          ? '0 10px 30px rgba(0, 0, 0, 0.25)'
                          : '0 10px 30px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: theme.palette.mode === "dark"
                            ? '0 15px 35px rgba(0, 0, 0, 0.3)'
                            : '0 15px 35px rgba(0, 0, 0, 0.15)',
                        }
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        gutterBottom
                        sx={{ 
                          color: theme.palette.mode === "dark" ? "warning.light" : "warning.dark",

                          pb: 2, 
                          borderBottom: `1px solid ${theme.palette.mode === "dark" ? 'rgba(255, 167, 38, 0.2)' : 'rgba(255, 167, 38, 0.1)'}`,
                          fontWeight: "bold",
                          textAlign: "center"
                        }}
                      >
                        ارسال پیام
                      </Typography>
                      <ContactForm />
                    </Paper>
                  </Grid>
                </Slide>
                
                <Slide
                  direction="left"
                  in={loading}
                  style={{
                    transitionDelay: loading ? "500ms" : "0ms",
                  }}
                >
                  <Grid
                    xs={12}
                    sm={12}
                    md={4}
                  >
                    <Paper
                      sx={{
                        
                        height: "100%",
                        p: 3,
                        textAlign: "center",
                        backgroundImage: `url(${worldMap})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        borderRadius: 2,
                        position: "relative",
                        overflow: "hidden",
                        background: theme.palette.mode === "dark" 
                          ? 'rgba(26, 32, 53, 0.85)' 
                          : 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: theme.palette.mode === "dark"
                          ? '0 10px 30px rgba(0, 0, 0, 0.25)'
                          : '0 10px 30px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: theme.palette.mode === "dark"
                            ? '0 15px 35px rgba(0, 0, 0, 0.3)'
                            : '0 15px 35px rgba(0, 0, 0, 0.15)',
                        }
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: theme.palette.mode === "dark" ? "warning.light" : "warning.dark",
                          mb: 4,
                        }}
                      >
                        بیا در مورد همه چیز باهم صحبت کنیم
                      </Typography>
                      
                      <Box sx={{ 
                        display: "flex", 
                        flexDirection: "column",
                        gap: 3,
                        alignItems: "flex-start",
                        mt: 4
                      }}>
                        <Box sx={{ 
                          display: "flex", 
                          alignItems: "center",
                          gap: 2
                        }}>
                          <Box sx={{ 
                            p: 1.5, 
                            borderRadius: "50%",
                            bgcolor: theme.palette.mode === "dark" ? "rgba(255, 167, 38, 0.1)" : "rgba(255, 167, 38, 0.1)",
                            display: "flex"
                          }}>
                            <EmailRounded color="warning" />
                          </Box>
                          <Box sx={{ textAlign: "left" }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              ایمیل
                            </Typography>
                            <Typography variant="body1" sx={{ direction: "ltr", fontWeight: "medium" }}>
                              <a
                                href="mailto:abccnn09@gmail.com"
                                style={{
                                  color: theme.palette.mode === "dark" ? theme.palette.warning.light : theme.palette.warning.dark,
                                  textDecoration: "none",
                                }}
                              >
                                abccnn09@gmail.com
                              </a>
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Box sx={{ 
                          display: "flex", 
                          alignItems: "center",
                          gap: 2
                        }}>
                          <Box sx={{ 
                            p: 1.5, 
                            borderRadius: "50%",
                            bgcolor: theme.palette.mode === "dark" ? "rgba(255, 167, 38, 0.1)" : "rgba(255, 167, 38, 0.1)",
                            display: "flex"
                          }}>
                            <PhoneRounded color="warning" />
                          </Box>
                          <Box sx={{ textAlign: "left" }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              تلفن تماس
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                              <a
                                href="tel:+989123456789"
                                style={{
                                  color: theme.palette.mode === "dark" ? theme.palette.warning.light : theme.palette.warning.dark,
                                  textDecoration: "none",
                                }}
                              >
                                0912-345-6789
                              </a>
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Box sx={{ 
                          display: "flex", 
                          alignItems: "center",
                          gap: 2
                        }}>
                          <Box sx={{ 
                            p: 1.5, 
                            borderRadius: "50%",
                            bgcolor: theme.palette.mode === "dark" ? "rgba(255, 167, 38, 0.1)" : "rgba(255, 167, 38, 0.1)",
                            display: "flex"
                          }}>
                            <LocationOnRounded color="warning" />
                          </Box>
                          <Box sx={{ textAlign: "left" }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              موقعیت
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: "medium",                                  color: theme.palette.mode === "dark" ? theme.palette.warning.light : theme.palette.warning.dark,
 }}>
                              مشهد، ایران
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                </Slide>
              </Grid>
            </Box>
          </Fade>
        </Container>
      </CardContent>
    </Card>
  );
};

export default Contact;
