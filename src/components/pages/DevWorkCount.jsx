import { Typography, Chip, Box, Tooltip } from "@mui/material";
import CountUp from "react-countup";
import { devWorkInfo } from "../../constants/details";

const DevWorkCount = () => {
  return (
    <>
      {devWorkInfo.map((item, index) => (
        <Box key={index} component="div" sx={{ width: 1, mb: 1 }}>
          <Tooltip title={item.tooltipTitle} placement="right" arrow>
            <Chip
              icon={item.icon}
              label={
                <Typography color="text.primary" variant="body1">
                  <CountUp start={0} end={item.total} duration={2} />
                </Typography>
              }
              sx={{ p: 2, backgroundColor: item.color, width: 1 }}
            />
          </Tooltip>
        </Box>
      ))}
    </>
  );
};

export default DevWorkCount;
