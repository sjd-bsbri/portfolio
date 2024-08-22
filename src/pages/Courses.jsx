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
        backgroundColor: theme.palette.mode === "dark" ? "black" : "whitesmoke",
        overflowY: "scroll",
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
