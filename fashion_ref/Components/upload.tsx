import React, {
  useCallback,
  ChangeEvent,
  useMemo,
  useRef,
  useState,
  useEffect,
  ReactElement,
} from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import useInput from "../hooks/useInput";
import { FileUploader } from "react-drag-drop-files";
import Image from "next/image";
import { useSelector } from "react-redux";
import Router from "next/router";
import { useDispatch } from "react-redux";
import {
  addPost,
  ADD_POST_REQUEST,
  EDIT_POST_REQUEST,
  EDIT_POST_WITH_IMAGES_REQUEST,
  GET_HASHTAGS_REQUEST,
  loadPost,
  TOGGLE_ADD_POST_DONE_REQUEST,
  TOGGLE_EDIT_POST_DONE_REQUEST,
  TOGGLE_EDIT_POST_WITH_IMAGES_DONE_REQUEST,
} from "@/reducers/post";
import { and } from "sequelize";
const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

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
type UploadProps = {
  setImageIndex : any;
  setuploadModalOpen: any;
  uploadModalOpen: boolean;
  isEdit: boolean;
  setIsEdit: any;
  postId: number | null;
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
interface postType {
  title: string;
  desc: string;
  photos: [];
}

interface IFileTypes {
  id: number;
  object: File;
}
export default function Upload(props: UploadProps) {
  const dispatch = useDispatch();
  const [isInitialOpen, setIsInitialOpen] = useState(true);
  const { user } = useSelector((state: any) => state.user);
  const { postArray } = useSelector((state: any) => state.post);
  const { hashtags } = useSelector((state: any) => state.post);

  const [file, setFile] = useState({ name: "" });
  const [imageFile, setImageFile] = useState<any>();
  const [isImage, setIsImage] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [reason, onChangeReason, setReason] = useInput("");
  const [brand, onChangeBrand, setBrand] = useInput("");
  const [link, onChangeLink, setLink] = useInput("");
  const [showHashModalOpen, setShowHashModalOpen] = React.useState(false);
  const { addPostLoading } = useSelector((state: any) => state.post);
  const { addPostDone } = useSelector((state: any) => state.post);
  const { editPostDone } = useSelector((state: any) => state.post);
  const { editPostWithImagesDone } = useSelector((state: any) => state.post);
  const [post, setPost] = useState({
    title: "",
    desc: "",
    photos: [null],
  });
  const closeModal = useCallback(() => {
    props.setuploadModalOpen(false);
  }, []);

  const { title, desc, photos } = post;
  const closehashtagsModal = () => {
    setShowHashModalOpen(false);
  };
  const inputRef = useRef(null);
  const [category, setCategory] = React.useState("상의");
  const [season, setSeason] = React.useState("23SS");
  const [text, onChangeText, setText] = useInput("");
  const [cardPost, setCardPost] = useState([]);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const handleSeasonChange = (event: SelectChangeEvent) => {
    setSeason(event.target.value as string);
  };
  const handlefilechange = (e: ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    handfiles(files);
  };
  const handfiles = (files: FileList | null) => {
    let photosArr: any[] = [];
    let fileArr: any[] = [];
    if (files != undefined) {
      setIsImage(true);
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        fileArr.push(file);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", () => {
          let fileobj = {
            name: file.name,
            type: file.type,
            size: file.size,
            src: reader.result,
          };
          photosArr.push(fileobj);
          setPost({
            ...post,
            photos: [...photos, ...photosArr],
          });
        });
      }
      setImageFile(fileArr);
    }
  };

  const handeldelete = (e: React.MouseEvent<HTMLSpanElement>) => {
    let target = (e.target as HTMLSpanElement).parentElement;
    let targetindex = 1;
    setPost({
      ...post,
      photos: [
        ...photos.slice(0, targetindex),
        ...photos.slice(targetindex + 1),
      ],
    });

    // setImageFile( (prev) => prev.filter())

    //이미지 다 없어지면 다시 업로드 창 뜨도록
    if (post.photos.length == 2) {
      //랜더링 되기 전이라 2
      setIsImage(false);
    }
  };

  const handlehighlight = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(true);
  }, []);

  const handleunhighlight = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(false);
  }, []);
  const handledrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    let dt = e.dataTransfer;
    let files = dt?.files;
    setHighlight(false);
    handfiles(files);
  };

  const [hashTags, setHashTags] = React.useState({
    data: [{ name: "" }],
  });

  const getHashtags = useCallback(() => {
    dispatch({
      type: GET_HASHTAGS_REQUEST,
    });
    setShowHashModalOpen(true);
  }, [dispatch]);

  const onSubmit = useCallback(
    (e: any) => {
      if (brand == "") {
        e.preventDefault();
        e.stopPropagation();
        alert("브랜드입력 필수");
      } else {
        e.preventDefault();
        e.stopPropagation();

        //수정일 때
        if (props.isEdit) {
          //이미지 새로 올렸을 때
          if (imageFile) {
            const formData = new FormData();
            [].forEach.call(imageFile, (f) => {
              formData.append("image", f);
            });
            // formData.append("image", imageFile as File);
            formData.append("postId", props.postId?.toString() as string);
            formData.append("brand", brand.replace(" ", ""));
            formData.append("link", link);
            formData.append("category", category);
            formData.append("season", season);
            formData.append("hashtag", text);
            formData.append("reason", reason);
            dispatch({
              type: EDIT_POST_WITH_IMAGES_REQUEST,
              data: formData,
            });

          } else {
            if (post.photos.length == 1) {
              alert("이미지 필수");
              return;
            }

            const formData = new FormData();
            [].forEach.call(post.photos, (f: any, index) => {
              if (index != 0) formData.append("imagePath", f.src);
            });
            // formData.append("image", imageFile as File);

            formData.append("postId", props.postId?.toString() as string);
            formData.append("brand", brand.replace(" ", ""));
            formData.append("link", link);
            formData.append("category", category);
            formData.append("season", season);
            formData.append("hashtag", text);
            formData.append("reason", reason);
            dispatch({
              type: EDIT_POST_REQUEST,
              data: formData,
            });
          }
        }
        //수정 아닐 떄
        else {
          if (!imageFile) {
            alert("이미지 필수");
            return;
          }
          const formData = new FormData();
          [].forEach.call(imageFile, (f) => {
            formData.append("image", f);
          });
          // formData.append("image", imageFile as File);
          formData.append("userId", user.id);
          formData.append("userName", user.userName);
          formData.append("brand", brand.replace(" ", ""));
          formData.append("link", link);
          formData.append("category", category);
          formData.append("season", season);
          formData.append("hashtag", text);
          formData.append("reason", reason);
          dispatch(addPost(formData));
        }

        // dispatch({
        //   type: ADD_POST_REQUEST,
        //   data : formData
        // });

        // axios
        //   .post(API, formData)
        //   .then((result) => {
        //     dispatch(addPost(result));
        //     console.log(result);
        //     location.reload();
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     location.reload();
        //   });
      }
    },
    [
      brand,
      category,
      season,
      text,
      reason,
      link,
      user,
      dispatch,
      imageFile,
      post.photos,
      props.isEdit,
      props.postId,
    ]
  );

  useEffect(() => {

    if (addPostDone) {
      dispatch({
        type:TOGGLE_ADD_POST_DONE_REQUEST,
      });
      closeModal();
    }
    if (editPostDone) {
      dispatch({
        type:TOGGLE_EDIT_POST_DONE_REQUEST,
      });
      closeModal();
      props.setIsEdit(false);
      if(props.setImageIndex)
         props.setImageIndex(0);
    }
    if (editPostWithImagesDone) {
      dispatch({
        type:TOGGLE_EDIT_POST_WITH_IMAGES_DONE_REQUEST,
      });
      closeModal();
      props.setIsEdit(false);
      if(props.setImageIndex)
         props.setImageIndex(0);
    }


  }, [addPostDone, dispatch, closeModal, editPostDone,props.setIsEdit, editPostWithImagesDone]);

  useEffect(() => {
    if (props.isEdit) {
      const targetPost = postArray.find(
        (post: any) => post.id === props.postId
      );
      setCardPost(targetPost.Images);
      let postHashtags = "";
      if (targetPost.Hashtags) {
        targetPost.Hashtags.map(
          (hashtag: any) =>
            (postHashtags = postHashtags.concat(`#${hashtag?.name} `))
        );
      }
      for (let i = 0; i < targetPost.Hashtags.length; i++) {
        postHashtags.concat(`#${targetPost.Hashtags[i].name} `);
      }
      setCategory(targetPost.category);
      setSeason(targetPost.season);
      setText(postHashtags);
      setBrand(targetPost.brand);
      setReason(targetPost.reason);
      setLink(targetPost.link);
      setIsImage(true);
      setPost({
        ...post,
        photos: photos.concat(targetPost.Images),
      });
    }
  }, [props.isEdit, postArray]);


  return (
    <>
      {showHashModalOpen && (
        <Modal
          open={true}
          onClose={closehashtagsModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component="form" noValidate autoComplete="off" sx={modalstyle}>
            <div
              className="hashlistdiv"
              style={{ height: "300px", overflow: "overlay" }}
            >
              {hashtags &&
                hashtags.map((hashtag: any, index: number) => (
                  <li id="hashlist" key={index} style={{ listStyle: "none" }}>
                    {" "}
                    #{hashtag.name}
                  </li>
                ))}
            </div>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
              onClick={closehashtagsModal}
            >
              확인
            </Button>
            {/* </form> */}
          </Box>
          {/* <Button onClick={closeModal}>닫기</Button> */}
        </Modal>
      )}
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
          <Typography sx={{ textAlign: "center" }} component="h1" variant="h5">
            업로드
          </Typography>
          {/* <TextField
          label="이름"
          sx={{marginTop : "5px"}}
          name="user-nick"
          fullWidth
          value={nickname}
          required
          variant="standard"
          onChange={onChangeNickname}
        /> */}
          <TextField
            required
            label="브랜드"
            fullWidth
            sx={{ marginTop: "5px" }}
            name="user-brand"
            type="text"
            value={brand}
            variant="standard"
            onChange={onChangeBrand}
          />
          <TextField
            label="Link"
            fullWidth
            sx={{ marginTop: "5px" }}
            name="user-link"
            type="text"
            value={link}
            required
            variant="standard"
            onChange={onChangeLink}
          />

          <TextField
            label="선정이유"
            fullWidth
            sx={{ marginTop: "5px" }}
            name="user-link"
            type="text"
            value={reason}
            required
            variant="standard"
            onChange={onChangeReason}
          />

          <FormControl
            sx={{ width: "40%", marginRight: "10%", marginTop: "25px" }}
          >
            <InputLabel id="demo-simple-select-label">상의</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={"상의"}
              value={category}
              label="카테고리"
              required
              onChange={handleCategoryChange}
            >
              <MenuItem value={"상의"}>상의</MenuItem>
              <MenuItem value={"하의"}>하의</MenuItem>
              <MenuItem value={"아우터"}>아우터</MenuItem>
              <MenuItem value={"디테일"}>디테일</MenuItem>
              <MenuItem value={"이미지"}>이미지</MenuItem>
              <MenuItem value={"악세사리"}>악세사리</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "40%", marginTop: "25px" }}>
            <InputLabel id="demo-simple-select-label">23SS</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={"23SS"}
              value={season}
              label="시즌"
              required
              onChange={handleSeasonChange}
            >
              <MenuItem value={"23SS"}>23SS</MenuItem>
              <MenuItem value={"23FW"}>23FW</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="standard-basic"
            sx={{ marginTop: "30px" }}
            value={text}
            onChange={onChangeText}
            fullWidth
            label="해시태그입력 #검정 #반팔 "
            variant="outlined"
          />

          <Button
            variant="contained"
            sx={{
              // height: "60%",
              whiteSpace: "nowrap",
              marginRight: "5px",
              marginTop: "5px",
              fontWeight: "bold",
              display: "inline-block",
            }}
            size="small"
            onClick={getHashtags}
          >
            #목록
          </Button>
          {/* <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
         ><div><p>this is inside drop area</p></div></FileUploader> */}
          <div className="file-upload" style={{ marginTop: "10px" }}>
            <div className="custom-form-group">
              {!isImage && (
                <div
                  className={
                    highlight
                      ? "custom-file-drop-area highlight"
                      : "custom-file-drop-area"
                  }
                  onDragEnter={handlehighlight}
                  onDragOver={handlehighlight}
                  onDragLeave={handleunhighlight}
                  onDrop={handledrop}
                >
                  <input
                    type="file"
                    name="photos"
                    placeholder="Enter photos"
                    multiple={false}
                    id="filephotos"
                    onChange={handlefilechange}
                  />
                  <label htmlFor="filephotos">
                    이미지를 드래그해서 넣어주세요
                  </label>
                </div>
              )}
              <div className="custom-file-preview">
                {photos.length > 0 &&
                  photos.map((item: any, index) =>
                    index != 0 ? (
                      <div className="prev-img" key={index}>
                        <span onClick={handeldelete}>&times;</span>
                        {item && <img src={item.src} alt={item.name} />}
                      </div>
                    ) : (
                      <></>
                    )
                  )}
              </div>
            </div>
          </div>
          <button
            id="submit_bt"
            style={{ display: "none" }}
            type="submit"
          ></button>
          <LoadingButton
            type="submit"
            loading={addPostLoading}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
            // loading={true}
          >
            확인
          </LoadingButton>
          {/* </form> */}
        </Box>
        {/* <Button onClick={closeModal}>닫기</Button> */}
      </Modal>
    </>
  );
}
