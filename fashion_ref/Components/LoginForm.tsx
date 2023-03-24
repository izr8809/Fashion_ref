import React, { HtmlHTMLAttributes, ReactElement } from "react";
import { useCallback, useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { LoadingButton } from '@mui/lab';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { loginRequestAction } from "@/reducers/user";
import { useSelector } from "react-redux";

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
type LoginFormProps = {
  setloginModalOpen: any;
};
export default function LoginForm({
  setloginModalOpen,
}: LoginFormProps): ReactElement {
  
  const dispatch = useDispatch();
  const {isLoggingIn} = useSelector((state : any) => state.user)
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const closeModal = () => {
    setloginModalOpen(false);
  };
  const onSubmitForm = useCallback(
    (event: any) => {
      event.preventDefault();
      if (email == "") {
        alert("이메일을 입력해주세요");
      } else if (password == "") {
        alert("비밀번호를 입력해주세요");
      } else {
        console.log(email, password)
        dispatch(loginRequestAction({email,password}))
        setloginModalOpen(false);
        // axios
        //   .post(
        //     LOGINAPI,
        //     // 클라이언트에서 서버로 request(요청)하며 보내주는 데이터
        //     // 회원가입창에서 클라이언트가 입력하는 데이터
        //     {
        //       email: email,
        //       password: password, // 숫자, 영어 대문자, 소문자, 특수기호, 8-20자  1234567#Aaa
        //     },
        //     {
        //       headers: {
        //         "Content-Type": "application/json",
        //         // 'Accept': 'application/json',
        //       },
        //     }
        //   )
        //   .then((result) => {
        //     setUser(result.data.data);
        //     console.log("dispatch");
        //     dispatch(loginRequestAction("usersample"));
        //     // setIsLoggedIn(true);
        //     setUserId(result.data.data.id);
        //     setUserName(result.data.data.name);
        //     setloginModalOpen(false);
        //     console.log(result.data.data);
        //     // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
        //     // history.replace('/login');
        //   })
        //   .catch((error) => {
        //     alert("로그인 정보가 일치하지 않습니다.");
        //     setloginModalOpen(false);
        //     console.log(error);
        //   });
      }
    },
    [email, password, dispatch, setloginModalOpen]
  );

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
          type="password"
          fullWidth
          value={password}
          required
          variant="standard"
          onChange={onChangePassword}
        />
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
          loading={isLoggingIn}
        >
          로그인
        </LoadingButton>
        {/* </form> */}
      </Box>
    </Modal>
  );
}
