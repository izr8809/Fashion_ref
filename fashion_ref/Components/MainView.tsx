import * as React from "react";
import { useDispatch } from "react-redux";
import { useCallback, useState, useEffect, useMemo } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Button} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NoticeModal from "@/Components/NoticeModal";
import SideBar from "@/Components/Sidebar";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddIcon from '@mui/icons-material/Add';
import ReferenceView from "./ReferenceView";
import { ADD_REFERENCE_REQUEST, REFERENCE_CLICK_REQUEST, SET_WORKSPACE_INFO_REQUEST } from "@/reducers/workspace";
import useInput from "@/hooks/useInput";
import { GenericHTMLFormElement } from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

type MainViewProps = {};

export default function MainView({}: MainViewProps) {
  const dispatch = useDispatch();
  const { workspaceInfo } = useSelector((state: any) => state.workspace);
  const {userCurrentWorkspaceId} = useSelector((state: any) => state.user);
  const { user } = useSelector((state: any) => state.user); 
  const [isHomeState, setIsHomeState] = useState(true);
  const [isAddingReference, setIsAddingReference] = useState(false);
  const [referenceName, onChangeReferenceName] = useInput("");
  const [isUserpage, setIsUserpage] = useState(false);
  const [searchedHashtags, setSearchedHashtags] = useState<any>([]);
  const { currentSpaceId } = useSelector((state: any) => state.workspace);

  const addReference = useCallback(()=>{
    setIsAddingReference(true);
  },[])

  // const addReference = useCallback(() => {
  //   setIsAddingNewRef(false);
  //   dispatch({
  //     type: ADD_REFERENCE_REQUEST,
  //     data: {
  //       workspaceId: userCurrentWorkspaceId,
  //       name: text,
  //     },
  //   });
  // },[userCurrentWorkspaceId, text])

  const refClickEvent = useCallback((id : number) => {
    dispatch({
      type: REFERENCE_CLICK_REQUEST,
      data:{
        referenceId: id,
      }
    })
    setIsHomeState(false)
  },[])

  // useEffect(()=>{
  //   if(user){
  //     dispatch({
  //       type: CHANGE_WORKSPACE_ID,
  //       data:{
  //         id: workspaceInfo.id
  //       }
  //     })
  //   }
  // },[user,workspaceInfo])

  useEffect(()=>{
    if(user){
      dispatch({
        type: SET_WORKSPACE_INFO_REQUEST,
        data: user,
      })
    }
  },[user])

  useEffect(()=>{
    if(currentSpaceId){
      setIsHomeState(false);
    }
  },[currentSpaceId])
  
  const closeModal = useCallback(()=>{
    setIsAddingReference(false);
  },[])

  const referenceNameSubmit = useCallback((e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(referenceName ==""){
      alert("레퍼런스 이름을 입력해주세요 ");
    }else{
      dispatch({
        type: ADD_REFERENCE_REQUEST,
        data: {
          workspaceId: userCurrentWorkspaceId,
          name: referenceName,
        },
      });
      setIsAddingReference(false);
    }
  },[userCurrentWorkspaceId, referenceName])

  return (
    <>
    {isAddingReference && <Modal
          open={true}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component="form" noValidate autoComplete="off" sx={modalstyle} onSubmit={(e)=>referenceNameSubmit(e)}>
          
          <TextField
            label="새로운 레퍼런스 이름"
            fullWidth
            sx={{ marginTop: "5px" }}
            name="user-link"
            type="text"
            value={referenceName}
            required
            variant="standard"
            onChange={onChangeReferenceName}
          />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
            >
              확인
            </Button>
            {/* </form> */}
          </Box>
          {/* <Button onClick={closeModal}>닫기</Button> */}
        </Modal>}
      
      <div id="_service-app" style={{ display: "flex", position: "relative" }}>
        <SideBar
          setIsUserpage={setIsUserpage}
          setSearchedHashtags={setSearchedHashtags}
          searchedHashtags={searchedHashtags}
          setIsHomeState={setIsHomeState}
          isHomeState={isHomeState}
        />

        <NoticeModal />
        {isHomeState ? (
          <Box sx={{ flexGrow: 1, marginTop: "10%", marginLeft:"10%" }}>
            <Typography sx={{marginBottom:"30px"}}>
              <span
                style={{
                  fontWeight: 900,
                  fontSize: "130%",
                }}
              >
                레퍼런스 목록
              </span>
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 16 }}
            >
              {workspaceInfo.References &&
                (workspaceInfo.References as Array<any>).map((ref, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={4}> 
                    <Item>
                      <li
                        style={{
                          maxWidth: "120px",
                          display: "inline-block",
                        }}
                      >
                        <Card
                          sx={{
                            maxWidth: "15",
                            marginTop: "20px",
                            // borderRadius: "24px",
                            boxShadow: "none",
                            position: "relative",
                            cursor:"pointer",
                          }}
                          onClick={()=>refClickEvent(ref.id)}
                        >
                          <CardContent>
                            <Typography>
                              <span
                                style={{
                                  fontWeight: 900,
                                  fontSize: "130%",
                                  marginBottom: "4%",
                                }}
                              >
                                {ref.name}
                              </span>
                            </Typography>
                          </CardContent>
                        </Card>
                      </li>
                    </Item>
                  </Grid>
                ))}
                  <Grid item xs={6} sm={4} md={3} lg={4}> 
                    <Item>
                      <li
                        style={{
                          maxWidth: "120px",
                          display: "inline-block",
                        }}
                      >
                        <Card
                          sx={{
                            maxWidth: "15",
                            marginTop: "20px",
                            // borderRadius: "24px",
                            boxShadow: "none",
                            position: "relative",
                            cursor:"pointer",
                          }}
                          onClick={addReference}
                        >
                          <CardContent>
                            <AddIcon/>
                          </CardContent>
                        </Card>
                      </li>
                    </Item>
                  </Grid>
            </Grid>
          </Box>
        ) : (
          <ReferenceView 
          setIsHomeState={setIsHomeState}/>
        )}
      </div>
    </>
  );
}
