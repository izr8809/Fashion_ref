import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useInput from "../hooks/useInput";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import {
  HASHTAG_SEARCH_REQUEST,
  RESET_POST_REQUEST,
  loadPost,
} from "@/reducers/post";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import { ADD_TAG_REQUEST, DELETE_SAVEDTAGS_REQUEST } from "@/reducers/workspace";
import { set } from "immer/dist/internal";

type SearchbarProps = {
  setIsUserpage: any;
  setIsHomeState:any;
};

export default function Searchbar({ setIsUserpage,setIsHomeState }: SearchbarProps) {
  const [value, onChangeValue, setValue] = useInput("");
  const dispatch = useDispatch();
  const {postArray} = useSelector((state: any) => state.post); 
  const searchBar = useRef<HTMLInputElement>(null);
  const [searchedTags, setSearchedTags] = useState<any>([]);
  const [savedTagsArray, setSavedTagsArray] = useState<any>([]);
  const { currentSpaceId } = useSelector((state: any) => state.workspace);
  const { userCurrentWorkspaceId } = useSelector((state: any) => state.user);
  const { workspaceInfo } = useSelector((state: any) => state.workspace);
  const [emptySearchedTagsError, setEmptySearchedTagsError] = useState(false);
  const [referenceIndex, setReferenceIndex] = useState(0);
  useEffect(() => {
    if (searchBar.current) {
      searchBar.current.focus();
    }
  }, []);

  const TagSearch = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (value == "") {
        dispatch(loadPost());
      } else if (value.split("#").length < 2) {
        alert("태그 앞에 #를 붙여주세요");
      } else {
        let upperCaseValue = value.toUpperCase();
        let hashtags = upperCaseValue.match(/#[^\s#]+/g);
        let hashArray = [...searchedTags, ...hashtags];
        setSearchedTags(hashArray);

        let hashTextize = "";
        hashArray.map((v, index) => (hashTextize += v + " "));

        dispatch({
          type: HASHTAG_SEARCH_REQUEST,
          data: {
            hashtags: hashTextize,
            referenceId: currentSpaceId,
          },
        });
        setValue("");
        setIsUserpage(false);
      }
    },
    [dispatch, value]
  );

  const saveTag = useCallback(() => {
    if (searchedTags.length == 0) {
      setEmptySearchedTagsError(true);
    } else {
      let hashTextize = "";
      searchedTags.map((v: any, index: number) => (hashTextize += v + " "));

      dispatch({
        type: ADD_TAG_REQUEST,
        data: {
          tags: hashTextize,
          referenceId: currentSpaceId,
          workspaceId: userCurrentWorkspaceId,
        },
      });
    }
  }, [value, userCurrentWorkspaceId, currentSpaceId, searchedTags]);

  const savedTagsClick = useCallback(
    (e: any, hashs: string) => {
      e.preventDefault();
      e.stopPropagation();
      let hashtags = hashs.match(/#[^\s#]+/g);
      if (hashtags != null) {
        let hashArray = [...searchedTags, ...hashtags];
        setSearchedTags(hashArray);
        dispatch({
          type: HASHTAG_SEARCH_REQUEST,
          data: {
            hashtags: hashs,
            referenceId: currentSpaceId,
          },
        });
      }
    },
    [currentSpaceId, searchedTags]
  );

  useEffect(() => {
    const refIndex = workspaceInfo.References?.findIndex(
      (v: any) => v.id === currentSpaceId
    );
    if(workspaceInfo.References.length !=0){
      setSavedTagsArray(workspaceInfo.References[refIndex].SavedHashs)
    }else{
      setSavedTagsArray([]);
      setIsHomeState(true);
    }
  }, [workspaceInfo, currentSpaceId]);


  //initiailize searchedTags when workspaces changed
  useEffect(()=>{
    setSearchedTags([])
  },[workspaceInfo, currentSpaceId])

  const delSearchedTags = useCallback(
    (index: number) => {
      let sliced = searchedTags.splice(index, 1);
      setSearchedTags([...searchedTags]);

      let hashTextize = "";
      searchedTags.map((v: any, index: number) => (hashTextize += v + " "));
      if (hashTextize == "") {
        dispatch({
          type: RESET_POST_REQUEST,
        });
      } else {
        dispatch({
          type: HASHTAG_SEARCH_REQUEST,
          data: {
            hashtags: hashTextize,
            referenceId: currentSpaceId,
          },
        });
      }
    },
    [searchedTags, currentSpaceId]
  );

  const savedTagsDelete = useCallback((e: any, index: number) => {
    e.preventDefault();
    e.stopPropagation()
    let tempArray = [...savedTagsArray];
    let sliced = tempArray.splice(index, 1);
    setSavedTagsArray([...tempArray]);

    dispatch({
      type:DELETE_SAVEDTAGS_REQUEST,
      data:{
        id : index,
        workspaceId : userCurrentWorkspaceId,
      }
    })
  }, [savedTagsArray, userCurrentWorkspaceId]);

  return (
    <>
      <div style={{ width: "60%", marginTop: "20px" }}>
        <div style={{ width: "100%" }}>
          <form
            onSubmit={(e) => TagSearch(e)}
            style={{ flex: "auto", position: "relative" }}
          >
            <SearchIcon
              style={{
                fill: "#9A9A9A",
                position: "absolute",
                right: "3px",
                transform: "translate(0, 40%)",
              }}
            />
            <TextField
              id="search-bar"
              className="text"
              sx={{
                display: "inline-block",
                width: "100%",
                "> div": { width: "100%" },
              }}
              value={value}
              onChange={onChangeValue}
              label="#상의 #검정"
              variant="outlined"
              placeholder="Search..."
              size="small"
              inputRef={searchBar}
            />
          </form>
        </div>
        <div style={{ marginTop: "10px", display: "flex", height:"28px" }}>
          <div
            style={{
              width: "11%",
              textAlign: "center",
              padding: "10px 0",
              fontSize: "0.7rem",
            }}
          >
            저장된 태그 그룹
          </div>
          <div style={{ width: "92%" }}>
            {savedTagsArray.map(
                (v: any, index: number) => (
                  <div
                    style={{ margin: "2px", display: "inline-block" }}
                    key={index}
                  >
                    <div
                      className={`Tag${index % 8} Tag`}
                      style={{ display: "inline-block", margin: "2px", fontSize:"0.7rem", height: "28px", width:"120%" }}
                      onClick={(e) => {
                        savedTagsClick(e, v.hashs);
                      }}
                    >
                      <a href="">{v.hashs}</a>
                      <ClearIcon
                        onClick={(e) => savedTagsDelete(e, v.id)}
                        style={{
                          marginLeft: "3px",
                          height: "13px",
                          cursor: "pointer",
                          position: "absolute",
                        }}
                      />
                    </div>{" "}
                    &nbsp;
                  </div>
                )
              )}
          </div>
        </div>

        <div style={{ marginTop: "10px", display: "flex" }}>
          <div
            style={{
              width: "8%",
              textAlign: "center",
              padding: "10px 0",
              fontSize: "0.7rem",
            }}
          >
            검색한 태그
          </div>
          <div style={{ width: "92%", display:"flex" }}>
            {searchedTags.map((v: any, index: number) => (
              <div
                style={{ margin: "2px", display: "inline-block", height: "28px" }}
                key={index}
              >
                <div
                  className={`Tag${index % 8} Tag`}
                  style={{ display: "inline-block", margin: "2px", fontSize:"0.7rem",width:"120%" }}
                >
                  <a href="">{v}</a>
                  <ClearIcon
                    onClick={() => delSearchedTags(index)}
                    style={{
                      marginLeft: "3px",
                      height: "13px",
                      cursor: "pointer",
                      position: "absolute",
                    }}
                  />
                </div>{" "}
                &nbsp;
              </div>
            ))}
            {searchedTags.length != 0 ? (
              <Button
                // variant="contained"
                sx={{
                  whiteSpace: "nowrap",
                  marginLeft: "15px",
                }}
                onClick={saveTag}
                size="small"
              >
                검색한 태그 저장
              </Button>
            ) : (
              <></>
            )}
            {emptySearchedTagsError && (
              <span style={{ color: "red" }}>검색된 태그가 없습니다.</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
