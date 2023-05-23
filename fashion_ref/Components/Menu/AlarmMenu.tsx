import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import {
  CONFIRM_REQUEST_REQUEST,
  DELELTE_NOTI_REQUEST,
  DENY_REQUEST_REQUEST,
  logoutRequestAction,
} from "@/reducers/user";
import Input from "@mui/material/Input";
import useInput from "@/hooks/useInput";

type AlarmMenuProps = {
  isHomeState: boolean;
};
export default function AlarmMenu(props: AlarmMenuProps) {
  const { userWorkspace } = useSelector((state: any) => state.user);
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
  useEffect(() => {
    if(user){
      setFilteredNoti(
        user.Notifications.filter(
          (v: any) => v.workspaceId == userCurrentWorkspaceId
        )
      );
    }
  }, [user]);

  const confirmRequest = useCallback((id: number) => {
    dispatch({
      type: CONFIRM_REQUEST_REQUEST,
      data: {
        id: id,
      },
    });
  }, []);

  const denyRequest = useCallback((id: number) => {
    dispatch({
      type: DENY_REQUEST_REQUEST,
      data: {
        id: id,
      },
    });
  }, []);

  const deleteNoti = useCallback((id: number)=>{
    dispatch({
        type: DELELTE_NOTI_REQUEST,
        data:{
            id: id,
        }
    })

  },[])

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
          <NotificationsNoneIcon sx={{ height: "20px", opacity: 0.7 }} />
        </div>
        <div
          style={{
            width: "auto",
            top: "1px",
          }}
        >
          알림
        </div>

        <div
          style={{
            position: "absolute",
            width: "auto",
            right: 0,
          }}
        >
          {!props.isHomeState && filteredNoti.length != 0 ? (
            <div
              style={{
                backgroundColor: "#EC5E5E",
                borderRadius: "2px",
                minHeight: "0px",
                fontSize: "0.8rem",
                height: "18px",
                width: "1px",
                color: "#FFF",
                opacity: 0.8,
              }}
            >
              <span>{filteredNoti.length}</span>
            </div>
          ) : (
            <>
            {user && user.Notifications.length != 0 ? (
            <div
              style={{
                backgroundColor: "#EC5E5E",
                borderRadius: "2px",
                minHeight: "0px",
                fontSize: "0.8rem",
                height: "18px",
                width: "1px",
                color: "#FFF",
                opacity: 0.8,
              }}
            >
              <span>{user && user.Notifications.length}</span>
            </div>) : (<></>)

            }
            </>
          )}
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
        {!props.isHomeState && filteredNoti.length != 0 ? (
          user.Notifications &&
          filteredNoti.map((w: any, index: any) => (
            <MenuItem
              id="alarmMenu"
              style={{ width: "400px", marginTop: "10px" }}
            >
              <div
                style={{
                  marginLeft: "10px",
                  marginRight: "20px",
                  width: "70%",
                  padding: "10px 0",
                  fontSize: "0.8rem",
                }}
              >
                {w.content}
              </div>

              {w.notitype == 1 ? (
                <>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => confirmRequest(w.id)}
                  >
                    승인
                  </Button>
                  <Button onClick={() => denyRequest(w.id)}>거절</Button>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => deleteNoti(w.id)}
                  >
                    삭제
                  </Button>
                </>
              )}
            </MenuItem>
          ))
        ) : (
          <>
            {user && user.Notifications.map((w: any, index: any) => (
              <MenuItem
                id="alarmMenu"
                style={{ width: "400px", marginTop: "10px" }}
              >
                <div
                  style={{
                    marginLeft: "10px",
                    marginRight: "20px",
                    width: "70%",
                    padding: "10px 0",
                    fontSize: "0.8rem",
                  }}
                >
                  {w.content}
                </div>

                {w.notitype == 1 ? (
                  <>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => confirmRequest(w.id)}
                    >
                      승인
                    </Button>
                    <Button onClick={() => denyRequest(w.id)}>거절</Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => deleteNoti(w.id)}
                    >
                      삭제
                    </Button>
                  </>
                )}
              </MenuItem>
            ))}
          </>
        )}
      </Menu>
    </>
  );
}
