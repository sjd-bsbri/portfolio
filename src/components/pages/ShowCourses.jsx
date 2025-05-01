import {
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Typography,
  Slide,
  Button,
  Tooltip,
  Paper,
  Box,
  useTheme,
  alpha,
} from "@mui/material";
import EllipsisText from "react-ellipsis-text";
import Grid from "@mui/material/Unstable_Grid2";
import { courses } from "../../constants/courses";
import { useState } from "react";

// Custom tooltip component with glass effect
const GlassTooltip = ({ children, technologies }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  
  if (!technologies || technologies.length === 0) return children;
  
  return (
    <Tooltip
      title={
        <Paper
          sx={{
            padding: 2,
            backgroundColor: alpha(isDarkMode ? '#242424' : '#fff', 0.85),
            backdropFilter: 'blur(10px)',
            borderRadius: 2,
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            minWidth: {xs: '200px', sm: '250px'},
            direction: 'rtl', // RTL support
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            تکنولوژی های استفاده شده:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'flex-start' }}>
            {technologies.map((tech, i) => (
              <Box 
                key={i} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 1,
                  px: 1.5,
                  py: 0.8,
                  borderRadius: 2,
                  backgroundColor: alpha(tech.color || (isDarkMode ? '#ffffff' : '#000000'), 0.1),
                  border: `1px solid ${alpha(tech.color || (isDarkMode ? '#ffffff' : '#000000'), 0.2)}`,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: alpha(tech.color || (isDarkMode ? '#ffffff' : '#000000'), 0.2),
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                {tech.icon && (
                  <Box sx={{ ml: 0.7, display: 'flex', alignItems: 'center' }}>
                    {tech.icon}
                  </Box>
                )}
                <Typography variant="body2">{tech.name}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      }
      arrow
      placement="bottom"
      TransitionComponent={Slide}
      enterDelay={400}
      leaveDelay={200}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'transparent',
            maxWidth: {xs: '280px', sm: '350px', md: '450px'},
            '& .MuiTooltip-arrow': {
              color: alpha(isDarkMode ? '#242424' : '#fff', 0.85),
            },
          }
        }
      }}
    >
      {children}
    </Tooltip>
  );
};

const ShowCourses = ({ loading }) => {
  return (
    <>
      {courses.map((course, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <GlassTooltip technologies={course.technologies}>
              <Card 
                sx={{ 
                  maxWidth: 345, 
                  backgroundColor: "steelblue",
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    width="200"
                    image={course.image}
                    alt={course.title}
                  />
                  <CardContent>
                    <Typography variant="body1" textAlign="left" gutterBottom>
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="left"
                      gutterBottom
                      sx={{ direction: "ltr" }}
                    >
                      <EllipsisText text={course.info} length={100} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    href={course.link}
                    size="small"
                    color="primary"
                    target="_blank"
                  >
                     مشاهده پروژه
                  </Button>
                </CardActions>
              </Card>
            </GlassTooltip>
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default ShowCourses;
