import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";
import { userComments } from "../../constants/details";
import Slider from "react-slick";

const CommentsSlider = () => {
  const options = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    cssEase: "linear",
    rows: 2,
    slidesPerRow: 1,
  };

  return (
    <Box
      component="div"
      sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}
    >
      <Slider {...options}>
        {userComments.map((user, index) => (
          <Box key={index} component="div" sx={{ justifyContent: "center" }}>
            <Avatar
              src={user.avatar}
              variant="rounded"
              sx={{ height: 100, width: 100, margin: "0 auto" }}
            />
            <Typography variant="body1" color="text.primary" textAlign="center">
              {user.fullname}
            </Typography>

            <Typography
              variant="body2"
              color="text.primary"
              textAlign="center"
              sx={{ mb: 2 }}
            >
              {user.jobTitle}
            </Typography>
            <Card
              sx={{
                backgroundColor: "lightseagreen",
                width: 1 / 2,
                margin: "0 auto",
                borderRadius: 5,
              }}
            >
              <CardContent>
                <Typography variant="body2" textAlign="center">
                  {user.comment}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CommentsSlider;
