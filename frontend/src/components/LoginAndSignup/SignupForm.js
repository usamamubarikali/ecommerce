import React from 'react';
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

const SignupForm = () => {
    return (
        <div>
            
        </div>
    )
}

export default SignupForm;
