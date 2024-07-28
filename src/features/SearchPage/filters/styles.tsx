import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/system/styled";

export const SFiltersWrapper = styled(Box)(({theme}) => ({
  width: "100%",
  display: "flex",
  gap: "1.25rem",
  flexWrap: "wrap",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const SDropdownHeaderWrapper = styled(Box)(() => ({
  textAlign: "left",
}));

export const SDropdownHeader = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "1.25rem",
  color: "#000000",
  paddingLeft: "0.5rem",
  paddingBottom: "0.5rem",
}));

export const SAgeDropdownWrapper = styled(Box)(() => ({
  display: "flex",
}));

export const SAgeDescription = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "1rem",
  color: "#000000",
  margin: "auto 0.5rem"
}));

export const SAgeDropdownsWrapper = styled(Box)(() => ({
  width: "19.5rem",
  display: "flex",
  justifyContent: "space-between",
}));

export const SSubmitWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
}));
