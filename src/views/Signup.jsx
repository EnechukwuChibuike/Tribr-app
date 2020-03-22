import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../styles/views/Signup.styles";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/layouts/Header.component";
import { Formik } from "formik";
import { CREATE_USER } from "../helpers/querries/querries.helper.gql";
import { useMutation } from "@apollo/react-hooks";
import { ToastMessage, type } from "../helpers/toaster/Toastr.helper";

function Copyright() {
   return (
      <Typography variant="body2" color="textSecondary" align="center">
         {"Copyright © "}
         <Link color="inherit" href="https://material-ui.com/">
            Your Website
         </Link>{" "}
         {new Date().getFullYear()}
         {"."}
      </Typography>
   );
}

export default function SignUp() {
   const classes = useStyles();
   const [onSignup] = useMutation(CREATE_USER);
   const history = useHistory();

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Header />
         <div className={classes.paper}>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign up
            </Typography>
            <Formik
               initialValues={{
                  username: "",
                  phone: "",
                  email: "",
                  password: ""
               }}
               onSubmit={async (values, { resetForm, setSubmitting }) => {
                  try {
                     const {
                        data: { createUser }
                     } = await onSignup({
                        variables: values
                     });

                     sessionStorage.setItem("tribr_token", createUser);
                     resetForm();
                     ToastMessage(type.SUCCESS, "SignUp Successfully");
                     history.push("/Login");
                  } catch (e) {
                     setSubmitting(false);
                  }
                  // console.log(values)
               }}
            >
               {props => {
                  const {
                     values,
                     // touched,
                     // errors,
                     // dirty,
                     isSubmitting,
                     handleChange,
                     handleBlur,
                     handleSubmit
                     // handleReset
                  } = props;
                  return (
                     <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                     >
                        <Grid container spacing={2}>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 autoComplete="username"
                                 name="username"
                                 variant="outlined"
                                 required
                                 fullWidth
                                 id="username"
                                 label="username"
                                 autoFocus
                                 type="text"
                                 onBlur={handleBlur}
                                 value={values.username}
                                 onChange={handleChange}
                              />
                           </Grid>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 variant="outlined"
                                 required
                                 fullWidth
                                 id="phone"
                                 label="phone number"
                                 name="phone"
                                 autoComplete="phone"
                                 type="text"
                                 onBlur={handleBlur}
                                 value={values.phone}
                                 onChange={handleChange}
                              />
                           </Grid>
                           <Grid item xs={12}>
                              <TextField
                                 variant="outlined"
                                 required
                                 fullWidth
                                 id="email"
                                 label="Email Address"
                                 name="email"
                                 autoComplete="email"
                                 type="email"
                                 onBlur={handleBlur}
                                 value={values.email}
                                 onChange={handleChange}
                              />
                           </Grid>
                           <Grid item xs={12}>
                              <TextField
                                 variant="outlined"
                                 required
                                 fullWidth
                                 name="password"
                                 label="Password"
                                 type="password"
                                 id="password"
                                 autoComplete="current-password"
                                 onBlur={handleBlur}
                                 value={values.password}
                                 onChange={handleChange}
                              />
                           </Grid>
                           <Grid item xs={12}>
                              <FormControlLabel
                                 control={
                                    <Checkbox
                                       value="allowExtraEmails"
                                       color="primary"
                                    />
                                 }
                                 label="I want to receive inspiration, marketing promotions and updates via email."
                              />
                           </Grid>
                        </Grid>
                        {/* <Link></Link> */}
                        <Button
                           type="submit"
                           fullWidth
                           variant="contained"
                           color="primary"
                           className={classes.submit}
                           disabled={isSubmitting}
                        >
                           Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                           <Grid item>
                              <Link to={"/Login"}>
                                 <p>Already have an account? Log in</p>
                              </Link>
                           </Grid>
                        </Grid>
                     </form>
                  );
               }}
            </Formik>
         </div>
         <Box mt={5}>
            <Copyright />
         </Box>
      </Container>
   );
}
