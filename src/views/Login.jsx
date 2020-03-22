import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../styles/views/Login.styles";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/layouts/Header.component";
import { Formik } from "formik";
import { LOGIN_USER } from "../helpers/querries/querries.helper.gql";
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

export default function Login() {
   const classes = useStyles();
   const [onLoginUser] = useMutation(LOGIN_USER);
   const history = useHistory();

   return (
      <Container component="main" maxWidth="xs">
         <Header />
         <CssBaseline />
         <div className={classes.paper}>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Log in
            </Typography>
            <Formik
               initialValues={{ email: "", password: "" }}
               onSubmit={async (values, { resetForm, setSubmitting }) => {
                  try {
                     const {
                        data: { loginUser }
                     } = await onLoginUser({
                        variables: { ...values }
                     });

                     sessionStorage.setItem("tribr_token", loginUser);
                     resetForm();
                     ToastMessage(type.SUCCESS, "Login Successfully");
                     history.push("/dashboard");
                  } catch (e) {
                     setSubmitting(false);
                  }
                  // console.log(values)
               }}
            >
               {props => {
                  const {
                     values,
                     touched,
                     errors,
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
                        <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           id="email"
                           label="Email Address"
                           name="email"
                           autoComplete="email"
                           autoFocus
                           onChange={handleChange}
                           type="email"
                           onBlur={handleBlur}
                           value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <TextField
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           name="password"
                           label="Password"
                           type="password"
                           id="password"
                           autoComplete="current-password"
                           onChange={handleChange}
                        />
                        {errors.password && touched.password && errors.password}

                        <FormControlLabel
                           control={
                              <Checkbox value="remember" color="primary" />
                           }
                           label="Remember me"
                        />
                        <Button type="submit" disabled={isSubmitting}>
                           Log in
                        </Button>
                        <Grid container>
                           <Grid item xs>
                              <Link to="/signup">Forgot password?</Link>
                           </Grid>
                           <Grid item>
                              <Link to="/signup">
                                 {"Don't have an account? Sign Up"}
                              </Link>
                           </Grid>
                        </Grid>
                     </form>
                  );
               }}
            </Formik>
         </div>
         <Box mt={8}>
            <Copyright />
         </Box>
      </Container>
   );
}
