import React, { HtmlHTMLAttributes, ReactElement } from "react";
import { useCallback, useEffect } from 'react';
import useInput from '../hooks/useInput';
import axios from 'axios';


export default function LoginForm(): ReactElement {
    
  const API = "http://localhost:3065/signups";
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onFinish = (values: FormData) => {};

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
        console.log(result.data.ok)
        // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
        // history.replace('/login');
      })
      .catch((error) => {
        alert('회원가입이 정상적으로 되지 않았습니다.');
        console.log(error);
      })
  }, [email, password]);
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label> email</label>
        <input 
        type="text" 
        id="email"
        onChange = { (e) => {
          onChangeEmail(e.target.value)}
        }
        />
        <label> password</label>
        <input 
        type="text" 
        id="password"
        onChange = { (e) => {
          onChangePassword(e.target.value)}
        }
        />
        <button>
          Login
        </button>
      </form>
    </div>
  )



}
