import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <Container fixed>
      <Box>
        <Typography variant="h5" gutterBottom component="div">
          1. Create a form which you can upload content the image file with some accompanying data fields
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
        Create new item
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        Image, Video, Audio, or 3D Modals
      </Typography>
      <Typography variant="body2" gutterBottom>
        File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, Max size: 100MB
      </Typography>
      {/* Image */}
      <Typography variant="body2" gutterBottom>
        Name
      </Typography>
      <TextField fullWidth label="Name Item" id="fullWidth" />
      <Typography variant="body2" gutterBottom>
        External Link
      </Typography>
      <TextField fullWidth label="Name Item" id="fullWidth" />
      </Box>
    </Container>
  );
}

export default App;
