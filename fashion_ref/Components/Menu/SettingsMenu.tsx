import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import Input from "@mui/material/Input";
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import useInput from "@/hooks/useInput";
import { ADD_ADMIN_USER_REQUEST, DELETE_ADMIN_USER_REQUEST, DELETE_MEMBER_REQUEST } from "@/reducers/workspace";

type SettingsMenuProps = {
  isHomeState: any;
};
export default function SettingsMenu(props: SettingsMenuProps) {
  const { userWorkspaces } = useSelector((state: any) => state.user);
  const { userCurrentWorkspaceId } = useSelector((state: any) => state.user);
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const { workspaceInfo } = useSelector((state: any) => state.workspace);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [filteredNoti, setFilteredNoti] = useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const addAdminUser = useCallback((id : number)=>{
    dispatch({
      type: ADD_ADMIN_USER_REQUEST,
      data:{
        targetUserId : id,
        workspaceId : userCurrentWorkspaceId,
      }
    })
  },[userCurrentWorkspaceId])

  const deleteAdminUser = useCallback((id : number)=> {
    dispatch({
      type: DELETE_ADMIN_USER_REQUEST,
      data:{
        targetUserId : id,
        workspaceId : userCurrentWorkspaceId,
      }
    })
  },[userCurrentWorkspaceId])

  const deleteMember = useCallback((id : number)=> {
    dispatch({
      type: DELETE_MEMBER_REQUEST,
      data:{
        targetUserId : id,
        workspaceId : userCurrentWorkspaceId,
      }
    })
  },[userCurrentWorkspaceId])

  return (
    <>
      <div
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          flexDirection: "row",
          flex: "1 1 auto",
          whiteSpace: "nowrap",
          minWidth: "0px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <div style={{ width: "10px" }}>
          <BrightnessLowIcon sx={{ height: "20px", opacity: 0.7 }} />
        </div>
        <div
          style={{
            width: "auto",
            top: "1px",
          }}
        >
          설정과 멤버
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
          <>
            {workspaceInfo && workspaceInfo.Users.map((w: any, index: any) => (
              <MenuItem
                id="alarmMenu"
                style={{ width: "400px", marginTop: "10px" }}
              >
              {workspaceInfo.WorkspaceAdministrators && workspaceInfo.WorkspaceAdministrators.find((v:any)=> v.id === w.id) ? <div style={{
                backgroundColor: "#EC5E5E",
                borderRadius: "2px",
                minHeight: "0px",
                fontSize: "0.8rem",
                height: "18px",
                width: "70px",
                color: "#FFF",
                textAlign:"center",
                opacity: 0.8,}}>관리자</div> : <></>}
                <div
                  style={{
                    marginLeft: "10px",
                    marginRight: "20px",
                    width: "70%",
                    padding: "10px 0",
                    fontSize: "0.8rem",
                  }}
                >
                  {w.name}
                </div>
                {workspaceInfo.WorkspaceAdministrators && workspaceInfo.WorkspaceAdministrators.find((v:any)=> v.id === w.id) ? 
                <Button
                      // variant="contained"
                      size="small"
                      sx={{width:"30%", marginRight:"5px"}}
                      onClick={() => deleteAdminUser(w.id)}
                    >
                      관리자 해제
                    </Button> : 
                    <Button
                      // variant="contained"
                      size="small"
                      sx={{width:"30%", marginRight:"5px"}}
                      onClick={() => addAdminUser(w.id)}
                    >
                      관리자 등록
                    </Button>}
                    <Button 
                      variant="contained" 
                      size="small"
                      onClick={() => deleteMember(w.id)}>내보내기</Button>
              </MenuItem>
            ))}
          </>
      </Menu>
    </>
  );
}
