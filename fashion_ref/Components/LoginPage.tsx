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
import Typography from '@mui/material/Typography';
import { TOGGLE_LOGIN_DONE, loginRequestAction } from "@/reducers/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as routerlink} from "react-router-dom";

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

export default function LoginPage() {
  const dispatch = useDispatch();
  const {logInDone} = useSelector((state : any) => state.user)
  const {logInLoading} = useSelector((state : any) => state.user)
  const {logInError} = useSelector((state : any) => state.user)
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [isSignup, setIsSignup] = useState("false");
  const imageurl = "https://e1.pxfuel.com/desktop-wallpaper/3/487/desktop-wallpaper-minimalist-by-matt-crump-%E2%98%86-more-pretty-iphone-minimalist-pastel-gradient-iphone.jpg";
  const navigate = useNavigate();
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email == "") {
      alert("이메일을 입력해주세요");
    } else if (password == "") {
      alert("비밀번호를 입력해주세요");
    } else {
      dispatch(loginRequestAction({email,password}))
    }
  },[email, password]);
  
  useEffect(()=>{
    if(logInDone){
      dispatch({
        type: TOGGLE_LOGIN_DONE,
      });
      navigate("/workspace");
    }
  },[logInDone])

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
              로그인
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                value={email}
                onChange={onChangeEmail}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
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

              <Typography>
                {logInError && <span style={{marginTop:"10px", color:"#F73334"}}> 로그인 정보가 일치하지 않습니다.</span>}
              </Typography>

              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                로그인
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    
                  </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2" style={{fontWeight: 800}} onClick={() => {navigate("/signup")}}>
                    {"가입하기"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}