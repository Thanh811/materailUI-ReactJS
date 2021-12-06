import React, { useContext } from "react";
import { WrapperContext } from "./WrapperProvider";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

const ImageUpload = () => {
  const wrapperContext = useContext(WrapperContext);
  const { files, type } = wrapperContext ?? {};

  const displayContentCard = () => {
    switch (true) {
      case type?.includes("image"):
        return (
          <CardMedia component="img" image={files && files} alt="Paella dish" />
        );
      case type?.includes("audio"):
        return (
          <audio controls>
            <source src={files && files} type={type ?? ""} />
          </audio>
        );
      case type?.includes("video"):
        return (
          <video width="320" height="240" controls>
            <source src={files && files} type={type ?? ""} />
          </video>
        );
      default:
        break;
    }
  };
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
      />

      <CardContent>{displayContentCard()}</CardContent>
    </Card>
  );
};

export default ImageUpload;
