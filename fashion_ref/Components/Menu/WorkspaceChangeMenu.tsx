import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { ADD_WORKSPACE_REQUEST, CHANGE_WORKSPACE_ID, REQUEST_WORKSPACE_PERMISSION_REQUEST, logoutRequestAction } from "@/reducers/user";
import Input from "@mui/material/Input";
import useInput from "@/hooks/useInput";
import { CHANGE_WORKSPACE_REQUEST, UPDATE_WORKSPACE_INFO } from "@/reducers/workspace";
import { RESET_POST_REQUEST } from "@/reducers/post";

export default function WorkspaceChangeMenu() {
  const { userWorkspaces } = useSelector((state: any) => state.user);
  const { userCurrentWorkspaceId } = useSelector((state: any) => state.user);
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const { workspaceInfo } = useSelector((state: any) => state.workspace);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [switcherName, setSwitcherName] = useState("");
  const { logOutLoading } = useSelector((state: any) => state.user);
  const [isAddWorkspace, setIsAddWorkspace] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [placeholderName, SetPlaceholderName] = useState("");
  const [inputOpen, isInputOpen] = useState(false);
  const open = Boolean(anchorEl);
  const [brandcode, setBrandcode] = useState("");
  const [value, onChangeValue, setValue] = useInput("");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const addWorkspaceButtonClick = useCallback(() => {
    setIsAddWorkspace((prev) => !prev);
  }, []);

  useEffect(() => {
    if (workspaceInfo && user) {
      if (workspaceInfo.name.split("_")[0] == "private") {
        setSwitcherName(`${user.name}'s Reference`);
      } else {
        setSwitcherName(workspaceInfo.name);
      }
      setBrandcode(workspaceInfo.code)
    }
  }, [workspaceInfo,user]);

  const Logout = useCallback(() => {
    dispatch(logoutRequestAction())
  }, []);

  useEffect(()=>{
    if(!user){
      window.location.href="/";
    }
  },[user])

  const sumbitForm = useCallback((e:React.FormEvent<HTMLFormElement>)=>{
    if(value ==""){
      alert("코드 혹은 이름을 입력해주세요")
    }else{
      if(isCode){
        //addUser in existing workspace
        dispatch({
          type: REQUEST_WORKSPACE_PERMISSION_REQUEST,
          data: {
            code : value,
            workspaceId : userCurrentWorkspaceId,
          }
        })
      }else{
        //addworkspace
        dispatch({
          type: ADD_WORKSPACE_REQUEST,
          data: {
            name : value,
          }
        })
      }
    }

  },[isCode, value, userCurrentWorkspaceId])

  const loadWorkspace = useCallback((id : number)=>{
      const selectedWorkspace = user.Workspaces.find((v:any) => v.id === id)
      dispatch({
        type:UPDATE_WORKSPACE_INFO,
        data:{
          selectedWorkspaceInfo : selectedWorkspace, 
        }
      })
      dispatch({
        type: CHANGE_WORKSPACE_ID,
        data: {
          id : id,
        }
      })
      dispatch({
        type: RESET_POST_REQUEST,
      })
      dispatch({
        type: CHANGE_WORKSPACE_REQUEST,
        data:{
          workspaceId : id,
          referenceId : null,
        }
      })
      handleClose();
      setSwitcherName(selectedWorkspace.name);
      setBrandcode(selectedWorkspace.code);

  },[workspaceInfo, userWorkspaces, user])

  return (
    <>
      <div>
        <div
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ display: "block" }}
        >
          {switcherName}
        </div>
        <div style={{display:"block", fontSize:"0.7rem", opacity: 0.6}}>
          브랜드 코드 : {brandcode} 
        </div>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          top: "32px",
        }}
      >
        {user &&
          user.Workspaces.map((w: any, index: any) => (
            [
            <MenuItem
              onClick={()=>loadWorkspace(w.id)}
              style={{ width: "244px", marginTop: "10px" }}
              key = {w.id}
            >
              {w.name.split("_")[0] == "private" ? user.name +"님의 작업실" : w.name}
            </MenuItem>
            ]
          ))}

        <Button
          id="workspaceAddButton"
          type="submit"
          variant="contained"
          sx={{
            width: "100%",
            marginRight: "5px",
            marginTop: "10px",
            borderRadius: 0,
            borderTop: "0.3px solid lightgray",
            boxShadow: "none",
            display: "inline-block",
            whiteSpace: "nowrap",
            backgroundColor: "white",
            color: "rgba(25,23,17,.6)",
          }}
          size="small"
          onClick={addWorkspaceButtonClick}
        >
          팀 스페이스 추가
        </Button>
        {isAddWorkspace && (
          <div
            style={{
              width: "auto",
              marginTop: "10px",
              borderRadius: 0,
              boxShadow: "none",
              whiteSpace: "nowrap",
              backgroundColor: "white",
              color: "rgba(25,23,17,.6)",
              paddingBottom: "20px",
              borderBottom: "0.3px solid lightgray",
            }}
          >
            <Button
              variant="contained"
              style={{ width: "10%", marginLeft: "15%" }}
              onClick={()=>{SetPlaceholderName("코드 입력"); isInputOpen(true); setValue(""); setIsCode(true)}}
            >
              코드입력
            </Button>
            <Button
              variant="contained"
              style={{ width: "10%", marginRight: "15%", float: "right" }}
              onClick={()=>{SetPlaceholderName("이름 입력"); isInputOpen(true);setValue(""); setIsCode(false)}}
            >
              새로생성
            </Button>
            {inputOpen && <div style={{marginTop:"10%", width:"80%"}}>
              <form
                onSubmit={sumbitForm}
                style={{ marginLeft: "5%" }}
              >
                <Input
                  placeholder={placeholderName}
                  required
                  sx={{ width: "60%", marginLeft: "10%" }}
                  value={value}
                  onChange={onChangeValue}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  sx={{ marginLeft: "5%" }}
                >
                  확인
                </Button>
              </form>
            </div>}
            
          </div>
        )}

        <LoadingButton
          id="logoutButton"
          type="submit"
          variant="contained"
          sx={{
            width: "100%",
            marginRight: "5px",
            borderRadius: 0,
            boxShadow: "none",
            display: "inline-block",
            whiteSpace: "nowrap",
            backgroundColor: "white",
            color: "rgba(25,23,17,.6)",
          }}
          size="small"
          onClick={Logout}
          loading={logOutLoading}
        >
          로그아웃
        </LoadingButton>
      </Menu>
    </>
  );
}
