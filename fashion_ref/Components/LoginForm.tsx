import React, { HtmlHTMLAttributes, ReactElement } from "react";
import { useCallback, useEffect,useState } from 'react';
import useInput from '../hooks/useInput';
import axios from 'axios';
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";


type LoginFormProps = {
  setloginModalOpen: any;
  setIsLoggedIn : any;
};
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function LoginForm({ setIsLoggedIn, setloginModalOpen }: LoginFormProps): ReactElement {
    
  const API = "http://15.164.224.172:8080/login";
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onFinish = (values: FormData) => {};
  const [User, setUser] = useState({
    id : 0,
    name : null,
  });

  const closeModal = () => {
    setloginModalOpen(false);
  };
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
      .then((result) => {
        console.log(result);
        console.log("singupDB!");
        console.log(result.data.data)
        setUser(result.data.data);
        setIsLoggedIn(true);
        // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
        // history.replace('/login');
      })
      .catch((error) => {
        alert('로그인이 정상적으로 되지 않았습니다.');
        console.log(error); 
      })
  }, [email, password, setIsLoggedIn]);

  console.log(User)
  return (
    
    <Modal
    open={true}
    onClose={closeModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmitForm}
        sx={style}
      >
        {/* <form onSubmit={onSubmit}> */}
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <TextField
          label="이메일"
          name="user-email"
          fullWidth
          type="email"
          value={email}
          required
          variant="standard"
          onChange={onChangeEmail}
        />
        <TextField
          label="비밀번호"
          name="user-nick"
          fullWidth
          value={password}
          required
          variant="standard"
          onChange={onChangePassword}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
        >
          로그인
        </Button>
        {/* </form> */}
      </Box>
      </Modal>
  )

}
