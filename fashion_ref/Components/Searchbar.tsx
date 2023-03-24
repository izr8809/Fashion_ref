import * as React from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import useInput from "../hooks/useInput";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { loadPost } from "@/reducers/post";
import { useDispatch } from "react-redux";
import {useEffect, useRef} from 'react';

type SearchbarProps = {};

export default function Searchbar({}: SearchbarProps) {
  const [value, onChangeValue] = useInput("");
  const API = `${process.env.NEXT_PUBLIC_API}/loadpost`;
  const dispatch = useDispatch();
  const HASHAPI = `${process.env.NEXT_PUBLIC_API}/hashtagsearch`;
  const searchBar = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchBar.current) {
      searchBar.current.focus();
    }
  }, []);


  const TagSearch = React.useCallback(
    (e: any) => {
      // e.preventDeafult();
      // e.stopPropagation();
      if (value == "") {
        axios
          .get(API)
          .then((result) => {
            dispatch(loadPost(result.data))
            // setPost(result.data);
            // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
            // history.replace('/login');
          })
          .catch((error) => {
            alert("포스팅 불러오기 정상적으로 되지 않았습니다.");
          });
      } else if (value.split("#").length < 2) {
        alert("태그 앞에 #를 붙여주세요");
      } else {
        let upperCaseValue = value.toUpperCase();
        e.preventDefault();
        e.stopPropagation();
        axios
          .post(
            HASHAPI,
            {
              hashtags: upperCaseValue,
            },
            {
              headers: {
                "Content-Type": "application/json",
                // 'Accept': 'application/json',
              },
            }
          )
          .then((result) => {
            dispatch(loadPost(result.data));
            onChangeValue("");
            // setCount(1)
            // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
            // history.replace('/login');
          })
          .catch((error) => {
            alert("해시태그 포함된 포스팅이 없습니다.");
            console.log(error);
          });
      }
    },
    [API, HASHAPI,dispatch, value, onChangeValue]
  );

  return (
    <>
      <form
        onSubmit={TagSearch}
        style={{ width: "70%", flex: "auto", marginLeft: "15%" }}
      >
        <IconButton
          type="submit"
          aria-label="search"
          sx={{ display: { xs: "none", md: "inline-block" } }}
        >
          <SearchIcon style={{ fill: "#9A9A9A" }} />
        </IconButton>
        <TextField
          id="search-bar"
          className="text"
          sx={{ display: "inline-block", width: "80%" }}
          value={value}
          onChange={onChangeValue}
          label="#상의 #검정"
          variant="outlined"
          placeholder="Search..."
          size="small"
          inputRef={searchBar}
        />
      </form>
    </>
  );
}
