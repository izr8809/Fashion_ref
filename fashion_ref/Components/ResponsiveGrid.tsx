import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Cardpost from "./Cardpost";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type ResponsiveGridProps = {
  setIsUserpage:any
};

export default function ResponsiveGrid({setIsUserpage}: ResponsiveGridProps) {
  const { postArray } = useSelector((state: any) => state.post);

  useEffect(() => {
  }, [postArray]);



  //check if I like
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {postArray &&
            (postArray as Array<any>).map((post, index) => (
              <Grid item xs={6} sm={4} md={3} lg={4} key={post.id}>
                <Item>
                  <li
                    style={{
                      maxWidth: "320px",
                      display: "inline-block",
                      // marginRight: "4%",
                      // marginLeft: "1%",
                      // marginTop: "1%",-
                    }}
                  >
                    <Cardpost
                      setIsUserpage={setIsUserpage}
                      index={index}
                      name={post.name}
                      // posts={postArray}
                      id={post.id}
                      likers={post.Likers}
                      category={post.category}
                      brand={post.brand}
                      Images={post.Images}
                      link={post.link}
                      season={post.season}
                      hashtags={post.Hashtags}
                      reason={post.reason}
                    />{" "}
                  </li>
                </Item>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
