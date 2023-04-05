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
import { TOGGLE_LOGIN_DONE, loginRequestAction } from "@/reducers/user";
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
  loginModalOpen : boolean;
};
export default function LoginForm({
  setloginModalOpen,
  loginModalOpen,
}: LoginFormProps): ReactElement {
  
  const dispatch = useDispatch();
  const [isInitialOpen, setIsInitialOpen]= useState(true);
  const {logInDone} = useSelector((state : any) => state.user)
  const {logInLoading} = useSelector((state : any) => state.user)
  const {logInError} = useSelector((state : any) => state.user)
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
        dispatch(loginRequestAction({email,password}))
      }
    },
    [email, password, dispatch]
  );

  useEffect(()=>{
    if(logInDone && !isInitialOpen){
      setloginModalOpen(false);
      dispatch({
        type: TOGGLE_LOGIN_DONE,
      })
    }
    setIsInitialOpen(false);

  },[logInDone])


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
        {logInError && <span style={{marginTop:"10px", color:"#F73334"}}> 로그인 정보가 일치하지 않습니다.</span>}
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
          loading={logInLoading}
        >
          로그인
        </LoadingButton>
        {/* </form> */}
      </Box>
    </Modal>
  );
}
