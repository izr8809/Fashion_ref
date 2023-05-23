import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useInput from "../hooks/useInput";
import styled from "@emotion/styled";
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

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  z-index: 3;
  position:relative;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`

const DeleteButton = styled.div`
  cursor: pointer;
  margin-right : 19px;
`

const DropDownBox = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
  position:absolute;
  width:100%;
`

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: lightgray;
  }
`


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
  const [inputValue, setInputValue] = useState("")
  const [isHaveInputValue, setIsHaveInputValue] = useState(false)
  const [dropDownList, setDropDownList] = useState([])
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)
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
    [dispatch, value,currentSpaceId]
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

  const showDropDownList = useCallback(() => {
    if (inputValue === '') {
      setIsHaveInputValue(false)
      setDropDownList([])
    } else {
      var value = (inputValue.split("#").length > 1) ? inputValue.split("#")[1] : inputValue; 
      const index = workspaceInfo.References.findIndex((v:any) => v.id == currentSpaceId);
      const choosenTextList = workspaceInfo.References[index].Hashtags.filter((textItem :any) =>
        textItem.name.includes(value)
      )
      setDropDownList(choosenTextList)
    }
  },[inputValue, currentSpaceId]);

  const changeInputValue = (event:any) => {
    setInputValue(event.target.value)
    setIsHaveInputValue(true)
  }

  const clickDropDownItem = useCallback( (clickedItem:any) => {
    setInputValue("")
    let hashArray = [...searchedTags, clickedItem.name];
    setSearchedTags(hashArray);
    dispatch({
      type: HASHTAG_SEARCH_REQUEST,
      data: {
        hashtags: "#" + clickedItem.name,
        referenceId: currentSpaceId,
      },
    });
    setIsHaveInputValue(false)
  },[currentSpaceId, searchedTags]);

  const handleDropDownKey = (event:any) => {
    //input에 값이 있을때만 작동
    if (isHaveInputValue) {
      if (
        event.key === 'ArrowDown' &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1)
      }

      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1)
      if (event.key === 'Enter' && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex])
        setDropDownItemIndex(-1)
      }
    }
  }

  useEffect(()=>{
    showDropDownList();
  }, [inputValue])

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
                transform: "translate(0, 70%)",
                zIndex: 5,
              }}
            />
            {/* <TextField
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
              onKeyUp={handleDropDownKey}
            /> */}
            
            <InputBox >
              <Input
                type='text'
                value={inputValue}
                onChange={changeInputValue}
                onKeyUp={handleDropDownKey}
              />
              <DeleteButton onClick={() => setInputValue("")}>&times;</DeleteButton>
            </InputBox>
            {isHaveInputValue && (
              <DropDownBox>
                {dropDownList && dropDownList.length === 0 && (
                  <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
                )}
                {dropDownList && dropDownList.map((dropDownItem :any, dropDownIndex) => {
                  return (
                    <DropDownItem
                      key={dropDownIndex}
                      onClick={() => clickDropDownItem(dropDownItem)}
                      onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                      className={
                        dropDownItemIndex === dropDownIndex ? 'selected' : ''
                      }
                    >
                      
                    <SearchIcon/>#{dropDownItem.name}
                    </DropDownItem>
                  )
                })}
              </DropDownBox>
            )}
          </form>
        </div>
        <div style={{ marginTop: "10px", display: "flex", height:"28px" }}>
          <div
            style={{
              width: "8%",
              textAlign: "center",
              padding: "10px 0",
              fontSize: "0.7rem",
            }}
          >
            저장된 태그
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
       <div style={{padding:"10px"}}>
    </div>
    </>
  );
}
