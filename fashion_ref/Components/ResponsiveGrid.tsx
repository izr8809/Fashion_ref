import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useCallback, useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AlignItemsList from "./AlignItemsList";
import Grid from '@mui/material/Grid';
import { useInput } from '@mui/base';
import axios from 'axios';
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


type ResponsiveGridProps = {
  setIsLoggedIn: any;
  isLoggedIn: boolean;
  setPost: any;
  posts : any[];
};

export default function ResponsiveGrid({ setIsLoggedIn, isLoggedIn, setPost, posts }: ResponsiveGridProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {posts.map((post, index) => (
          <Grid item xs={6} sm={4} md={3} lg ={4} key={index}>
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
            <AlignItemsList isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} name={post.name} index={index} setPost={setPost} posts={posts} id={post.id} category={post.category} brand={post.brand} src={post.Images[0].src}link={post.link} season={post.season} hashtags ={post.Hashtags} reason ={post.reason}/> </li>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
