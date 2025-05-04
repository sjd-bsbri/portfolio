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
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#f5f5f5",
        overflowY: "scroll",
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
