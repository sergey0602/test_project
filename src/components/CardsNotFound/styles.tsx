import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const SNotFoundWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
}));

export const SNotFoundImage = styled("img")(() => ({
  width: "10rem",
  height: "10rem",
}));

export const SNotFoundText = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "1.25rem",
  color: "#000000",
}));
