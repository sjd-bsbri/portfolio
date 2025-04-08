import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";

import { HomeRepairServiceRounded } from "@mui/icons-material";
import { Typography, Slide, useMediaQuery } from "@mui/material";
import { devEdu } from "../../constants/details";
import { useTheme } from "@emotion/react";

const DevExpTimeline = ({ loading }) => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Timeline position="right" sx={{ direction: "ltr", p: isDownMd ? 0 : 2 }}>
      {devEdu.map((item, index) => (
        <Slide
          key={index}
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 4}99ms` : "0ms",
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outlined">
                <HomeRepairServiceRounded color="warning" />
              </TimelineDot>
              {index !== 3 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant={isDownMd ? "caption" : "body2"} color="text.primary">
                {item.year}
              </Typography>
              <Typography variant={isDownMd ? "body2" : "body1"} color="text.primary">
                {item.cert}
              </Typography>
              <Typography variant={isDownMd ? "caption" : "body2"} color="text.primary">
                {item.major}
              </Typography>
              <Typography variant="caption" color="text.primary">
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevExpTimeline;
