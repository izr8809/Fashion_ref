import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

type AlignItemsListProps = {
  category: string;
  brand: string;
  link: string;
  src: string;
  season: string;
  reason: string;
  hashtags: any[];
  id: number;
  setPost: any;
  posts: any[];
  index: number;
  name: string;
  setIsLoggedIn: any;
  isLoggedIn: boolean;
};

const category = {
  상의: 1,
  하의: 2,
  아우터: 3,
  디테일: 4,
  이미지: 5,
  악세사리: 6,
};

const season = {
  "23SS": 7,
  "23FW": 8,
};
export default function AlignItemsList(props: AlignItemsListProps) {
  const [category, setCategory] = useState("");
  const [season, setSeason] = useState("");

  const HASHAPI = `${process.env.NEXT_PUBLIC_API}/hashtagsearch`;
  const DELAPI = `${process.env.NEXT_PUBLIC_API}/deletpost/${props.id}`;
  const delClick = useCallback(() => {
    if (props.isLoggedIn) {
      axios
        .post(DELAPI, {})
        .then((result) => {
          const Posts = props.posts.filter((post) => post.id !== props.id);
          props.setPost(Posts);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //로그인 모달 띄우기
      alert("로그인 해주세요");
    }
  }, [DELAPI, props]);
  const editClick = useCallback(() => {
    alert("만드는 중입니다..");
  }, []);

  useEffect(() => {
    setCategory(props.category);
    setSeason("23SS");
  }, [props.category]);

  const TagClick = React.useCallback((e: any, hashname: string) => {
    e.preventDefault();
    e.stopPropagation();

    axios
      .post(
        HASHAPI,
        {
          hashtags: "#" + hashname,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // 'Accept': 'application/json',
          },
        }
      )
      .then((result) => {
        props.setPost(result.data);
        // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
        // history.replace('/login');
      })
      .catch((error) => {
        alert("해시태그 포함된 포스팅이 없습니다.");
        console.log(error);
      });
  }, []);

  return (
    <Card
      sx={{
        maxWidth: "15",
        marginTop: "20px",
        // borderRadius: "24px",
        boxShadow: "none",
      }}
    >
      <CardActionArea href={`${props.link}`} target="_blank">
        <CardMedia
          component="img"
          height="400"
          image={`../${props.src}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography>
            <span
              style={{ fontWeight: 900, fontSize: "130%", marginBottom: "4%" }}
            >
              {props.name[0]}_{`${props.brand}`}
            </span>
          </Typography>

          {/* <span style={{fontWeight :900, fontSize: "100%", marginBottom: 5}}>
            참고할 부분
          </span> */}
          <Typography
            sx={{ fontWeight: 900, marginBottom: "1%" }}
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
      </CardActionArea>
      <CardActions>
        <div style={{ width: "100%", marginBottom: "3%" }}>
          <EditIcon id="editicon" onClick={editClick} />
          <DeleteIcon id="delicon" onClick={delClick} />
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
              className={`Tag${
                parseInt(hashtag.PostHashtag.HashtagId) % 8
              } Tag`}
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
      </CardActions>
    </Card>
  );
}
