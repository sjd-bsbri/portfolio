import { 
 
  Avatar, 
  Typography, 
  Box, 
  useMediaQuery,
  Rating,
  Paper,
  IconButton
} from "@mui/material";
import { userComments } from "../../constants/details";
import Slider from "react-slick";
import { useTheme } from "@mui/material/styles";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommentsSlider = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  
  const SlickArrow = ({ direction, onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        color: theme.palette.primary.main,
        bgcolor: theme.palette.mode === "dark" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.8)",
        boxShadow: theme.shadows[4],
        '&:hover': {
          bgcolor: theme.palette.mode === "dark" ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,1)",
        },
        ...(direction === "next" ? { right: 10 } : { left: 10 }),
      }}
    >
      {direction === "next" ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
    </IconButton>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: isXs ? 1 : isMd ? 2 : 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrow direction="prev" />,
    prevArrow: <SlickArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box component="div" sx={{ mt: 6, mb: 4, mx: 2 }}>
      <Slider {...settings}>
        {userComments.map((comment, index) => (
          <Box 
            key={index} 
            sx={{ 
              py: 1, 
              height: '100%' 
            }}
          >
            <Paper
              elevation={6}
              sx={{
                mx:2,
                height: '100%',
                borderRadius: 4,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible',
                transition: 'transform 0.3s, box-shadow 0.3s',
                bgcolor: theme.palette.mode === "dark" 
                  ? 'rgba(25, 118, 210, 0.08)' 
                  : 'rgba(255, 255, 255, 0.95)',
                border: `1px solid ${theme.palette.mode === "dark" 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'}`,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                pb: 2
              }}>
                <Avatar
                  src={comment.avatar}
                  alt={comment.fullname}
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    border: `3px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[4],
                    mb: 1
                  }}
                />
                <Typography 
                  variant="h6" 
                  component="div"
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  {comment.fullname}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  gutterBottom
                  sx={{ mb: 1 }}
                >
                  {comment.jobTitle}
                </Typography>
                <Rating 
                  value={comment.rating || 5} 
                  readOnly 
                  size="small" 
                  precision={0.5}
                />
              </Box>
              
              <Box sx={{ 
                position: 'relative', 
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
                pt: 1,
                mt: 2,
                borderTop: `1px dashed ${theme.palette.mode === "dark" 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'}`,
              }}>
                <FormatQuoteIcon 
                  sx={{ 
                    position: 'absolute',
                    top: -12,
                    left: 0,
                    fontSize: '1.5rem',
                    color: theme.palette.primary.main,
                    transform: 'rotate(180deg)',
                  }}
                />
                <Typography 
                  variant="body2" 
                  color="text.primary"
                  align="center"
                  sx={{ 
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  {comment.comment}
                </Typography>
                <FormatQuoteIcon 
                  sx={{ 
                    position: 'absolute',
                    bottom: -12,
                    right: 0,
                    fontSize: '1.5rem',
                    color: theme.palette.primary.main,
                  }}
                />
              </Box>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CommentsSlider;
