import { Box, Grid, Stack } from "@mui/material";
import "./App.css";
import blogData from "./data/BlogPosts.json";
import CardWithLink from "./components/ui/CardWithLink";

function App() {
  const data = {
    items: [
      {
        title: "Portfolio Performance",
        description:
          "Track your daily NAV changes and overall investment growth.",
      },
      {
        title: "Risk Analysis",
        description:
          "View drawdowns, volatility, and risk metrics in one dashboard.",
      },
      {
        title: "Asset Allocation",
        description:
          "Analyze distribution across equities, bonds, and alternative assets.",
      },
    ],
  };

  return (
    <>
      <div style={{ margin: "0 20px" }}>
        <h1>Home</h1>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          {data.items.map((el, index) => (
            <CardWithLink
              key={index}
              title={el.title}
              description={el.description}
              link={"https://v0.dev"}
            />
          ))}
        </Stack>
        <h2>Latest Blogs</h2>
        <Box sx={{ width: "100%" }}>
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
    </>
  );
}

export default App;
