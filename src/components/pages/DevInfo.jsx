import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Info = ({ children }) => {
  return (
    <Typography
      variant="body1"
      color="text.primary"
      textAlign="left"
      sx={{ mt: 2 }}
    >
      {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: "bottom", color: "primary.main" }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : سجاد باصبری</Info>
      <Info>تحصیلات : کارشناسی مهندسی کامپیوتر</Info>
      <Info>شهر : قوچان</Info>
      <Info>sajad.bsbri@chmail.ir : آدرس ایمیل</Info>
      <Info>شماره موبایل : 09300023565</Info>
    </>
  );
};
export default DevInfo;
