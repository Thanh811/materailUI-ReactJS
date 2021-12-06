import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Information = () => {
  return (
    <>
      <Typography variant="h5">Golden Future</Typography>
      <Card>
        <CardHeader
          subheader="Side end May 15, 2022 at 11:56am +08"
          avatar={<AccessTimeIcon />}
        />
        <CardContent style={{ backgroundColor: "aliceblue" }}>
          <Typography gutterBottom variant="body2" component="div">
            Currency price
          </Typography>
          <Typography variant="h5" color="text.secondary">
            0.247
          </Typography>
        </CardContent>
        <CardActions style={{ backgroundColor: "aliceblue" }}>
          <Button size="large" variant="contained">
            <SaveIcon />
            Buy now
          </Button>
          <Button size="large" variant="outlined">
            <LocalOfferIcon />
            Make offer
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Information;
