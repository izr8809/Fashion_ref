import * as React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import AddIcon from "@mui/icons-material/Add";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import useInput from "@/hooks/useInput";
import { Button} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  GET_USER_POST_REQUEST,
  TOGGLE_SCROLL_REQUEST,
} from "@/reducers/post";
import WorkspaceChangeMenu from "./WorkspaceChangeMenu";
import { ADD_REFERENCE_REQUEST } from "@/reducers/workspace";
import { REFERENCE_CLICK_REQUEST } from "@/reducers/workspace";
import AlarmMenu from "./AlarmMenu";

type SideBarProps = {
  setIsUserpage: any;
  searchedHashtags : any;
  setSearchedHashtags : any;
  setIsHomeState : (arg0: boolean) => void;
  isHomeState : boolean;
};

const modalstyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function SideBar(props: SideBarProps) {
  const [onSidebar, setOnSidebar] = React.useState(true);
  const { user } = useSelector((state: any) => state.user);
  const { workspaceInfo } = useSelector((state: any) => state.workspace);
  const { userCurrentWorkspaceId } = useSelector((state: any) => state.user);
  const [isRefOpen, setIsRefOpen] = useState(false);
  const [isAddingNewRef, setIsAddingNewRef] = useState(false);
  const [text, onChangeText] = useInput("")
  const dispatch = useDispatch();

  const sidebarOnClick = React.useCallback(() => {
    setOnSidebar((prev) => !prev);

    var ServiceApp: any = document.getElementById("_service-app");
    if (onSidebar == true && ServiceApp.style) {
      ServiceApp.style.justifyContent = "center";
    } else {
      ServiceApp.style.justifyContent = null;
    }
  }, [onSidebar]);

  const myPostClick = useCallback(() => {
    if (user) {
      props.setIsUserpage(true);
      dispatch({
        type: GET_USER_POST_REQUEST,
        data: {
          workspaceId: userCurrentWorkspaceId,
        },
      });
      dispatch({
        type: TOGGLE_SCROLL_REQUEST,
      });
    } else {
      alert("로그인 해주세요.");
    }
  }, [user]);

  const addReference = useCallback(() => {
    if(text ==""){
      alert("레퍼런스 이름을 입력해주세요 ");
    }else{
      dispatch({
        type: ADD_REFERENCE_REQUEST,
        data: {
          workspaceId: userCurrentWorkspaceId,
          name: text,
        },
      });
      setIsAddingNewRef(false);
    }
  },[userCurrentWorkspaceId, text])

  const addReferenceClick = useCallback(()=>{
    setIsAddingNewRef(true);

  },[userCurrentWorkspaceId])

  const refClickEvent = useCallback((id : number) => {
    dispatch({
      type: REFERENCE_CLICK_REQUEST,
      data:{
        referenceId: id,
      }
    })
  },[])

  const closeModal = useCallback(()=>{
    setIsAddingNewRef(false);
  },[])

  return (
    <>
    {isAddingNewRef && <Modal
          open={true}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component="form" noValidate autoComplete="off" sx={modalstyle} onSubmit={addReference}>
          
          <TextField
            label="새로운 레퍼런스 이름"
            fullWidth
            sx={{ marginTop: "5px" }}
            name="user-link"
            type="text"
            value={text}
            required
            variant="standard"
            onChange={onChangeText}
          />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
              onClick={closeModal}
            >
              확인
            </Button>
            {/* </form> */}
          </Box>
          {/* <Button onClick={closeModal}>닫기</Button> */}
        </Modal>}
      {onSidebar ? (
        <div
          id="sidebar-container"
          className="sidebar-container"
          style={{ height: "100vh" }}
        >
          <div>
            <div id="sidebar" className="sidebar">
              <div>
                <div>
                  <div
                    style={{
                      display: "block",
                      flexShrink: 0,
                      flexGrow: 0,
                      height: "70px",
                      marginTop: "30px",
                    }}
                  >
                    <div
                      id="sidebar-close-icon"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "8px",
                        opacity: "70%",
                        zIndex: "100",
                        cursor: "pointer",
                      }}
                    >
                      <KeyboardDoubleArrowLeftIcon onClick={sidebarOnClick} />
                    </div>
                    <div className="sidebar-switcher">
                      <div
                        style={{
                          alignItems: "flex-start",
                          display: "flex",
                          flexDirection: "row",
                          borderBottom: "0.3px solid rgba(0,0,0,.036)",
                        }}
                      >
                        <div
                          style={{
                            maxHeight: "20px",
                            maxWidth: "10px",
                            top: "-3px",
                            marginLeft: 0,
                            paddingLeft: 0,
                          }}
                        >
                          <span></span>
                        </div>
                        <div style={{ width: "100%" }}>
                          <WorkspaceChangeMenu />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      flexGrow: 0,
                      flexShrink: 0,
                      paddingBottom: "8px",
                      height: "auto",
                    }}
                  >
                    <div className="sidebar-top">
                      <div>
                        <AlarmMenu isHomeState={props.isHomeState}/>
                        <div
                          style={{
                            flexDirection: "row",
                            flex: "1 1 auto",
                            whiteSpace: "nowrap",
                            minWidth: "0px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            alignItems: "flex-start",
                            position:"relative"
                          }}
                        >
                          <div style={{ width: "10px" }}>
                            <BrightnessLowIcon
                              sx={{ height: "20px", opacity: 0.7 }}
                            />
                          </div>
                          <div
                            style={{
                              width: "auto",
                              top:"1px",
                            }}
                          >
                            설정과 멤버
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroller">
                    <nav>
                      <div
                        className="bookmarks-header-container"
                        style={{ height: "auto" }}
                      >
                        <div style={{ height: "24px" }}>
                          <div
                            className="bookmarks-header"
                            style={{ alignItems: "flex-start" }}
                          >
                            즐겨찾기
                          </div>
                        </div>
                        <div className="bookmarks">
                          <div
                            style={{ alignItems: "flex-start", height: "auto" }}
                          >
                            준비중
                          </div>
                          <div
                            style={{ alignItems: "flex-start", height: "auto" }}
                          >
                            준비중
                          </div>
                        </div>
                      </div>

                      <div
                        className="team-header-container"
                        style={{ marginTop: "20px",
                        borderTop: "0.3px solid rgba(0,0,0,.036)", }}
                      >
                        <div className="team-header" style={{ height: "auto" }}>
                          <div
                            style={{
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginBottom: "-10px",
                              margin:0,
                              padding:0
                            }}
                          >
                            <div style={{ width: "auto", marginBottom :"-5px" }}>팀 스페이스</div>
                          </div>
                        </div>
                        <div className="team-container" style={{padding : 0, margin : 0}}>
                          <div
                            className="team"
                            style={{
                              padding : 0,
                              alignItems: "flex-start",
                            }}
                          >
                            <div
                                style={{
                                  flexDirection:"row",
                                  height :"24px",
                                  margin : 0,
                                  padding : 0,
                                  marginBottom : "10px",
                                }}>
                              <div
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  cursor: "pointer",
                                  flexDirection:"row",
                                }}
                              >
                                <div style={{width:"10px"}}>
                                  { !isRefOpen ? 
                                    (<ArrowRightIcon style={{translate:"0 -2px"}} onClick={()=>{setIsRefOpen((prev)=>!prev)}}/>) : 
                                    ( <ArrowDropDownIcon  style={{translate:"0 -2px"}} onClick={()=>{setIsRefOpen((prev)=>!prev)}}/> )                                   
                                  }
                                </div>
                                <div style={{padding:"2px 0 0 0"}} onClick={() =>{setIsRefOpen((prev)=> !prev);}}>
                                  레퍼런스
                                </div>
                              </div>
                              <div id="refAddIcon" style={{cursor:"pointer"}} onClick={addReferenceClick} > <AddIcon/></div>
                            </div>
                            {workspaceInfo.References && isRefOpen && workspaceInfo.References.map((v :any, index : number)=> (
                            <div style={{alignItems:"start", margin:0,padding:0,marginLeft:"18%", height :"auto", cursor:"pointer"}} onClick={() => {refClickEvent(v.id); props.setIsHomeState(false)}}>
                              • {v.name} 
                            </div>)) 
                            }
                            {/* {isAddingNewRef && 
                            <div style={{alignItems:"start", marginLeft:"28px", marginTop:0}}>
                              <form onSubmit={addReference}>
                                <input type="text" 
                                style={{background:"#f3f3f3", border :"#000000", height:"24px", borderRadius:"3px"}}
                                value ={text}
                                onChange={onChangeText}/>
                              </form>
                            </div>} */}
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "45px",
            opacity: "50%",
            zIndex: "100",
            cursor: "pointer",
          }}
        >
          <DensityMediumIcon onClick={sidebarOnClick} />
        </div>
      )}
    </>
  );
}
