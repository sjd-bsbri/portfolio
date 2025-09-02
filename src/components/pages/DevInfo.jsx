import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";


const Info = ({ children }) => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Typography
      // variant={isDownMd ? "body2" : "body1"}
      color="text.primary"
      textAlign="left"
      sx={{ mt: 2, fontSize: isDownMd ? "13px" : "22px" }}
    >
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "middle",
          color: "primary.main",
        }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : سجاد باصبری</Info>
      <Info>تحصیلات : کارشناسی مهندسی کامپیوتر</Info>
      <Info>شهر : مشهد</Info>
      <Info>abccnn09@gmail.com
        : آدرس ایمیل</Info>
      <Info>شماره موبایل : ۰۹۱۲۳۴۵۶۷۸۹</Info>
    </>
  );
};
export default DevInfo;
