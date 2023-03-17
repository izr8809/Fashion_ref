import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../Components/Navbar";
import ResponsiveGrid from "../Components/ResponsiveGrid";
import axios from "axios";
import React, { useCallback, useState, useEffect, useMemo } from "react";
import Link from "next/link";
// const inter = Inter({ subsets: ["latin"] });

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [posts, setPost] = useState<any[]>([]);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  var sliceCount = 24;
  var resultStore:any[];

  const LOADAPI = `${process.env.NEXT_PUBLIC_API}/loadpost`;

  const loadPost = useCallback(() => {
    axios
      .get(LOADAPI)
      .then((result) => {
        const slicedPosts =[];
        resultStore = result.data;
        for(let i=0; i< sliceCount; i++){
          slicedPosts.push(result.data[i])
        }
        setPost(slicedPosts);
        setPage(1)
        console.log("loadpost")
        setCount( Math.ceil(result.data.length / sliceCount))
        // for(let i=0; i< result.data.length ; i++){
        //   console.log(result.data[i].Images[0])
        //   console.log(i)

        // }
        // for(let i=0 ; i< result.data.lengths
        // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
        // history.replace('/login');
      })
      .catch((error) => {
        alert("로딩이 정상적으로 되지 않았습니다.");
        setPost([]);
        console.log(error);
      });
  }, [setPost]);

  const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number)=>{
    const slicedPosts =[];
    const num = (resultStore.length < sliceCount*value) ? resultStore.length : sliceCount*value
    for(let i=sliceCount*(value-1); i< num; i++){
      slicedPosts.push(resultStore[i])
    }
    setPost(slicedPosts);
    setPage(value)
    console.log("hanlde")
    window.scrollTo({ top: 0, behavior: 'smooth' });

  },[])

  useEffect(() => {
    loadPost();
  }, [loadPost]);

  const LOGINCHECKAPI = `${process.env.NEXT_PUBLIC_API}/logincheck`;
  useEffect(() => {
    axios
      .get(LOGINCHECKAPI)
      .then((result) => {
        if (result.data.login) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Crump REF</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ margin: "auto", width: "80%" }}>
        <a onClick={loadPost}>
          <h1 id="title">CRUMP REFERENCE</h1>
        </a>
        <div style={{ marginBottom: "40px" }}>
          <Navbar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setPost={setPost}
            userId={userId}
            setUserId={setUserId}
            userName={userName}
            setUserName={setUserName}
            setCount={setCount}
          />
          {/* <LoginForm /> */}
          {/* <SignupForm /> */}
        </div>
        <ResponsiveGrid
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setPost={setPost}
          posts={posts}
        />
        <div>
          <Stack spacing={2} sx={{alignItems:"center", marginTop:"30px", marginBottom:"50px"}}>
            <Pagination page={page} count={count} color="primary" onChange={handleChange}/>
          </Stack>
        </div>
      </div>
    </>
  );
}
