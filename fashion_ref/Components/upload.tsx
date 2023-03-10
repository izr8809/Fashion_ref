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
import Button from "@mui/material/Button";
import useInput from "../hooks/useInput";
import { FileUploader } from "react-drag-drop-files";
import Image from "next/image";
const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

type UploadProps = {
  setuploadModalOpen: any;
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
export default function Upload({ setuploadModalOpen }: UploadProps) {
  const [file, setFile] = useState({ name: "" });
  // const handleChange = (file: any) => {
  //   setFile(file);
  //   console.log(file);
  // };
  const API = "http://15.164.224.172:8080/uploads";
  const [imageFile, setImageFile] = useState<File>();
  const [value, setValue] = React.useState("");
  const [isImage, setIsImage] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [nickname, onChangeNickname] = useInput("");
  const [reason, onChangeReason] = useInput("");
  const [brand, onChangeBrand] = useInput("");
  const [link, onChangeLink] = useInput("");
  const [post, setPost] = useState({
    title: "",
    desc: "",
    photos: [null],
  });
  const closeModal = () => {
    setuploadModalOpen(false);
  };
  const { title, desc, photos } = post;
  // const handlechange = e =>{
  //   setPost({
  //     ...post,
  //     [e.target.name]: e.target.value;
  //   })
  // }


  const [category, setCategory] = React.useState("");
  const [season, setSeason] = React.useState("");

  const [text, onChangeText, setText] = useInput('');
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
    if (files != undefined) {
      if (files.length > 1) {
        alert("???????????? 1?????? ???????????????");
      } else {
        setIsImage(true);
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          setImageFile(files[i]);
          console.log(files[i]);
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
      }
    }
  };

  const handeldelete = (e: React.MouseEvent<HTMLSpanElement>) => {
    let target = (e.target as HTMLSpanElement).parentElement;
    console.log(target?.dataset);
    let targetindex = 1;
    console.log(targetindex);
    setPost({
      ...post,
      photos: [
        ...photos.slice(0, targetindex),
        ...photos.slice(targetindex + 1),
      ],
    });
    console.log(photos);
    setIsImage(false);
  };
  const handlehighlight = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(true);
  }, []);

  const handleunhighlight = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("leave");
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

  const uploadClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  }, []);

  const USERINFOAPI = `http://15.164.224.172:8080/USERINFO`
  const [userInfo, setUserInfo]= useState({name : ""});

  useEffect(()=>{
    axios.get(USERINFOAPI,{
    }).then((result)=>{
      console.log(result.data)
      setUserInfo(result.data)
    })
    .catch((err)=>{

      console.log(err)
    })
  },[]);

  const onSubmit = useCallback(
    (e: any) => {
      if(category=="" || season==""){
        e.preventDefault();
        e.stopPropagation();
        alert("????????????, ?????? ??????")
      }
      else if(brand=="" || link ==""){
        e.preventDefault();
        e.stopPropagation();
        alert("?????????, ?????? ?????? ??????")
      }
      else if(imageFile == undefined){
        e.preventDefault();
        e.stopPropagation();
        alert("????????? ??????")

      }
      else{
        e.preventDefault();
        e.stopPropagation();

        console.log(imageFile);
        const formData = new FormData();
        formData.append("image", imageFile as File);
        formData.append("nickname", nickname);
        formData.append("brand", brand);
        formData.append("link", link);
        formData.append("category", category);
        formData.append("season", season);
        formData.append("hashtag", text);
        // alert(formData)
        axios.post(API, formData)
        .then((result)=>{
          console.log("result")
          console.log(result) 
        })
        .catch((err)=>{
          console.log(err);
        });
      }
      //   axios
      //     .post(
      //       API,
      //       // ????????????????????? ????????? request(??????)?????? ???????????? ?????????
      //       // ????????????????????? ?????????????????? ???????????? ?????????
      //       {
      //         nickname: nickname,
      //         brand: brand,
      //         link: link, // ??????, ?????? ?????????, ?????????, ????????????, 8-20???  1234567#Aaa
      //         image : (imageFile as File).name
      //       },
      //       {
      //         headers: {
      //           "Content-Type": "application/json",
      //           // 'Accept': 'application/json',
      //         },
      //       }
      //     )
      //     // ????????? ???????????? ?????????????????? response(??????)??????
      //     // {ok: true} ????????? {ok: false}??? ??????.
      //     // .then((response) => {
      //     //   console.log(response); // response.data??? ???????
      //     // })
      //     .then((result) => {
      //       console.log(result);
      //       // window.alert('??????????????? ???????????????! ????????? ????????????.');
      //       // history.replace('/login');
      //     })
      //     .catch((error) => {
      //       alert("??????????????? ??????????????? ?????? ???????????????.");
      //       console.log(error);
      //     });
    },
    [brand, link, nickname, imageFile, category, text, season]
  );
  return (
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
        <Typography sx={{textAlign: "center"}} component="h1" variant="h5">
          ?????????
        </Typography>
        {/* <TextField
          label="??????"
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
          label="?????????"
          fullWidth
          sx={{marginTop : "5px"}}
          name="user-brand"
          type="text"
          value={brand}
          variant="standard"
          onChange={onChangeBrand}
        />
        <TextField
          label="Link"
          fullWidth
          sx={{marginTop : "5px"}}
          name="user-link"
          type="text"
          value={link}
          required
          variant="standard"
          onChange={onChangeLink}
        />
        
        <TextField
          label="????????????"
          fullWidth
          sx={{marginTop : "5px"}}
          name="user-link"
          type="text"
          value={reason}
          required
          variant="standard"
          onChange={onChangeReason}
        />

        <FormControl 
        sx={{width: "40%", marginRight : "10%", marginTop : "25px"}}>
          <InputLabel id="demo-simple-select-label">????????????</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            required
            onChange={handleCategoryChange}
          >
            <MenuItem value={"??????"}>??????</MenuItem>
            <MenuItem value={"??????"}>??????</MenuItem>
            <MenuItem value={"?????????"}>?????????</MenuItem>
            <MenuItem value={"?????????"}>?????????</MenuItem>
            <MenuItem value={"?????????"}>?????????</MenuItem>
            <MenuItem value={"????????????"}>????????????</MenuItem>
          </Select>
        </FormControl>
        <FormControl 
        sx={{width: "40%", marginTop : "25px"}}>
          <InputLabel id="demo-simple-select-label">??????</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={season}
            label="season"
            required
            onChange={handleSeasonChange}
          >
            <MenuItem value={"23SS"}>23SS</MenuItem>
            <MenuItem value={"23FW"}>23FW</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          sx={{marginTop : "30px"}}
          value={text}
          onChange={onChangeText}
          fullWidth
          label="?????????????????? #?????? #?????? "
          variant= "outlined"
        />

        {/* <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
         ><div><p>this is inside drop area</p></div></FileUploader> */}
        <div className="file-upload"
          style={{marginTop : "6px"}}>
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
                <label htmlFor="filephotos">Drag & Drop</label>
              </div>
            )}
            <div className="custom-file-preview">
              {photos.length > 0 &&
                photos.map((item: any, index) =>
                  index != 0 ? (
                    <div className="prev-img" key={index}>
                      <span onClick={handeldelete}>&times;</span>
                      {item && <Image src={item.src} alt={item.name} />}
                    </div>
                  ) : (
                    <></>
                  )
                )}
            </div>
          </div>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="large"
        >
          ??????
        </Button>
        {/* </form> */}
      </Box>
      {/* <Button onClick={closeModal}>??????</Button> */}
    </Modal>
  );
}
