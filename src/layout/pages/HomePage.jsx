import React from "react";

import { Box, Grid, Stack } from "@mui/material";

import blogData from "../../data/BlogPosts.json";
import websiteData from "../../data/WebsiteLinks.json";
import CardWithLink from "../../components/ui/CardWithLink";

const HomePage = () => {
  return (
    <>
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
        {websiteData.items.map((el, index) => (
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
            <CardWithLink
              key={index}
              date={post.date}
              title={post.title}
              description={post.description}
              link={"https://v0.dev"}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
