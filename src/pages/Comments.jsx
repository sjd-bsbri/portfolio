import { Card, CardContent, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { ForumRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { CustomDivider } from "../components/common/";
import { CommentsSlider } from "../components/pages";

const Comments = ({ helmetTitle }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundImage: theme.palette.mode === "dark" 
          ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
          : "linear-gradient(135deg, #f0f2f5 0%, #e6e9f0 50%, #eef1f5 100%)",
        overflowY: "scroll",
        boxShadow: theme.palette.mode === "dark" 
          ? "0 10px 30px 0 rgba(0, 0, 0, 0.8)" 
          : "0 10px 30px 0 rgba(0, 0, 0, 0.15)",
        borderRadius: 0,
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: theme.palette.mode === "dark" ? "#0a0a0a" : "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.mode === "dark" ? "#333" : "#888",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.mode === "dark" ? "#555" : "#555",
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          align="center"
          bColor={theme.palette.primary.main}
          cColor="primary"
          icon={<ForumRounded />}
          text="نظرات همکاران و دوستان"
        />

        <Box sx={{ my: 5, textAlign: 'center' }}>
          <Typography 
            variant="h5" 
            component="h2" 
            color="primary"
            gutterBottom
            fontWeight="bold"
          >
            آنچه دیگران درباره من می‌گویند
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              maxWidth: 800, 
              mx: 'auto', 
              mb: 6,
              px: 2,
              lineHeight: 1.8
            }}
          >
            بازخوردهای همکاران و دوستانی که در پروژه‌های مختلف با آنها همکاری داشته‌ام. 
            من همواره تلاش می‌کنم با ارائه کار با کیفیت، تعهد به زمان‌بندی پروژه و همکاری مؤثر در تیم، تجربه‌ای مثبت برای همکارانم ایجاد کنم
          </Typography>
        </Box>

        <CommentsSlider />
      </CardContent>
    </Card>
  );
};

export default Comments;
