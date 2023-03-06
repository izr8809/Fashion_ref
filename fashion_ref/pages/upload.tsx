import React, {
  useCallback,
  ChangeEvent,
  useRef,
  useState,
  useEffect,
  ReactElement,
} from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useInput from "../hooks/useInput";

type SignupProps = {
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

interface IFileTypes {
  id: number;
  object: File;
}
export default function Upload({ setuploadModalOpen }: SignupProps) {
  const [nickname, onChangeNickname] = useInput("");
  const [brand, onChangeBrand] = useInput("");
  const [link, onChangeLink] = useInput("");
  const closeModal = () => {
    setuploadModalOpen(false);
  };
  const onSubmit = useCallback(() => {}, []);
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
        <Typography component="h1" variant="h5">
          업로드
        </Typography>
        <TextField
          label="nickname"
          name="user-nickname"
          fullWidth
          type="text"
          value={nickname}
          required
          variant="standard"
          onChange={(e) => {
            onChangeNickname(e.target.value);
          }}
        />
        <TextField
          label="이름"
          name="user-nick"
          fullWidth
          value={nickname}
          required
          variant="standard"
          onChange={(e) => {
            onChangeNickname(e.target.value);
          }}
        />
        <TextField
          label="비밀번호"
          fullWidth
          name="user-brand"
          type="text"
          value={brand}
          required
          variant="standard"
          onChange={(e) => {
            onChangeBrand(e.target.value);
          }}
        />
        <TextField
          label="link"
          fullWidth
          name="user-link"
          type="text"
          value={link}
          required
          variant="standard"
          onChange={(e) => {
            onChangeLink(e.target.value);
          }}
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
    </Modal>
  );
}
