import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AlignItemsList from "./AlignItemsList";
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={6} sm={4} md={3} lg ={4} key={index}>
            <Item>
            <li
              style={{
                maxWidth: "320px",
                display: "inline-block",
                // marginRight: "4%",
                // marginLeft: "1%",
                // marginTop: "1%",
              }}
            >
            <AlignItemsList name =""/> </li></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}