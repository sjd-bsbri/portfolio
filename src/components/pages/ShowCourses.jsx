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
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import EllipsisText from "react-ellipsis-text";
import Grid from "@mui/material/Unstable_Grid2";
import { courses } from "../../constants/courses";
import TechIcon from "./TechIcon";

const ShowCourses = ({ loading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {courses.map((course) => (
        <Grid key={course.id} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${course.id + 3}99ms` : "0ms",
            }}
          >
            <Card
             
             sx={{ 
                maxWidth: 345, 
                backgroundColor: "steelblue",
                position: 'relative',
                
                
              }}>
              <CardActionArea 
                component="a" 
                href={course.link}
                target="_blank"
              >
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
                    <EllipsisText text={course.info} length={90} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                variant="outlined"
                  href={course.link}
                  size="small"
                  color="primary"
                  target="_blank"
                  component="a"
                >
                   مشاهده پروژه
                </Button>
                
                {!isMobile && (
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
                                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255,255,255,0.8)',
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
                    componentsProps={{
                      tooltip: {
                        sx: {
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.95)',
                          backdropFilter: 'blur(8px)',
                          boxShadow: theme.palette.mode === 'dark' 
                            ? '0 8px 32px rgba(0, 0, 0, 0.2)' 
                            : '0 8px 32px rgba(0, 0, 0, 0.1)',
                          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                          color: theme.palette.text.primary,
                          p: 1,
                          maxWidth: 'none',
                          borderRadius: '12px',
                        }
                      },
                      arrow: {
                        sx: {
                          color: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.95)',
                        }
                      }
                    }}
                    sx={{ 
                      '& .MuiTooltip-tooltip': { 
                        backgroundColor: 'transparent',
                      }
                    }}
                  >
                    <IconButton size="small" color="primary">
                      <InfoIcon /> 
                    </IconButton>
                  </Tooltip>
                )}
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};
export default ShowCourses;
