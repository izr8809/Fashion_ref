import * as React from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useEffect, useState, useRef, useCallback} from 'react';
import {
  GET_USER_LIKED_POST_REQUEST,
  GET_USER_POST_REQUEST, POST_SORT_REQUEST, TOGGLE_SCROLL_REQUEST,
} from "@/reducers/post";
type UserPageProps = {
  setIsUserpage : any;
};

export default function UserPage(props: UserPageProps) {
  const {postArray} = useSelector((state: any) => state.post);
  const { user,userCurrentWorkspaceId } = useSelector((state: any) => state.user);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();


  const loadUserPost = useCallback(() => {
    dispatch({
      type: GET_USER_POST_REQUEST,
      data: {
        workspaceId: userCurrentWorkspaceId,
      },
    });
    setIsLiked(false);
  }, []);

  const likedSorting = useCallback(() => {
    var sortedArray = [...postArray];
    sortedArray.sort(function(a:any,b:any){
      return  b.Likers.length- a.Likers.length 
    })
    dispatch({
      type: POST_SORT_REQUEST,
      data: sortedArray,
    });
  }, [postArray, user]);
  
  const dateSorting = useCallback(() => {
    var sortedArray = [...postArray];
    sortedArray.sort(function(a:any,b:any){
      return a.createdAt - b.createdAt
    })
    dispatch({
      type: POST_SORT_REQUEST,
      data: sortedArray,
    });
  }, [postArray, user]);


  
  const loadUserLikedPost = useCallback(() => {
    setIsLiked(true);
    dispatch({
      type:GET_USER_LIKED_POST_REQUEST,
      data: {
        workspaceId: userCurrentWorkspaceId,
      },
    })

  }, [postArray, user]);
  
  //backspace event
  useEffect(()=>{
    history.pushState(null, '', '');
    window.onpopstate = () =>{
      props.setIsUserpage(false);
    } 

  },[])

  return (
    <>
    <Stack spacing={2} direction="row">
        <Button disabled style={{marginTop:"-20px", fontWeight: 900}}>{user.name}님의 페이지</Button>
    </Stack>
      <Stack spacing={2} direction="row">
        {/* <Button variant="text" style={{fontWeight: 900}} onClick={loadUserPost}> 작성한 게시물</Button>
        <Button variant="text" style={{fontWeight: 900}} onClick={loadUserLikedPost}> 좋아요 누른 게시물</Button> */}
        <Button variant="outlined" size="small" style={{fontWeight: 900}} onClick={dateSorting}> 최신 순</Button>
        <Button variant="outlined" size="small" style={{fontWeight: 900}}onClick={likedSorting}> 좋아요 순 </Button>
      </Stack>
    </>
  );
}
