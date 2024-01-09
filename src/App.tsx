import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Box bgColor="#fafcfb" fontSize="1.2rem">
      <Header />
      <Main />
    </Box>
  );
}

export default App;
