import React from "react";

import { Box, Grid, Stack } from "@mui/material";

import blogData from "../../data/BlogPosts.json";
import CardWithLink from "../../components/ui/CardWithLink";

const HomePage = (props) => {
  return (
    <div
      style={{
        margin: "20px 50px 20px 80px",
      }}
    >
      <h1>Home</h1>
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={{
          xs: 1,
          sm: 2,
          md: 4,
        }}
      >
        {props.items.map((el, index) => (
          <CardWithLink
            key={index}
            title={el.title}
            description={el.description}
            link={"https://v0.dev"}
          />
        ))}
      </Stack>
      <h2>Latest Blogs</h2>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          {blogData.blogPosts.map((post, index) => (
            <Grid item xs={6} key={index}>
              <CardWithLink
                key={index}
                date={post.date}
                title={post.title}
                description={post.description}
                link={"https://v0.dev"}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
