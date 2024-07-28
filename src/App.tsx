import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

import { SearchPage } from "./features/SearchPage";
import { theme } from "./utils/theme";

const SContainer = styled(Box)(() => ({
  maxWidth: "1184px",
  padding: "26px 44px 80px",
}));

const SContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 0,
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SContainer>
        <SContent>
          <SearchPage />
        </SContent>
      </SContainer>
    </ThemeProvider>
  )
}

export default App;
