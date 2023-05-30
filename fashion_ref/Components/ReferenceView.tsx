import * as React from "react";
import { useDispatch } from "react-redux";
import { useCallback, useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import NoticeModal from "@/Components/NoticeModal";
import UserPage from "@/Components/UserPage";
import SideBar from "@/Components/Sidebar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import ResponsiveGrid from "./ResponsiveGrid";
import { loadPost } from "@/reducers/post";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import {
    LOAD_POST_REQUEST,
    RESET_POST_REQUEST,
  POST_SORT_REQUEST,
  GET_LIKESORTED_REQUEST,
} from "@/reducers/post";
import { loadUser } from "@/reducers/user";

type ReferenceViewProps = {
    setIsHomeState : any;
};


export default function ReferenceView({setIsHomeState}: ReferenceViewProps) {
  const { loadPostLoading, postArray, onInfiniteScroll, hasMorePost } = useSelector((state: any) => state.post);
  const { user, userCurrentWorkspaceId} = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [isUserpage, setIsUserpage] = useState(false);
  const [searchedHashtags, setSearchedHashtags] = useState<any>([]);
  const { currentSpaceId } = useSelector((state: any) => state.workspace);

  const loadPosts = useCallback(() => {
    dispatch({
      type: RESET_POST_REQUEST,
      data: {
        referenceId: currentSpaceId,
      },
    });
    dispatch(
      loadPost({
        referenceId: currentSpaceId,
      })
    );
    setIsUserpage(false);
  }, [dispatch, currentSpaceId]);

  const filterTodayPost = useCallback(() => {
    var sortedArray = [...postArray];
    const d = new Date();
    sortedArray = sortedArray.filter(
      (post) =>
        parseInt(post.createdAt.split("-")[2].substring(0, 2), 10) -
          d.getDate() ==
        0
    );
    dispatch({
      type: POST_SORT_REQUEST,
      data: sortedArray,
    });
  }, [dispatch]);

  const sortpostbylikes = useCallback(() => {
    dispatch({
      type: GET_LIKESORTED_REQUEST,
      referenceId : currentSpaceId, 
    });
  }, [dispatch,currentSpaceId]);

  
//   useEffect(() => {
//     dispatch(
//       loadPost({
//         referenceId: currentSpaceId,
//       })
//     );
//     if(!user){
//         dispatch(loadUser());
//     }
//   }, [user, currentSpaceId]);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 350
      ) {
        if (hasMorePost && !loadPostLoading && onInfiniteScroll) {
          const lastId = postArray[postArray.length - 1].id;
          dispatch({
            type: LOAD_POST_REQUEST,
            data: {
              lastId: lastId,
              referenceId: currentSpaceId,
            },
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [
    hasMorePost,
    loadPostLoading,
    dispatch,
    postArray,
    onInfiniteScroll,
    currentSpaceId,
  ]);

  
  return (
    <>
      <div id="frame" style={{ width: "80%", marginLeft: "38px" }}>
        <div style={{ marginBottom: "40px", marginTop: "70px" }}>
          <Navbar setIsUserpage={setIsUserpage} setIsHomeState={setIsHomeState}/>
        </div>
        <div style={{ marginBottom: "10px" }}>
          {isUserpage && <UserPage setIsUserpage={setIsUserpage} />}
        </div>
        {!isUserpage && (
          <Stack
            spacing={2}
            direction="row"
            sx={{ marginBottom: "42px", marginTop: "-20px" }}
          >
            <Button
              variant="outlined"
              size="small"
              style={{ fontWeight: 900 }}
              onClick={filterTodayPost}
            >
              {" "}
              오늘의 게시물
            </Button>
            <Button
              variant="outlined"
              size="small"
              style={{ fontWeight: 900 }}
              onClick={sortpostbylikes}
            >
              {" "}
              좋아요 순
            </Button>
            <Button
              variant="outlined"
              size="small"
              style={{ fontWeight: 900 }}
              onClick={loadPosts}
            >
              {" "}
              최신 순
            </Button>
          </Stack>
        )}
        <ResponsiveGrid setIsUserpage={setIsUserpage} />
        {loadPostLoading && (
          <div id="bottomloading">
            <CircularProgress />
          </div>
        )}
      </div>
    </>
    
    
  );
}
