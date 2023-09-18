import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
// const regex = /(<([^>]+)>)/gi;

export default function Blog() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`https://restapinodejs.onrender.com/api/allBlog`).then((res) => setApiData(res.data.data));
    // async function fetchData() {
    //   const url = `https://restapinodejs.onrender.com/api/allBlog`;
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   setApiData(data.data);
    // }
    // fetchData();
  }, []);
  return (
    <>
      <main style={{ backgroundColor: "#f2f2f2", paddingBlock: "50px" }}>
        <Typography variant="h1" style={{ fontSize: "40px", fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>
          Blog
        </Typography>
        <Container>
          <Grid container spacing={4}>
            {Array.isArray(apiData) &&
              apiData.map((item) => (
                <Grid item sm={6} md={4} key={item._id}>
                  <Card>
                    <CardHeader title={item.title} subheader={format(new Date(item.createdAt), "yyyy/MM/dd kk:mm:ss")} />
                    <CardMedia component="img" height="194" image={`data:${item.photo.contentType};base64,${item.photo.data}`} alt="Paella dish" />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        dangerouslySetInnerHTML={{
                          __html: item.postText.trim().split(" ").slice(0, 20).join(" "),
                        }}
                      >
                        {/* {item.postText.replace(regex, "").trim().split(" ").slice(0, 20).join(" ")} */}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="big">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
