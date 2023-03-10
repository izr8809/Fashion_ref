import { Inter } from "@next/font/google";
import * as React from "react";
import { HtmlHTMLAttributes, ReactElement } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
// import { useNavigate  } from 'react-router-dom'; // 설치한 패키지
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useInput from "../hooks/useInput";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Signup from "@/Components/signup";
import Upload from "@/Components/upload";
import { useCallback, useEffect, useState } from "react";
import Login from "@/Components/LoginForm";
import LoginForm from "@/Components/LoginForm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const style: React.CSSProperties = {
  background: "#0092ff",
  padding: "8px 0",
  margin: "16px auto",
  height: "54px",
};
const inter = Inter({ subsets: ["latin"] });

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#F8F8F8", 0.73),
  "&:hover": {
    backgroundColor: alpha("#F8F8F8", 0.33),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    height: "40%",
  },
}));

type NavbarProps = {
  setIsLoggedIn: any;
  isLoggedIn: boolean;
  setPost: any;
};

export default function Navbar({
  isLoggedIn,
  setIsLoggedIn,
  setPost,
}: NavbarProps): ReactElement {
  // const navigate = useNavigate();
  const HASHAPI = "http://localhost:3065/hashtagsearch";
  const API = "http://localhost:3065/loadpost";
  const [modalOpen, setModalOpen] = React.useState(false);
  const [uploadModalOpen, setuploadModalOpen] = React.useState(false);
  const [loginModalOpen, setloginModalOpen] = React.useState(false);
  const [value, onChangeValue] = useInput("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const [category, setCategory] = React.useState("");
  const [season, setSeason] = React.useState("");

  const onChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const onChangeSeason = (event: SelectChangeEvent) => {
    setSeason(event.target.value as string);
  };
  const showModal = () => {
    setModalOpen(true);
  };
  const reloadPost = () => {
    // navigate('/home'); // /test로 url 이동
  };
  const showLoginModal = () => {
    setloginModalOpen(true);
  };

  const showUploadModal = () => {
    setuploadModalOpen(true);
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
    const LOGOUTAPI = "http://localhost:3065/logout";
    axios
      .get(LOGOUTAPI)
      .then((result) => {
        if (result.data.message == "ok") setIsLoggedIn(false);
        setloginModalOpen(false);
      })
      .catch((err) => {});
  }, [setIsLoggedIn]);

  const uploadClick = useCallback(() => {
    if (isLoggedIn) {
      setuploadModalOpen(true);
    } else {
      setloginModalOpen(true);
    }
  }, [isLoggedIn]);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const TagSearch = React.useCallback(
    (e: any) => {
      if (value == "") {
        axios
          .get(API)
          .then((result) => {
            setPost(result.data);
            // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
            // history.replace('/login');
          })
          .catch((error) => {
            alert("포스팅 불러오기 정상적으로 되지 않았습니다.");
            console.log(error);
          });
      } else if (value.split("#").length < 2) {
        alert("태그 앞에 #를 붙여주세요");
      } else {
        e.preventDefault();
        e.stopPropagation();
        axios
          .post(
            HASHAPI,
            {
              hashtags: value,
              category: category,
              season: season,
            },
            {
              headers: {
                "Content-Type": "application/json",
                // 'Accept': 'application/json',
              },
            }
          )
          .then((result) => {
            console.log("----------------------------");
            console.log(result.data);
            setPost(result.data);
            // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
            // history.replace('/login');
          })
          .catch((error) => {
            alert("로그인이 정상적으로 되지 않았습니다.");
            console.log(error);
          });
      }
    },
    [value, setPost]
  );

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
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!isLoggedIn && modalOpen && (
        <Signup setIsLoggedIn={setIsLoggedIn} setModalOpen={setModalOpen} />
      )}
      {isLoggedIn && uploadModalOpen && (
        <Upload setuploadModalOpen={setuploadModalOpen} />
      )}
      {!isLoggedIn && loginModalOpen && (
        <LoginForm
          setIsLoggedIn={setIsLoggedIn}
          setloginModalOpen={setloginModalOpen}
        />
      )}
      <AppBar
        position="static"
        style={{ backgroundColor: "#FFF", color: "#000" }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={reloadPost}
          >
            <HomeIcon color="disabled" />
          </IconButton> */}
          <Typography
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {/* <p>검색할 태그</p> */}
          </Typography>
          {/* <Search>
            <StyledInputBase
              onChange={(event) => {
                setValue(event.target.value);
              }}
              placeholder="태그 입력"
              inputProps={{ "aria-label": "search" }}
              onKeyPress={(event) => {
                if (event.which == 32) alert(value);
              }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search> */}
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
              marginBottom: "1%",
              marginRight: "5px",
              marginTop: "-5px",
            }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              카테고리
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              sx={{ display: "inline-block" }}
              required
              value={category}
              label="category"
              onChange={onChangeCategory}
            >
              <MenuItem value={"상의"}>상의</MenuItem>
              <MenuItem value={"하의"}>하의</MenuItem>
              <MenuItem value={"아우터"}>아우터</MenuItem>
              <MenuItem value={"디테일"}>디테일</MenuItem>
              <MenuItem value={"이미지"}>이미지</MenuItem>
              <MenuItem value={"악세사리"}>악세사리</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
              marginBottom: "1%",
              marginRight: "25px",
              marginTop: "-5px",
            }}
          >
            <InputLabel id="demo-simple-select-standard-label">시즌</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              sx={{ display: "inline-block" }}
              value={season}
              label="season"
              required
              onChange={onChangeSeason}
            >
              <MenuItem value={"23SS"}>23SS</MenuItem>
              <MenuItem value={"23FW"}>23FW</MenuItem>
            </Select>
          </FormControl>
          <form onSubmit={TagSearch} style={{ width: "50%" }}>
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "#9A9A9A" }} />
            </IconButton>
            <TextField
              id="search-bar"
              className="text"
              sx={{ display: "inline-block", width: "80%" }}
              value={value}
              onChange={onChangeValue}
              label="#상의 #검정"
              variant="outlined"
              placeholder="Search..."
              size="small"
            />
          </form>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={0} color="error"></Badge>
            </IconButton> */}
            <>
              <IconButton
                size="large"
                edge="end"
                sx={{marginRight:"10px"}}
                aria-label="account of current user"
                aria-haspopup="false"
                color="primary"
                onClick={uploadClick}
              >
                <AddIcon />
              </IconButton>
            </>
            {!isLoggedIn ? (
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    // height: "60%",
                    width: "100%",
                    marginRight: "5px",
                    fontWeight: "bold",
                    display: "inline-block",
                  }}
                  size="small"
                  onClick={Logout}
                >
                  로그아웃
                </Button>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="primary"
                >
                  <AccountCircle />
                </IconButton>
              </>
            )}

            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
