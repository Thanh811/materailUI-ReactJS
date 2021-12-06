import Container from "@mui/material/Container";
import RouteComponent from "./Route";
import WrapperProvider from "./WrapperProvider";

function App() {
  return (
    <Container maxWidth="lg" style={{ height: "100vh" }}>
      <WrapperProvider>
        <RouteComponent />
      </WrapperProvider>
    </Container>
  );
}

export default App;
