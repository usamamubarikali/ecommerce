import React, { useContext, useState } from 'react';
import signinStyles from './LASU.styles';
import Copyright from './Copyright';
import { User } from '../../context/Auth/UserContext';

import { loginWithEmail } from '../../context/Auth/UserUtils';

import GoogleButton from 'react-google-button';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(signinStyles);


export default function SignInSide() {
  const { user, dispatchUser } = useContext(User);
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLoginWithEmail = (event) => {
    event.preventDefault();
    const res = loginWithEmail(email, password, dispatchUser);
  };


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} position="reletive" elevation={6} square>
        {
          user.error ? (
          <Alert severity="error" zIndex={10} position="absolute" width={0} height={0} top={0} >
            <AlertTitle>Error</AlertTitle>
            {user.error}
          </Alert>
          ) : (
            null
          )
        }
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src="/static/UR-logo.png" alt="logo" width="50" height="45" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <GoogleButton />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLoginWithEmail}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}