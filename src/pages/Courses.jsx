import { Card, CardContent } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { CustomDivider } from "../components/common/";
import { ShowCourses } from "../components/pages";

const Courses = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);
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
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="primary.main"
          cColor="primary"
          icon={SchoolRounded}
          text="نمونه کارهای من"
          align="center"
        />

        <Grid container sx={{ mx: 3, mt: 3 }}>
          <ShowCourses loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Courses;
