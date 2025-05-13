import { Avatar, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomAvatar = ({ avatar, size, fallback }) => {
    const theme = useTheme();
    
    return (
        <Box
            sx={{
                position: "relative",
                display: {
                    xs: "none",
                    sm: "none", 
                    md: "block"
                },
                m: 2
            }}
        >
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: size,
                    width: size,
                    borderRadius: "10%",
                    boxShadow: theme.palette.mode === "dark" 
                        ? "0 12px 28px rgba(0,0,0,0.3)" 
                        : "0 12px 28px rgba(0,0,0,0.12)",
                    border: `4px solid ${theme.palette.background.paper}`,
                    position: "relative",
                    zIndex: 1,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: theme.palette.mode === "dark" 
                            ? "0 16px 35px rgba(0,0,0,0.4)" 
                            : "0 16px 35px rgba(0,0,0,0.18)",
                    }
                }}
            >
                {fallback}
            </Avatar>
        </Box>
    );
};

export default CustomAvatar;
