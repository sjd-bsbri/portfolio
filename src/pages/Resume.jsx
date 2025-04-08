import { Card, CardContent } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import {
  HomeRepairServiceRounded,
  SchoolRounded,
  SettingsEthernetRounded,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import CustomDivider from "../components/common/CustomDivider";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";

const Resume = ({ helmetTitle }) => {
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
          align="center"
          bColor="error.main"
          icon={<SettingsEthernetRounded />}
          cColor="error"
          text="بایوگرافی من"
        />

        <Grid container sx={{ mt: 4 }}>
          <Grid xs={12} sm={12} md={6}>
            <CustomDivider
              align="center"
              bColor="warning.main"
              icon={<HomeRepairServiceRounded />}
              cColor="warning"
              text="تجربیات"
            />
            <DevExpTimeline loading={loading} />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <CustomDivider
              align="center"
              bColor="info.main"
              icon={<SchoolRounded />}
              cColor="info"
              text="تحصیلات"
            />
            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
