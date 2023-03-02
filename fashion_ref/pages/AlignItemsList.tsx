import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

type AlignItemsListProps = {
  name : string
}

export default function AlignItemsList(props : AlignItemsListProps) {
  return (
    <Card sx={{ maxWidth: "15", marginTop: "40px" , borderRadius: "24px", boxShadow: "none"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="../11.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            승_01_크럼프
          </Typography>
          <Typography variant="body2" color="text.secondary">
            선정이유
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <div style={{ margin: "2px"}}>
          <div className="Tag1 Tag" style={{ display: "inline-block", margin: "2px"}}><a href="">#상의</a></div> &nbsp;
          <div className="Tag2 Tag" style={{ display: "inline-block", margin: "2px"}}><a href="">#하의</a></div> &nbsp;
          <div className="Tag3 Tag" style={{ display: "inline-block", margin: "2px"}}><a href="">#23SS</a></div> &nbsp;
          <div className="Tag4 Tag" style={{ display: "inline-block", margin: "2px"}}><a href="">#검정</a></div> &nbsp;
          <div className="Tag5 Tag" style={{ display: "inline-block", margin: "2px"}}><a href="">#프린트</a></div> &nbsp;
          <div className="Tag6 Tag" style={{ display: "inline-block", margin: "2px"}}><a href="">#화려함</a></div> &nbsp;
          <div className="Tag7 Tag" style={{ display: "inline-block", margin: "2px"}}><a href="">#심플</a></div>
        </div>
      </CardActions>
    </Card>
  );
}
