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
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Zoom,
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import LaunchIcon from '@mui/icons-material/Launch';
import EllipsisText from "react-ellipsis-text";
import Grid from "@mui/material/Unstable_Grid2";
import { courses } from "../../constants/courses";
import TechIcon from "./TechIcon";

const ShowCourses = ({ loading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {courses.map((course, index) => (
        <Grid key={course.id} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 3 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${course.id * 150}ms` : "0ms",
            }}
          >
            <Card
              sx={{ 
                maxWidth: 345, 
                margin: '0 auto',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'rgba(30, 41, 59, 0.8)' 
                  : 'rgba(255, 255, 255, 0.9)',
                backgroundImage: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(44, 55, 75, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 242, 245, 0.95) 100%)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 10px 20px rgba(0, 0, 0, 0.3)'
                  : '0 10px 20px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 15px 30px rgba(0, 0, 0, 0.4)'
                    : '0 15px 30px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <CardActionArea 
                component="a" 
                href={course.link}
                target="_blank"
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                }}
              >
                <Box sx={{ 
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                   
                    zIndex: 1
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={course.image}
                    alt={course.title}
                    sx={{ 
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                  <Typography 
                    variant="h6" 
                    component="div"
                    textAlign="left" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      color: theme.palette.mode === 'dark' ? '#fff' : '#1a202c',
                      mb: 1.5
                    }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'text.secondary'}
                    textAlign="left"
                    gutterBottom
                    sx={{ 
                      direction: "ltr",
                      lineHeight: 1.6 
                    }}
                  >
                    <EllipsisText text={course.info} length={100} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  p: 2,
                  pt: 1,
                  borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                }}
              >
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  target="_blank"
                  component="a"
                  href={course.link}
                  startIcon={<LaunchIcon   />}
                  sx={{
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 500,
                    boxShadow: 'none',
                    '&:hover': {
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  مشاهده پروژه
                </Button>
                
                <Tooltip
                  title={
                    <Box sx={{ p: 1 }}>
                      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                        تکنولوژی های استفاده شده:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {course.technologies.map((tech) => (
                          <Box 
                            key={tech} 
                            sx={{ 
                              display: 'flex', 
                              flexDirection: 'column', 
                              alignItems: 'center',
                              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255,255,255,0.8)',
                              borderRadius: '8px',
                              padding: '4px 8px',
                              backdropFilter: 'blur(5px)',
                            }}
                          >
                            <TechIcon tech={tech} size={24} />
                            <Typography variant="caption" sx={{ mt: 0.5 }}>
                              {tech}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  }
                  arrow
                  placement="top"
                  TransitionComponent={Zoom}
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 8px 32px rgba(0, 0, 0, 0.2)' 
                          : '0 8px 32px rgba(0, 0, 0, 0.1)',
                        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        color: theme.palette.text.primary,
                        p: 1.5,
                        maxWidth: 'none',
                        borderRadius: '12px',
                      }
                    },
                    arrow: {
                      sx: {
                        color: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.98)',
                      }
                    }
                  }}
                >
                  <IconButton 
                    size="medium" 
                    color="primary"
                    sx={{
                      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(66, 153, 225, 0.1)' : 'rgba(66, 153, 225, 0.08)',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(66, 153, 225, 0.2)' : 'rgba(66, 153, 225, 0.15)',
                      }
                    }}
                  >
                    <InfoIcon /> 
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};
export default ShowCourses;
