import { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ImageUpload from "./ImageUpload";
import Information from "./Information";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "./WrapperProvider";

const Home = () => {
  const navigate = useNavigate();
  const wrapperContext = useContext(WrapperContext);

  const { resetFile } = wrapperContext ?? {};
  return (
    <Container style={{ height: "100%" }}>
      <Typography variant="h5" gutterBottom>
        2. Create a display page to show uploaded image with the accompanying
        data. Do some simple formatting to make it look good
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          resetFile && resetFile();
          navigate("/");
        }}
        style={{ marginBottom: "15px" }}
      >
        Move to create form
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={4} style={{ height: "400px" }}>
          <ImageUpload />
        </Grid>
        <Grid item xs={8}>
          <Information />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
