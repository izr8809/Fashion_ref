import * as React from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import useInput from "../hooks/useInput";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { HASHTAG_SEARCH_REQUEST, loadPost } from "@/reducers/post";
import { useDispatch } from "react-redux";
import {useEffect, useRef} from 'react';

type SearchbarProps = {};

export default function Searchbar({}: SearchbarProps) {
  const [value, onChangeValue, setValue] = useInput("");
  const dispatch = useDispatch();
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
        dispatch(loadPost())
      } else if (value.split("#").length < 2) {
        alert("태그 앞에 #를 붙여주세요");
      } else {
        let upperCaseValue = value.toUpperCase();
        e.preventDefault();
        e.stopPropagation();
        dispatch({
          type: HASHTAG_SEARCH_REQUEST,
          data: {
            hashtags: "#" + upperCaseValue,
          }
        })
        setValue("")
      }
    },
    [dispatch, value]
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
