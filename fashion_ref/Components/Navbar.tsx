import { Inter } from "@next/font/google";
import * as React from "react";
import { HtmlHTMLAttributes, ReactElement, useRef } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import Signup from "@/Components/Signup";
import Upload from "@/Components/Upload";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useCallback, useEffect, useState } from "react";
import Login from "@/Components/LoginForm";
import LoginForm from "@/Components/LoginForm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginRequestAction, logoutRequestAction } from "@/reducers/user";
import Searchbar from "./Searchbar";
import LoadingButton from "@mui/lab/LoadingButton";
import { GET_HASHTAGS_REQUEST } from "@/reducers/post";

const style: React.CSSProperties = {
  background: "#0092ff",
  padding: "8px 0",
  margin: "16px auto",
  height: "54px",
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

type NavbarProps = {
  userId: string;
  setUserId: any;
  userName: string;
  setUserName: any;
};

export default function Navbar({
  userId,
  setUserId,
  userName,
  setUserName,
}: NavbarProps): ReactElement {

  //redux
  const { user } = useSelector((state: any) => state.user);
  const { logOutLoading } = useSelector((state: any) => state.user);
  const { hashtags } = useSelector((state: any) => state.post);
  const [isEdit, setIsEdit] = useState(false);
  const [clipboardFile, setClipboardFile] = useState(null);
  const dispatch = useDispatch();

  const GETHASHAPI = `${process.env.NEXT_PUBLIC_API}/getHash`;
  const [uploadModalOpen, setuploadModalOpen] = React.useState(false);
  const [loginModalOpen, setloginModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showHashModalOpen, setShowHashModalOpen] = React.useState(false);


  const closehashtagsModal = () => {
    setShowHashModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const showLoginModal = () => {
    setloginModalOpen(true);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const Logout = useCallback(() => {
    dispatch(logoutRequestAction());

    //왜인지 모르겠는데 로그아웃 후 모달 켜짐
    setloginModalOpen(false);
  }, [dispatch]);

  const uploadClick = useCallback(() => {
    if (user) {
      setuploadModalOpen(true);
    } else {
      setloginModalOpen(true);
      // setIsEdit(true);
    }
  }, [user]);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onReady = useCallback(() => {
    alert("준비중입니다.");
  }, []);

  const getHashtags = useCallback(() => {
    //dispatch
    dispatch({
      type: GET_HASHTAGS_REQUEST,
    });
    setShowHashModalOpen(true);
  }, [dispatch]);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>만드는 중입니다</p>
      </MenuItem>
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>프로필</p>
      </MenuItem> */}
    </Menu>
  );

  useEffect(()=>{

    if(!uploadModalOpen && user){
      const handlePaste = (event : any)  => {
        if(event.clipboardData.files.length >0){
          setuploadModalOpen(true);
          setClipboardFile(event.clipboardData.files)
        }
      };
      window.addEventListener('paste', handlePaste);
  
      return () => {
        window.removeEventListener('paste', handlePaste);
      };
    }

  },[uploadModalOpen,user])

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!user && isModalOpen && (
        <Signup
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          userId={userId}
          setUserId={setUserId}
          userName={userName}
          setUserName={setUserName}
        />
      )}
      {user && uploadModalOpen && (
        <Upload
          setImageIndex={null}
          uploadModalOpen={uploadModalOpen}
          setuploadModalOpen={setuploadModalOpen}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          postId={null}
          clipboardFile={clipboardFile}
        />
      )}
      {!user && loginModalOpen && (
        <LoginForm
          loginModalOpen={loginModalOpen}
          setloginModalOpen={setloginModalOpen}
        />
      )}
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
                hashtags.map((hashtag: any, index: any) => (
                  <li
                    id="hashlist"
                    key={hashtag.id}
                    style={{ listStyle: "none", marginBottom: "5px" }}
                  >
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

      <AppBar
        position="static"
        style={{ backgroundColor: "#FFF", color: "#000" }}
      >
        <Toolbar>
          <Button
            variant="contained"
            sx={{
              // height: "60%",
              whiteSpace: "nowrap",
              marginRight: "5px",
              fontWeight: "bold",
              display: "inline-block",
            }}
            size="small"
            onClick={getHashtags}
          >
            #목록
          </Button>
          <Typography
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Searchbar />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <>
              <IconButton
                size="large"
                edge="end"
                sx={{ marginRight: "10px" }}
                aria-label="account of current user"
                aria-haspopup="false"
                color="primary"
                onClick={uploadClick}
              >
                <AddIcon />
              </IconButton>
            </>
            {!user ? (
              <>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    // height: "60%",
                    width: "40%",
                    marginRight: "5px",
                    fontWeight: "bold",
                    display: "inline-block",
                  }}
                  size="small"
                  onClick={showLoginModal}
                >
                  로그인
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    // height: "60%",
                    width: "40%",
                    fontWeight: "bold",
                    display: "inline-block",
                  }}
                  onClick={showModal}
                  size="small"
                >
                  가입
                </Button>
              </>
            ) : (
              <>
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    // height: "60%",
                    width: "100%",
                    marginRight: "5px",
                    fontWeight: "bold",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                  size="small"
                  onClick={Logout}
                  loading={logOutLoading}
                >
                  로그아웃
                </LoadingButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="primary"
                  onClick={onReady}
                >
                  <AccountCircle />
                </IconButton>
              </>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, float: "right" }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
