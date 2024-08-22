import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import avatar from "../assets/avatar02.jpg";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { DevInfo, DevWorkCount, Skills } from "../components/pages";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import { CustomAvatar, CustomDivider } from "../components/common";

const About = ({ helmetTitle }) => {
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
        <title> {helmetTitle} </title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              align="right"
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              text=" توسعه دهنده و برنامه نویس وب"
            />

            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid
                xs={4}
                sm={4}
                md={3}
                lg={3}
                sx={{
                  mt: 3,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              >
                <DevWorkCount />
              </Grid>

              <Grid xs={12} sm={8} md={9} lg={9}>
                <DevInfo />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar avatar={avatar} fallback={"SB"} size={250} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              align="center"
              bColor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              text=" مهارت های من"
            />
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default About;
