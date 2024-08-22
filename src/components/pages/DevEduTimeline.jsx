import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";

import { SchoolRounded } from "@mui/icons-material";
import { Typography, Slide } from "@mui/material";
import { devEdu } from "../../constants/details";

const DevEduTimeline = ({ loading }) => {
  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
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
              <TimelineDot color="info" variant="outlined">
                <SchoolRounded color="info" />
              </TimelineDot>
              {index !== 3 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="text.primary">
                {item.year}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {item.cert}
              </Typography>
              <Typography variant="body2" color="text.primary">
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

export default DevEduTimeline;
