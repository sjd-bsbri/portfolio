import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";

import { SchoolRounded, WorkspacePremiumOutlined, PlaceOutlined } from "@mui/icons-material";
import { Typography, Slide, useMediaQuery, Paper, Box, Chip, Zoom } from "@mui/material";
import { devEdu } from "../../constants/details";
import { useTheme } from "@emotion/react";

const DevEduTimeline = ({ loading }) => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Timeline position={isDownSm ? "right" : "alternate"} sx={{ direction: "ltr", p: isDownMd ? 1 : 2, my: 2 }}>
      {devEdu.map((item, index) => (
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
                  color="info" 
                  variant="outlined"
                  sx={{ 
                    p: 1.5,
                    boxShadow: '0 0 10px rgba(3, 169, 244, 0.4)',
                    borderWidth: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 0 15px rgba(3, 169, 244, 0.7)',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <SchoolRounded color="info" fontSize={isDownSm ? "small" : "medium"} />
                </TimelineDot>
              </Zoom>
              {index !== 3 ? (
                <TimelineConnector 
                  sx={{ 
                    bgcolor: 'info.light', 
                    width: '2px',
                    boxShadow: '0 0 8px rgba(3, 169, 244, 0.2)'
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
                    ? 'rgba(30, 40, 60, 0.9)' 
                    : 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(3, 169, 244, 0.3)' : 'rgba(3, 169, 244, 0.15)'}`,
                  '&:hover': {
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 8px 16px rgba(0, 0, 0, 0.5)' 
                      : '0 8px 16px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-3px)'
                  }
                }}
              >
                <Chip 
                  size={isDownSm ? "small" : "medium"}
                  label={item.year} 
                  color="info" 
                  variant="outlined"
                  sx={{ 
                    mb: 1,
                    fontWeight: 'bold',
                    boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                  }}
                />
                
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
                  <WorkspacePremiumOutlined 
                    color="info" 
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
                
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
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

export default DevEduTimeline;
