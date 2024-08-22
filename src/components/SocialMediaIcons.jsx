import { GitHub, Instagram, Telegram, WhatsApp } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialMediaIcons = () => {
  return (
    <Box component="div" sx={{ margin: "20px auto", textAlign: "center" }}>
      <IconButton aria-label="Github">
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ color: "gray" }} />
        </a>
      </IconButton>

      <IconButton aria-label="Instagram">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram sx={{ color: "gray" }} />
        </a>
      </IconButton>

      <IconButton aria-label="Telegram">
        <a
          href="https://www.telegram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telegram sx={{ color: "gray" }} />
        </a>
      </IconButton>

      <IconButton aria-label="WhatsApp">
        <a
          href="https://www.whatsApp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp sx={{ color: "gray" }} />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
