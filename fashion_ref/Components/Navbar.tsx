import { Inter } from "@next/font/google";
import * as React from "react";
import { HtmlHTMLAttributes, ReactElement, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AddIcon from "@mui/icons-material/Add";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Upload from "@/Components/Upload";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import SideBar from "./Sidebar";
import HashList from "./HashList";
import { loadPost } from "@/reducers/post";
import {
  RESET_POST_REQUEST,
} from "@/reducers/post";
import { useDispatch } from "react-redux";
import MypageMenu from "./MypageMenu";

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
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


type NavbarProps = {
  setIsUserpage :any;
  setIsHomeState:any;
};

export default function Navbar({
  setIsHomeState,
  setIsUserpage
}: NavbarProps): ReactElement {

  //redux
  const { user } = useSelector((state: any) => state.user);
  const { hashtags } = useSelector((state: any) => state.post);
  const { isEdit } = useSelector((state: any) => state.post);
  const [clipboardFile, setClipboardFile] = useState(null);
  const [uploadModalClicked, setUploadModalClicked] = useState(false);
  const [uploadModalOpen, setuploadModalOpen] = React.useState(false);
  const { currentSpaceId } = useSelector((state: any) => state.workspace);
  const [loginModalOpen, setloginModalOpen] = React.useState(false);
  const { userCurrentWorkspaceId } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showHashModalOpen, setShowHashModalOpen] = React.useState(false);

  const loadPosts = useCallback(() => {
    dispatch({
      type: RESET_POST_REQUEST,
    });
    dispatch(
      loadPost({
        referenceId: currentSpaceId,
      })
    );
    setIsUserpage(false);
  }, [dispatch, currentSpaceId]);

  const closehashtagsModal = () => {
    setShowHashModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
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

  const uploadClick = useCallback(() => {
    if (user) {
      setuploadModalOpen(true);
      setUploadModalClicked(true)
    } else {
      setloginModalOpen(true);
      // setIsEdit(true);
    }
  }, [user]);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  //backspace event
  useEffect(()=>{
    history.pushState(null, '', '');
    window.onpopstate = () =>{
      closehashtagsModal();
    } 
  },[showHashModalOpen])


  //Render Menu
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


  return (
    <Box sx={{ flexGrow: 1 }}>
      {user && uploadModalOpen && !isEdit && (
        <Upload
          uploadModalClicked={uploadModalClicked}
          setUploadModalClicked={setUploadModalClicked}
          setImageIndex={null}
          uploadModalOpen={uploadModalOpen}
          setuploadModalOpen={setuploadModalOpen}
          postId={null}
          clipboardFile={clipboardFile}
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
          
            <>
              <IconButton
                size="large"
                edge="end"
                sx={{ marginRight: "10px", transform:"translate(0,-60%)"}}
                aria-haspopup="false"
                color="primary"
                onClick={loadPosts}
              >            
                <HomeIcon/>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                sx={{ marginRight: "10px", transform:"translate(0,-60%)" }}
                aria-label="account of current user"
                aria-haspopup="false"
                color="primary"
                onClick={uploadClick}
              >
                <AddIcon />
              </IconButton>
            </>
          <HashList setShowHashModalOpen={setShowHashModalOpen}/>
          <Typography
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Searchbar setIsUserpage={setIsUserpage} setIsHomeState={setIsHomeState}/>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            
          <MypageMenu setIsUserpage={setIsUserpage}/>

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
