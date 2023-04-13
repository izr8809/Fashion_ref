import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  ReactElement,
} from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TOGGLE_SIGNUP_DONE, loginRequestAction, signupRequestAction } from "@/reducers/user";

type SignupProps = {
  setIsModalOpen: any;
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
export default function Signup({
  setIsModalOpen,
}: SignupProps): ReactElement {
  const dispatch = useDispatch();
  const [isInitialOpen, setIsInitialOpen]= useState(true);
  const [email, onChangeEmail] = useInput("");
  const { signUpLoading } = useSelector((state: any) => state.user);
  const { signUpDone } = useSelector((state: any) => state.user);
  const { signUpError } = useSelector((state: any) => state.user);
  const [emailError, setEmailError] = useState(false);
  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useInput("");
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password, setPasswordCheck]
  );

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
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

    useEffect(()=>{
      if(signUpDone && !isInitialOpen){
        setIsModalOpen(false);
        dispatch({
          type: TOGGLE_SIGNUP_DONE,
        })
      }
      setIsInitialOpen(false);
    },[signUpDone])

  //backspace event
  useEffect(()=>{
    history.pushState(null, '', '');
    window.onpopstate = () =>{
      setIsModalOpen(false);
    } 
  },[])

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
        onSubmit={onSubmit}
        sx={style}
      >
        {/* <form onSubmit={onSubmit}> */}
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          회원가입
        </Typography>
        <TextField
          label="이메일"
          name="user-email"
          sx={{ marginTop: 3 }}
          fullWidth
          type="email"
          value={email}
          required
          // error={checkEmail(email)}
          onChange={onChangeEmail}
        />
        {emailError && (
          <span style={{ color: "red" }}>Email 형식이 잘못되었습니다</span>
        )}
        <TextField
          label="이름"
          name="user-nick"
          sx={{ marginTop: 3 }}
          fullWidth
          value={name}
          required
          onChange={onChangeName}
        />
        {nameError && (
          <span style={{ color: "red" }}>이름을 입력해주세요</span>
        )}
        <TextField
          label="비밀번호"
          fullWidth
          name="user-password"
          sx={{ marginTop: 3 }}
          type="password"
          value={password}
          required
          onChange={onChangePassword}
        />
        <TextField
          label="비밀번호체크"
          fullWidth
          name="user-password-check"
          sx={{ marginTop: 3 }}
          type="password"
          value={passwordCheck}
          required
          onChange={setPasswordCheck}
        />
        {passwordError && (
          <span style={{ color: "red" }}>비밀번호가 일치하지 않습니다</span>
        )}
        {signUpError && (
          <span style={{ color: "red" }}>회원가입 실패했습니다</span>
        )}
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
          loading={signUpLoading}
        >
          확인
        </LoadingButton>
        {/* </form> */}
      </Box>
      {/* <Button onClick={closeModal}>닫기</Button> */}
    </Modal>
    // {/* <div className={"container"} ref={modalRef}>
    //       {/* <label htmlFor="user-email">이메일</label>
    //       <br />
    //       <input name="user-email" type="email" value={email} required onChange={ (e) => {onChangeEmail(e.target.value)}} /> */}
    //     </TextField>
    //     <div>
    //       <label htmlFor="user-nick">닉네임</label>
    //       <br />
    //       <input name="user-nick" value={nickname} required onChange={(e) => {onChangeNickname(e.target.value)}} />
    //     </div>
    //     <div>
    //       <label htmlFor="user-password">비밀번호</label>
    //       <br />
    //       <input name="user-password" type="password" value={password} required onChange={(e) => {onChangePassword(e.target.value)}} />
    //     </div>
    //     <div>
    //       <label htmlFor="user-password-check">비밀번호체크</label>
    //       <br />
    //       <input name="user-password-check" type="password" value={passwordCheck} required onChange={(e) => {setPasswordCheck(e.target.value)}} />

    //       {/* {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>} */}
    //     </div>
    //     {/* <div>
    //       <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다.</Checkbox>
    //       {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
    //     </div> */}
    //     <div style={{ marginTop: 10 }}>
    //       <button>가입하기</button>
    //     </div>
    //     <button className={"close"} onClick={closeModal}>
    //         X
    //     </button>
    //   </div> */}
    // }
  );
}
