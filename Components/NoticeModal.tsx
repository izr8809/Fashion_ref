import * as React from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { useEffect,useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type NoticeModalProps = {};

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

export default function NoticeModal({}: NoticeModalProps) {
  const [value, onChangeValue] = useInput("");
  const dispatch = useDispatch();
  const searchBar = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeNoticeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    var now = new Date();
    var date = now.getDate();	// 일
    if(date-31 ==0)
      setIsModalOpen(true)
  },[])
  return (
    <>
      {isModalOpen && (
        <Modal
          open={true}
          onClose={closeNoticeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component="form" noValidate autoComplete="off" sx={modalstyle}>
            <h1 > 3.31 업데이트 안내 🐇</h1>
            <p style={{marginTop:"-20px", marginBottom:"20px",color:"#7F7F7F"}}> *하루동안 떠요</p>
            <h2 style={{marginBottom:"10px"}}> 기능 추가 목록 </h2>
            <ol type="1">
              <li style={{marginBottom:"10px"}}> 이미지 복사 후 (클립보드 복사 or PrintScreen) </li>
              <li style={{marginBottom:"10px"}}> 바탕화면에서 Ctrl + v 누르면 자동으로 이미지 등록 </li>
              <li style={{marginBottom:"10px"}}> 업로드 화면에서도 마찬가지 </li>
            </ol>
            <br />
            <br />
            <br />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="large"
              onClick={closeNoticeModal}
            >
              확인
            </Button>
          </Box>
        </Modal>
      )}
    </>
  );
}
