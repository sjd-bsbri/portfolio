import { Box, Typography } from "@mui/material";
import { FavoriteRounded, CopyrightRounded } from "@mui/icons-material";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarFooter = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        height: 100,
        mt: 15,
      }}
    >
      <Typography variant="subtitle2" color="text.primary">
        طراحی شده با{" "}
        <FavoriteRounded
          sx={{
            verticalAlign: "middle",
            color: "tomato",
            height: 20,
          }}
        />
      </Typography>

      <Typography variant="caption" color="text.primary" sx={{ mt: 2 }}>
       ساخته شده درسال ۱۴۰۳{" "}
        <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
      </Typography>
      <SocialMediaIcons />
    </Box>
  );
};

export default SidebarFooter;
