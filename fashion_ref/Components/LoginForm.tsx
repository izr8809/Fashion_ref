import React, { HtmlHTMLAttributes, ReactElement } from "react";
import { useCallback, useEffect,useState } from 'react';
import useInput from '../hooks/useInput';
import axios from 'axios';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";


export default function LoginForm(): ReactElement {
    
  const API = "http://localhost:3065/login";
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [isLoggedin, setisLoggedin] = useState(false);
  const onFinish = (values: FormData) => {};
  const [User, setUser] = useState({
    id : 0,
    name : null,
  });

  const onSubmitForm = useCallback((event : any) => {
    event.preventDefault();
    console.log("signup")
    console.log(password)
    console.log(email)
    axios.post(API,
      // 클라이언트에서 서버로 request(요청)하며 보내주는 데이터
      // 회원가입창에서 클라이언트가 입력하는 데이터
      {
        email: email,           
        password: password,  // 숫자, 영어 대문자, 소문자, 특수기호, 8-20자  1234567#Aaa
      },
      {
        headers: {
          'Content-Type': 'application/json',
          // 'Accept': 'application/json',
        },
      })
      // 그러면 서버에서 클라이언트로 response(응답)으로 
      // {ok: true} 아니면 {ok: false}가 온다.
      // .then((response) => {
      //   console.log(response); // response.data로 해야?
      // })
      .then((result) => {
        console.log(result);
        console.log("singupDB!");
        console.log(result.data.data)
        setUser(result.data.data);
        setisLoggedin(true);
        // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
        // history.replace('/login');
      })
      .catch((error) => {
        alert('회원가입이 정상적으로 되지 않았습니다.');
        console.log(error); 
      })
  }, [email, password]);

  console.log(User)
  if(isLoggedin){
    return( <div>{User.name && User.name}님</div>)
  }
  return (
    <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmitForm}
        // sx={style}
      >
        {/* <form onSubmit={onSubmit}> */}
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <TextField
          label="이메일"
          name="user-email"
          type="email"
          value={email}
          required
          variant="standard"
          onChange={(e) => {
            onChangeEmail(e.target.value);
          }}
        />
        <TextField
          label="비밀번호"
          name="user-nick"
          value={password}
          required
          variant="standard"
          onChange={(e) => {
            onChangePassword(e.target.value);
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
        >
          로그인
        </Button>
        {/* </form> */}
      </Box>
  )



}
