import { Card, CardContent } from "@mui/material";
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
        backgroundColor: theme.palette.mode === "dark" ? "black" : "whitesmoke",
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
          bColor="success.main"
          cColor="success"
          icon={<ForumRounded />}
          text="نظرات دوستان من "
        />

        <CommentsSlider />
      </CardContent>
    </Card>
  );
};

export default Comments;
