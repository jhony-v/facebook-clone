import StoreProvider from "./store/StoreProvider";
import { ChakraProvider } from "@chakra-ui/react";
import Pages from "./pages";

function App() {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Pages />
      </ChakraProvider>
    </StoreProvider>
  );
}

export default App;
