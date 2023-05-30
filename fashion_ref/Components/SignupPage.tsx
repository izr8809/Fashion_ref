import * as React from 'react';
import { useCallback, useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import useInput from "../hooks/useInput";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from '@mui/material/Typography';
import { TOGGLE_SIGNUP_DONE, signupRequestAction } from "@/reducers/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Crump
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignupPage() {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError } = useSelector((state: any) => state.user);
  const [emailError, setEmailError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useInput("");
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const imageurl = "https://e1.pxfuel.com/desktop-wallpaper/3/487/desktop-wallpaper-minimalist-by-matt-crump-%E2%98%86-more-pretty-iphone-minimalist-pastel-gradient-iphone.jpg";
  const navigate = useNavigate();
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // e.stopPropagation();
    if (password !== passwordCheck) {
      setPasswordError(true);
    } else if (!checkEmail(email) || email.replace(" ","") =="") {
      setEmailError(true);
    } else if(name.replace(" ","") ==""){
      setNameError(true);
    }
    else {
      dispatch(
        signupRequestAction({
          email,
          name,
          password,
        })
      );
    }
  },[email, password, passwordCheck, name]);
  
  const checkEmail = (email: any) => {
    let res = false;

    if (!email) {
      res = false;
    } else {
      const check =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(
          email
        );
      check ? (res = true) : (res = false);
    }
    return res;
  };
  useEffect(()=>{
    if(signUpDone){
      dispatch({
        type: TOGGLE_SIGNUP_DONE,
      });
      navigate("/login");
    };
  },[signUpDone])

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${imageurl})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop:"25%"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              회원가입
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, paddingRight:"20%",paddingLeft:"20%" }}>
              <TextField
                margin="normal"
                required
                id="email"
                value={email}
                onChange={onChangeEmail}
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {emailError && (
                <span style={{ color: "red" }}>Email 형식이 잘못되었습니다</span>
              )}
              <TextField
                margin="normal"
                value={name}
                required
                onChange={onChangeName}
                fullWidth
                name="name"
                label="name"
                type="name"
                id="name"
                autoComplete="current-name"
              />
              {nameError && (
                <span style={{ color: "red" }}>이름을 입력해주세요</span>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={onChangePassword}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={passwordCheck}
                onChange={setPasswordCheck}
                name="password"
                label="PasswordCheck"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {passwordError && (
                <span style={{ color: "red" }}>비밀번호가 일치하지 않습니다</span>
              )}
              <Typography>
                {signUpError && (
                    <span style={{ color: "red" }}>회원가입 실패했습니다</span>
                )}
              </Typography>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loading={signUpLoading}
              >
                확인
              </LoadingButton>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}