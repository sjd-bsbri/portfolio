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
          : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
        overflowY: "scroll",
        boxShadow: theme.palette.mode === "dark" 
          ? "0 15px 35px 0 rgba(0, 0, 0, 0.85)" 
          : "0 15px 35px 0 rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        borderRadius: 0,
        "&::-webkit-scrollbar": {
          width: "10px",
        },
        "&::-webkit-scrollbar-track": {
          background: theme.palette.mode === "dark" ? "#121212" : "#f1f1f1",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.mode === "dark" ? "#333" : "#bdbdbd",
          borderRadius: "10px",
          border: theme.palette.mode === "dark" ? "2px solid #121212" : "2px solid #f1f1f1",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.mode === "dark" ? "#555" : "#9e9e9e",
        },
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent sx={{ py: 4 }}>
        <CustomDivider
          bColor="primary.main"
          cColor="primary"
          icon={SchoolRounded}
          text="نمونه کارهای من"
          align="center"
        />

        <Grid container sx={{ mx: { xs: 1, sm: 3 }, mt: 4, mb: 2 }}>
          <ShowCourses loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Courses;
