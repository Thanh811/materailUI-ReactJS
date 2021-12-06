import { useContext, forwardRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { DropzoneArea } from "react-mui-dropzone";
import { WrapperContext } from "./WrapperProvider";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateForm = () => {
  const navigate = useNavigate();
  const vertical = "top";
  const horizontal = "right";

  const wrapperContext = useContext(WrapperContext);
  const { setFiles, setType, files } = wrapperContext ?? {};
  const [open, setOpen] = useState(false);

  const uploadImage = (file: File[]) => {
    if (Array.isArray(file) && file.length > 0) {
      setType && setType(file[0].type);
      setFiles && setFiles(URL.createObjectURL(file[0]));
    }
  };

  const saveImage = () => {
    if (!files) {
      setOpen(true);
      return;
    }
    navigate("/home");
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Box component="div">
        <Typography mt={2} variant="h5" gutterBottom component="div">
          1. Create a form which you can upload content the image file with some
          accompanying data fields
        </Typography>
        <Typography mt={2} variant="h4" gutterBottom component="div">
          Create new item
        </Typography>
        <Typography mt={2} variant="subtitle2" gutterBottom component="div">
          Image, Video, Audio, or 3D Modals
        </Typography>
        <Typography mt={2} variant="body2" gutterBottom>
          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
          Max size: 100MB
        </Typography>
        {/* Image */}
        <div style={{ width: "50%" }}>
          <DropzoneArea
            onChange={(file) => uploadImage(file)}
            filesLimit={1}
            maxFileSize={100000000}
            acceptedFiles={[
              "image/jpeg",
              "image/png",
              "image/gif",
              "image/svg",
              ".mp4",
              ".webm",
              ".wav",
              ".ogg",
            ]}
          />
        </div>

        <Typography mt={2} variant="body2" gutterBottom>
          Name
        </Typography>
        <TextField fullWidth label="Name Item" margin="dense" />
        <Typography mt={2} variant="body2" gutterBottom>
          External Link
        </Typography>
        <TextField fullWidth label="Name Item" margin="normal" />
        <Button variant="contained" onClick={saveImage}>
          Create
        </Button>
      </Box>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please select your image
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateForm;
