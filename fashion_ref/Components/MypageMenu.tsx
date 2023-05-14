import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Input from "@mui/material/Input";
import useInput from "@/hooks/useInput";
import { GET_USER_LIKED_POST_REQUEST, LOAD_POST_REQUEST, RESET_POST_REQUEST } from "@/reducers/post";



type MypageMenuProps = {
    setIsUserpage :any;
  };
  
export default function MypageMenu(props: MypageMenuProps) {
  const { userWorkspace } = useSelector((state: any) => state.user);
  const { userCurrentWorkspaceId } = useSelector((state: any) => state.user);
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const { workspaceInfo } = useSelector((state: any) => state.workspace);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [value, onChangeValue, setValue] = useInput("");
  const { currentSpaceId } = useSelector((state: any) => state.workspace);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const loadmyPost = useCallback(()=>{
    handleClose();
    dispatch({
        type: RESET_POST_REQUEST,
    })
    dispatch({
        type:LOAD_POST_REQUEST,
        data:{
            referenceId : currentSpaceId,
        }
    })
    props.setIsUserpage(true);
  },[currentSpaceId])

  const loadUserLikedPost = useCallback(() => {
    handleClose();
    dispatch({
        type: RESET_POST_REQUEST,
    })
    dispatch({
      type: GET_USER_LIKED_POST_REQUEST,
      data: {
        referenceId: currentSpaceId,
      },
    })

  }, [user]);
  


  return (
    <>
      <div style={{transform:"translate(0,-90%)"}}>
        <div
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ display: "block" }}
        >
            <Button>
                MY PAGE
            </Button>
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
            <MenuItem
              style={{ width: "140px", marginTop: "10px" }}
            >
                <Button
                type="submit"
                sx={{
                    width: "100%",
                    borderRadius: 0,
                    boxShadow: "none",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    color: "rgba(25,23,17,.6)",
                }}
                size="small"
                onClick={loadmyPost}
                >
                내 게시물
                </Button>
            </MenuItem>

            <MenuItem
              style={{ width: "140px", marginTop: "10px" }}
            >
                <Button
                type="submit"
                sx={{
                    width: "100%",
                    marginTop: "10px",
                    borderRadius: 0,
                    boxShadow: "none",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    color: "rgba(25,23,17,.6)",
                }}
                size="small"
                onClick={loadUserLikedPost}
                >
                좋아요 누른 게시물
                </Button>
            </MenuItem>

      </Menu>
    </>
  );
}
