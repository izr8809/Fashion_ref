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
import Button from '@mui/material/Button';

type SignupProps = {
  setModalOpen: any;
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
export default function Signup({ setIsLoggedIn, setModalOpen }: SignupProps): ReactElement {
  const API = "http://localhost:3065/signups";
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useInput("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password,setPasswordCheck]
  );

  const checkEmail = (email : any) => {
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
    setModalOpen(false);
  };

  // const modalRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   // 이벤트 핸들러 함수
  //   const handler = (event: any) => {
  //     // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setModalOpen(false);
  //     }
  //   };

  //   // 이벤트 핸들러 등록
  //   document.addEventListener("mousedown", handler);
  //   // document.addEventListener('touchstart', handler); // 모바일 대응

  //   return () => {
  //     // 이벤트 핸들러 해제
  //     document.removeEventListener("mousedown", handler);
  //     // document.removeEventListener('touchstart', handler); // 모바일 대응
  //   };
  // }, []);

  const onSubmit = useCallback(
    (e: any) => {
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      e.preventDefault();
      // if (!term) {
      //   return setTermError(true);
      // }
      console.log(email, nickname, password);
      axios
        .post(
          API,
          // 클라이언트에서 서버로 request(요청)하며 보내주는 데이터
          // 회원가입창에서 클라이언트가 입력하는 데이터
          {
            email: email,
            name: nickname,
            password: password, // 숫자, 영어 대문자, 소문자, 특수기호, 8-20자  1234567#Aaa
          },
          {
            headers: {
              "Content-Type": "application/json",
              // 'Accept': 'application/json',
            },
          }
        )
        // 그러면 서버에서 클라이언트로 response(응답)으로
        // {ok: true} 아니면 {ok: false}가 온다.
        // .then((response) => {
        //   console.log(response); // response.data로 해야?
        // })
        .then((result) => {
          console.log(result);
          console.log("singupDB!");
          console.log(result.data);
          setIsLoggedIn(true);
          // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
          // history.replace('/login');
        })
        .catch((error) => {
          alert("회원가입이 정상적으로 되지 않았습니다.");
          console.log(error);
        });
    },
    [email, password, passwordCheck,setIsLoggedIn , nickname]
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
        onSubmit={onSubmit}
        sx={style}>
          {/* <form onSubmit={onSubmit}> */}
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
            <TextField
              label="이메일"
              name="user-email"
              fullWidth
              type="email"
              value={email}
              required
              error={checkEmail(email)}
              onChange={onChangeEmail}
            />
            <TextField
              label="이름"
              name="user-nick"
              fullWidth
              value={nickname}
              required
              onChange={onChangeNickname}
            />
            <TextField
              label="비밀번호"
              fullWidth
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
            <TextField
              label="비밀번호체크"
              fullWidth
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={setPasswordCheck}
            />
            {passwordError && <span>비밀번호가 일치하지 않습니다.</span>}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                회원가입
              </Button>
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
