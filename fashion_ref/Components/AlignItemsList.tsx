import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {useCallback, useEffect} from 'react';
import axios from 'axios';

type AlignItemsListProps = {
  category: number;
  brand: string;
  link: string;
  season: string;
  reason: string;
  hashtags: any[];
  id : number,
  setPost: any;
  posts : any[];
  index : number;
  name : string;
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
  const DELAPI = `http://localhost:3065/deletpost/${props.id}`
  const editClick = useCallback(()=>{
    alert("만드는 중입니다..");
  },[])
  const delClick = useCallback(()=>{
    axios.post(DELAPI,{
    }).then((result)=>{
      console.log(props.id)
      const Posts = props.posts.filter((post)=> post.id !== props.id)
      props.setPost(Posts);
      console.log(Posts);
    })
    .catch((err)=>{

      console.log(err)
    })
  },[])

  return (
    <Card
      sx={{
        maxWidth: "15",
        marginTop: "20px",
        // borderRadius: "24px",
        // boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          // height="300"
          image={`../${props.link}`}
          alt="green iguana"
        />
        <CardContent>
          <span style={{fontWeight :900, fontSize: "130%"}}>
            {props.name}_{`${props.brand}`}
          </span>

          <Typography variant="body2" color="text.secondary">
            선정이유 {props.reason}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div style={{width:"100%"}}>
          <EditIcon id="editicon" onClick={editClick}/>
          <DeleteIcon id="delicon" onClick={delClick}/>
        </div>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <div style={{ margin: "2px" }}>
          <div
            className={`Tag${props.category / 10} Tag`}
            style={{ display: "inline-block", margin: "2px" }}
          >
            <a href="">#{props.season}</a>
          </div>{" "}
          &nbsp;
        </div>
        <div style={{ margin: "2px" }}>
          <div
            className="Tag1 Tag"
            style={{ display: "inline-block", margin: "2px" }}
          >
            <a href="">#{props.category}</a>
          </div>{" "}
          &nbsp;
        </div>
        {props.hashtags.map((hashtag, index) => (
          <div style={{ margin: "2px" }} key={index}>
            <div
              className={`Tag${parseInt(hashtag.id) % 8} Tag`}
              style={{ display: "inline-block", margin: "2px" }}
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
