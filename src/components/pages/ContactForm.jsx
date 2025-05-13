import {
  Typography,
  CardContent,
  TextField,
  InputAdornment,
  CardActions,
  Button,
  Box,
  Zoom,
  IconButton,
  Tooltip,
  CircularProgress,
  Fade,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
  SendRounded,
  RefreshRounded,
  MessageRounded,
} from "@mui/icons-material";
import { useFormik } from "formik";
import { useTheme } from "@mui/material/styles";
import { contactValidationSchema } from "../../validations/contactValidation";
import { useState } from "react";

const ContactForm = () => {
  const theme = useTheme();
  const [sending, setSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      setSending(true);
      console.log("Form Values: ", values);
      // Simulate API call
      setTimeout(() => {
        setSending(false);
        setFormSubmitted(true);
      }, 1500);
    },
    validationSchema: contactValidationSchema,
  });

  const handleReset = () => {
    formik.resetForm();
    setFormSubmitted(false);
  };

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent sx={{ p: 0 }}>
        <Grid container>
          <Grid
            xs={12}
            sx={{
              direction: "ltr",
            }}
          >
            <Fade in={formSubmitted}>
              <Box 
                sx={{
                  display: formSubmitted ? "flex" : "none",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  py: 3,
                }}
              >
                <Zoom in={formSubmitted}>
                  <Box 
                    sx={{ 
                      p: 2, 
                      borderRadius: "50%", 
                      bgcolor: theme.palette.mode === "dark" ? "rgba(76, 175, 80, 0.1)" : "rgba(76, 175, 80, 0.08)",
                      mb: 2,
                    }}
                  >
                    <Box 
                      sx={{ 
                        p: 1.5, 
                        borderRadius: "50%", 
                        bgcolor: theme.palette.mode === "dark" ? "rgba(76, 175, 80, 0.2)" : "rgba(76, 175, 80, 0.15)",
                      }}
                    >
                      <SendRounded color="success" fontSize="large" />
                    </Box>
                  </Box>
                </Zoom>
                <Typography variant="h6" color="success.main" gutterBottom>
                  پیام شما با موفقیت ارسال شد
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  در اسرع وقت با شما تماس خواهم گرفت
                </Typography>
                <Button
                  startIcon={<RefreshRounded />}
                  variant="outlined"
                  color="primary"
                  onClick={handleReset}
                  sx={{ 
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    boxShadow: theme.palette.mode === "dark" ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "0 4px 10px rgba(0, 0, 0, 0.05)",
                    '&:hover': {
                      boxShadow: theme.palette.mode === "dark" ? "0 6px 15px rgba(0, 0, 0, 0.4)" : "0 6px 15px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  ارسال پیام جدید
                </Button>
              </Box>
            </Fade>

            <Fade in={!formSubmitted}>
              <Box sx={{ display: formSubmitted ? "none" : "block" }}>
                <Grid container spacing={2}>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      color="info"
                      label="نام و نام خانوادگی"
                      name="fullname"
                      variant="outlined"
                      helperText={
                        formik.touched.fullname ? formik.errors.fullname : null
                      }
                      error={Boolean(
                        formik.touched.fullname && formik.errors.fullname
                      )}
                      value={formik.values?.fullname}
                      onChange={formik.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Face6Rounded color={formik.touched.fullname && !formik.errors.fullname ? "info" : "action"} />
                          </InputAdornment>
                        ),
                        sx: {
                          borderRadius: 2,
                          bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                          '&:hover': {
                            bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                          },
                          '&.Mui-focused': {
                            bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                            boxShadow: `0 0 0 2px ${theme.palette.info.main}30`,
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      color="info"
                      label="آدرس ایمیل"
                      name="email"
                      variant="outlined"
                      helperText={formik.touched.email ? formik.errors.email : null}
                      error={Boolean(formik.touched.email && formik.errors.email)}
                      value={formik.values?.email}
                      onChange={formik.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailRounded color={formik.touched.email && !formik.errors.email ? "info" : "action"} />
                          </InputAdornment>
                        ),
                        sx: {
                          borderRadius: 2,
                          bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                          '&:hover': {
                            bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                          },
                          '&.Mui-focused': {
                            bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                            boxShadow: `0 0 0 2px ${theme.palette.info.main}30`,
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={12}>
                    <TextField
                      fullWidth
                      size="small"
                      color="info"
                      label="عنوان"
                      name="subject"
                      variant="outlined"
                      helperText={
                        formik.touched.subject ? formik.errors.subject : null
                      }
                      error={Boolean(
                        formik.touched.subject && formik.errors.subject
                      )}
                      value={formik.values?.subject}
                      onChange={formik.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SubjectRounded color={formik.touched.subject && !formik.errors.subject ? "info" : "action"} />
                          </InputAdornment>
                        ),
                        sx: {
                          borderRadius: 2,
                          bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                          '&:hover': {
                            bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                          },
                          '&.Mui-focused': {
                            bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                            boxShadow: `0 0 0 2px ${theme.palette.info.main}30`,
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid xs={12} md={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      size="small"
                      color="info"
                      label="متن پیام"
                      name="message"
                      variant="outlined"
                      helperText={
                        formik.touched.message ? formik.errors.message : null
                      }
                      error={Boolean(
                        formik.touched.message && formik.errors.message
                      )}
                      value={formik.values?.message}
                      onChange={formik.handleChange}
                      InputProps={{
                        endAdornment: formik.touched.message && !formik.errors.message ? (
                          <InputAdornment position="end" sx={{ alignSelf: 'flex-start', mt: 1.5, mr: 1 }}>
                            <MessageRounded color="info" />
                          </InputAdornment>
                        ) : null,
                        sx: {
                          borderRadius: 2,
                          bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                          '&:hover': {
                            bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                          },
                          '&.Mui-focused': {
                            bgcolor: theme.palette.mode === "dark" ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                            boxShadow: `0 0 0 2px ${theme.palette.info.main}30`,
                          }
                        }
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </CardContent>

      {!formSubmitted && (
        <CardActions
          sx={{
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <Tooltip title="پاک کردن فرم">
              <span>
                <IconButton 
                  color="error" 
                  disabled={
                    !formik.values.fullname && 
                    !formik.values.email && 
                    !formik.values.subject && 
                    !formik.values.message
                  }
                  onClick={handleReset}
                  sx={{ 
                    bgcolor: theme.palette.mode === "dark" ? 'rgba(211, 47, 47, 0.1)' : 'rgba(211, 47, 47, 0.05)',
                    '&:hover': {
                      bgcolor: theme.palette.mode === "dark" ? 'rgba(211, 47, 47, 0.2)' : 'rgba(211, 47, 47, 0.1)',
                    }
                  }}
                >
                  <RefreshRounded />
                </IconButton>
              </span>
            </Tooltip>
            
            <Button
              type="submit"
              color="success"
              variant="contained"
              disabled={!formik.isValid || sending}
              sx={{ 
                borderRadius: 2,
                px: 4,
                py: 1,
                fontWeight: "bold",
                boxShadow: '0 4px 10px rgba(76, 175, 80, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 15px rgba(76, 175, 80, 0.4)',
                },
                transition: 'all 0.3s ease'
              }}
              startIcon={
                sending ? (
                  <CircularProgress size={20} color="inherit" thickness={5} />
                ) : (
                  <SendRounded />
                )
              }
            >
              {sending ? "در حال ارسال..." : "ارسال پیام"}
            </Button>
          </Box>
        </CardActions>
      )}
    </form>
  );
};
export default ContactForm;
