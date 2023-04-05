import * as React from "react";
import Card from "@mui/material/Card";
import { experimentalStyled as styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  DELETE_POST_REQUEST,
  DUPLICATE_POST_REQUEST,
  HASHTAG_SEARCH_REQUEST,
  LIKE_POST_REQUEST,
  loadPost,
  TOGGLE_ISEDIT_REQUEST,
  UNLIKE_POST_REQUEST,
} from "@/reducers/post";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import LoginForm from "./LoginForm";
import Upload from "./upload";

type CardpostProps = {
  index: number;
  // posts: any[];
  category: string;
  id: number;
  brand: string;
  link: string;
  Images: {
    src: string;
  }[];
  season: string;
  reason: string;
  name: string;
  hashtags: {
    PostHashtag: {
      HashtagId: number;
    };
    name: string;
  }[];
  likers: any[];
};
const style = {
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

const StyledCardAction = styled(CardActions)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function Cardpost(props: CardpostProps) {
  const { logInDone } = useSelector((state: any) => state.user);
  const { user } = useSelector((state: any) => state.user);
  const { postArray } = useSelector((state: any) => state.post);
  const dispatch = useDispatch();
  // const isLoggedIn = false;
  const [uploadModalClicked, setUploadModalClicked] = useState(false);
  const [like, setLike] = useState(false);
  const {isEdit} = useSelector((state: any) => state.post);
  const [likeClick, setLikeClick] = useState(props.likers?.length || 0);
  const [loginModalOpen, setIsLoginFormOpen] = useState(false);
  const [isUploadFormOpen, setIsUploadFormOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const [modalOpen, setModalOpen] = React.useState(false);
  const [ImagePath, setImagePath] = React.useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const onToggleLike = useCallback(() => {
    if (user) {
      setLike((prev) => !prev);

      if (!like) {
        dispatch({
          type: LIKE_POST_REQUEST,
          data: props.id,
        });
        setLikeClick((prev) => prev + 1);
      } else {
        dispatch({
          type: UNLIKE_POST_REQUEST,
          data: props.id,
        });
        setLikeClick((prev) => prev - 1);
      }
    } else {
      alert("로그인 해주세요");
      setIsLoginFormOpen(true);
      //로그인 모달 띄우기 넣어야
    }
  }, [user, like, props.id]);

  const delClick = useCallback(() => {
    if (user) {
      setModalOpen(true);
    } else {
      alert("로그인 해주세요");
      setIsLoginFormOpen(true);
      //로그인 모달 띄우기 넣어야
    }
  }, [user]);

  const duplicateClick = useCallback(() => {
    if (!user) {
      return alert("로그인이 필요합니다.");
    }

    return dispatch({
      type: DUPLICATE_POST_REQUEST,
      data: props.id,
    });
  }, [dispatch, props.id, user]);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();

      if (!user) {
        return alert("로그인이 필요합니다.");
      }

      return dispatch({
        type: DELETE_POST_REQUEST,
        data: props.id,
      });
    },
    [dispatch, props.id, user]
  );

  const editClick = () => {
    if (!user) {
      return alert("로그인이 필요합니다.");
    }
    setIsUploadFormOpen(true);
    if(!isEdit){
      dispatch({
        type: TOGGLE_ISEDIT_REQUEST,
        data : true,
      })
    }

    // alert("준비중입니다.");
  };

  useEffect(() => {
    if (props.Images[imageIndex] == undefined) {
    } else {
      // console.log("props")
      // console.log(props)
      setImagePath(`../${props.Images[imageIndex].src}`);
    }
  }, [props.Images,imageIndex]);

  const onClickRightArrow = useCallback(()=>{
    if(imageIndex < props.Images.length){
      setImageIndex((prev)=> prev+1)
    }
  },[props.Images, imageIndex])
  
  const onClickLeftArrow = useCallback(()=>{
    if(imageIndex > 0){
      setImageIndex((prev)=> prev-1)
    }
  },[imageIndex])


  const TagClick = React.useCallback(
    (e: any, hashname: string) => {
      e.preventDefault();
      e.stopPropagation();

      dispatch({
        type: HASHTAG_SEARCH_REQUEST,
        data: {
          hashtags: "#" + hashname,
        },
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [dispatch, props]
  );

  useEffect(() => {
    //like 눌렀는지
    if (user?.data && props.likers) {
      const isUserLiked = props.likers.find((v) => v.id === user?.data.id);
      if (isUserLiked) setLike(true);
      else setLike(false);
    }
  }, [props.likers, user, props.id, logInDone]);

  return (
    <>
      {isUploadFormOpen && isEdit && (
        <Upload
          setUploadModalClicked ={setUploadModalClicked}
          uploadModalClicked={uploadModalClicked}
          setImageIndex ={setImageIndex}
          setuploadModalOpen={setIsUploadFormOpen}
          uploadModalOpen={isUploadFormOpen}
          postId={props.id}
          clipboardFile={null}
        />
      )}
      {loginModalOpen && (
        <LoginForm
          loginModalOpen={loginModalOpen}
          setloginModalOpen={setIsLoginFormOpen}
        />
      )}
      {modalOpen && (
        <Modal
          open={true}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
            sx={style}
          >
            {/* <form onSubmit={onSubmit}> */}
            <Typography
              component="h2"
              variant="h5"
              sx={{ textAlign: "center", marginBottom: "15px" }}
            >
              정말 삭제하시겠습니까?
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: "40%",
                marginLeft: "5%",
                marginRight: "10%",
              }}
              size="large"
            >
              삭제
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, width: "40%" }}
              size="large"
              onClick={closeModal}
            >
              취소
            </Button>
            {/* </form> */}
          </Box>
          {/* <Button onClick={closeModal}>닫기</Button> */}
        </Modal>
      )}
      <Card
        sx={{
          maxWidth: "15",
          marginTop: "20px",
          // borderRadius: "24px",
          boxShadow: "none",
          position: "relative",
        }}
      >
        <CardActionArea href={`${props.link}`} target="_blank">
          <CardMedia
            component="img"
            height="400"
            image={ImagePath}
            // alt="이미지 오류, 삭제 후 다시 등록해주세요"
          />
        </CardActionArea>
        {props.Images && props.Images.length > 1 && (
          <>
            <ArrowRightIcon
              onClick={onClickRightArrow}
              style={{ position: "absolute", top: "30%", right: "0%", zIndex: 100, color:"#3D3D3D", cursor:"pointer"}}
            />
            <Brightness1RoundedIcon 
              style={{ position: "absolute", top: "30%", right: "0%", color:"#B5B5B7" }}
            />
            <ArrowLeftIcon
              onClick={onClickLeftArrow}
              style={{ position: "absolute", top: "30%", left: "0%", zIndex: 100, color:"#3D3D3D",cursor:"pointer" }}
            />
            <Brightness1RoundedIcon 
              style={{ position: "absolute", top: "30%", left: "0%", color:"#B5B5B7" }}
            />
          </>
        )}

        <CardContent>
          <div
            style={{
              width: "100%",
              marginBottom: "3%",
              display: "inline-block",
            }}
          >
            <FileCopyIcon
              id="copyicon"
              onClick={duplicateClick}
              sx={{
                ":hover": { opacity: "50%" },
                cursor: "pointer",
                marginRight: "17px",
                opacity: "25%",
                width: "0.9em",
              }}
            />
            <EditIcon
              id="editicon"
              onClick={editClick}
              sx={{
                ":hover": { opacity: "50%" },
                cursor: "pointer",
                opacity: "25%",
                width: "0.9em",
              }}
            />
            <DeleteIcon
              id="delicon"
              onClick={delClick}
              sx={{
                ":hover": { opacity: "50%" },
                cursor: "pointer",
                marginLeft: "17px",
                opacity: "25%",
                width: "0.9em",
              }}
            />
          </div>
          <Typography>
            <span
              style={{
                fontWeight: 900,
                fontSize: "130%",
                marginBottom: "4%",
              }}
            >
              {`${props.brand}`}
            </span>
          </Typography>

          {/* <span style={{fontWeight :900, fontSize: "100%", marginBottom: 5}}>
            참고할 부분
          </span> */}
          <Typography
            sx={{ fontWeight: 900, marginBottom: "2%" }}
            variant="subtitle2"
            color="text.secondary"
          >
            참고할 부분
          </Typography>

          <Typography
            sx={{ marginBottom: "1%" }}
            variant="body2"
            color="text.secondary"
          >
            {props.reason}
          </Typography>
        </CardContent>
        <StyledCardAction>
          <div
            style={{
              width: "100%",
              display: "inline-block",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                width: "20%",
                marginBottom: "3%",
                verticalAlign: "center",
                display: "inline-block",
                float: "left",
              }}
            >
              {like ? (
                <FavoriteIcon
                  onClick={onToggleLike}
                  sx={{ cursor: "pointer", opacity: "80%", color: "#FF3040" }}
                />
              ) : (
                <FavoriteBorderTwoToneIcon
                  onClick={onToggleLike}
                  sx={{ cursor: "pointer", opacity: "40%" }}
                />
              )}
              <span
                style={{
                  position: "relative",
                  top: "-7px",
                  marginLeft: "5px",
                  color: "#A6A6A6",
                }}
              >
                {likeClick ? likeClick : 0}
              </span>
            </div>
          </div>
          {/* <Button size="small" color="primary">
          Share
        </Button> */}
          {/* <div style={{ margin: "2px" }}>
          <div
            className={`Tag${parseInt(props.season) % 10} Tag`}
            style={{ display: "inline-block", margin: "2px" }}
          >
            <a href="">#{season}</a>
          </div>{" "}
          &nbsp;
        </div>
        <div style={{ margin: "2px" }}>
          <div
            className={`TagCategory Tag`}
            style={{ display: "inline-block", margin: "2px" }}
          >
            <a href="">#{category}</a>
          </div>{" "}
          &nbsp;
        </div> */}
          {props.hashtags.map((hashtag, index) => (
            <div style={{ margin: "2px" }} key={index}>
              <div
                className={`Tag${hashtag.PostHashtag.HashtagId % 8} Tag`}
                style={{ display: "inline-block", margin: "2px" }}
                onClick={(e) => {
                  TagClick(e, hashtag.name);
                }}
              >
                <a href="">#{hashtag.name}</a>
              </div>{" "}
              &nbsp;
            </div>
          ))}

          <div style={{ width: "100%" }}>
            <span
              style={{
                float: "left",
                color: "#A6A6A6",
                fontSize: "80%",
                marginTop: "10px",
              }}
            >
              작성자 : {props.name}
            </span>
          </div>
        </StyledCardAction>
      </Card>
    </>
  );
}
