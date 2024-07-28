import styled from "@mui/system/styled";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const SCardsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginBottom: "1rem",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const SSpinner = styled(CircularProgress)(() => ({
  marginTop: "3rem",
  marginBottom: "3rem",
}));
