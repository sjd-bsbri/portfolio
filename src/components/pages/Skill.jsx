import { useTheme } from "@emotion/react";
import {
  Divider,
  Chip,
  Box,
  Typography,
  LinearProgress,
  Badge,
  useMediaQuery,
} from "@mui/material";

const Skill = ({ name, icon, color, value }) => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Divider
        textAlign="right"
        sx={{ "&::before,&::after": { borderColor: `${color}.main` }, mt: 3 }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
          color={color}
          label={name}
          sx={{ color: "text.primary", p: 3 ,fontSize:isDownMd?"13px":"16.5"}}
        />
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35, mr: 1 }}>
          <Typography variant="body2" color="text.primary">
            <Badge
              variant="standard"
              badgeContent={`${Math.round(value)}%`}
              color={color}
            />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            color={color}
            value={value}
            sx={{ height: 10, borderRadius: 2 }}
          />
        </Box>
      </Box>
    </>
  );
};
export default Skill;
