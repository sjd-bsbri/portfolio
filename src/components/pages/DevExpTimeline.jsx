import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";

import { HomeRepairServiceRounded, BusinessCenterOutlined, PlaceOutlined, CalendarTodayOutlined } from "@mui/icons-material";
import { Typography, Slide, useMediaQuery, Paper, Box, Chip, Zoom } from "@mui/material";
import { devExp } from "../../constants/details";
import { useTheme } from "@emotion/react";

const DevExpTimeline = ({ loading }) => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Timeline position={isDownSm ? "right" : "alternate"} sx={{ direction: "ltr", p: isDownMd ? 1 : 2, my: 2 }}>
      {devExp.map((item, index) => (
        <Slide
          key={index}
          direction={index % 2 === 0 ? "right" : "left"}
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 4}99ms` : "0ms",
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <Zoom in={loading} style={{ transitionDelay: loading ? `${index + 5}50ms` : "0ms" }}>
                <TimelineDot 
                  color="warning" 
                  variant="outlined"
                  sx={{ 
                    p: 1.5,
                    boxShadow: '0 0 10px rgba(255, 152, 0, 0.4)',
                    borderWidth: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 0 15px rgba(255, 152, 0, 0.7)',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <HomeRepairServiceRounded color="warning" fontSize={isDownSm ? "small" : "medium"} />
                </TimelineDot>
              </Zoom>
              {index !== devExp.length - 1 ? (
                <TimelineConnector 
                  sx={{ 
                    bgcolor: 'warning.light', 
                    width: '2px',
                    boxShadow: '0 0 8px rgba(255, 152, 0, 0.2)'
                  }} 
                />
              ) : null}
            </TimelineSeparator>
            <TimelineContent sx={{ py: 1, px: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  p: isDownSm ? 1.5 : 2.5,
                  bgcolor: theme.palette.mode === 'dark' 
                    ? 'rgba(40, 35, 25, 0.9)' 
                    : 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 152, 0, 0.3)' : 'rgba(255, 152, 0, 0.15)'}`,
                  '&:hover': {
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 8px 16px rgba(0, 0, 0, 0.5)' 
                      : '0 8px 16px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-3px)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                  <Chip 
                    size={isDownSm ? "small" : "medium"}
                    label={item.year} 
                    color="warning" 
                    variant="outlined"
                    icon={<CalendarTodayOutlined fontSize="small" />}
                    sx={{ 
                      fontWeight: 'bold',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                    }}
                  />
                </Box>
                
                <Typography 
                  variant={isDownMd ? "body2" : "body1"} 
                  color="text.primary"
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <BusinessCenterOutlined 
                    color="warning" 
                    fontSize="small" 
                    sx={{ opacity: 0.8 }}
                  />
                  {item.cert}
                </Typography>
                
                <Typography 
                  variant={isDownMd ? "caption" : "body2"} 
                  color="text.primary"
                  sx={{ 
                    mb: 0.5,
                    fontWeight: 500
                  }}
                >
                  {item.major}
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mt: 1,
                  pt: 1,
                  borderTop: `1px dashed ${theme.palette.mode === 'dark' ? 'rgba(255, 152, 0, 0.2)' : 'rgba(255, 152, 0, 0.1)'}`,
                }}>
                  <PlaceOutlined fontSize="small" color="action" sx={{ mr: 0.5, opacity: 0.7 }}/>
                  <Typography 
                    variant="caption" 
                    color="text.secondary"
                    sx={{ fontStyle: 'italic' }}
                  >
                    {item.place}
                  </Typography>
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevExpTimeline;
