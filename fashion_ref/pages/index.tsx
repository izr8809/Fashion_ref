import Head from "next/head";
import axios from "axios";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate, Link} from "react-router-dom";
import React, { useState } from "react";
import { loadUser } from "@/reducers/user";
import wrapper from "@/store/configureStore";
import { END } from "redux-saga";
import LoginPage from "@/Components/LoginPage";
import MainView from "@/Components/MainView";
import SignupPage from "@/Components/SignupPage";

//serverside rendering
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie: any = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadUser());
    // context.store.dispatch(loadPost());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default function Home() {
  const { user } = useSelector((state: any) => state.user);


  if (typeof window !== "undefined") {
    return (
      <>
      <Head>
        <title>Crump REF</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={!user ? <Navigate to="/login" /> : <Navigate to="/workspace" />}/>
              <Route path="workspace" element={<MainView/>}/>
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
      </>
    );
  }
}
