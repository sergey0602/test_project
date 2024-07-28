import styled from "@mui/system/styled";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const SCard = styled(Card)(() => ({
  maxWidth: "22rem",
  boxShadow: "none",
  borderRadius: 0,
}));

export const SCardMedia = styled(CardMedia)(() => ({
  width: "22rem",
  height: "21.75rem",
  position: "relative",
}));

export const SCardContent = styled(CardContent)(() => ({
  padding: "0.5rem 0 0 0",
}));

export const SRating = styled(Typography)(() => ({
  width: "3.25rem",
  height: "3.25rem",
  position: "absolute",
  left: "0.75rem",
  top: "0.75rem",
  zIndex: 1001,
  backgroundColor: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
}));

export const SRatingText = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "0.5rem",
}));

export const SRatingValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "rating",
})<{ rating: number }>(({ rating }) => ({
  fontWeight: 500,
  fontSize: rating === 0 ? "1rem" : "1.5rem",
}));

export const SPersonalInfo = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "1.625rem",
}));

export const SStatus = styled("img")(() => ({
  marginLeft: "0.313rem",
  marginBottom: "0.625rem",
}));

export const STopics = styled(Typography)(() => ({
  display: "flex",
}));

export const SSubjectName = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "1.125rem",
  fontStyle: "italic",
  color: "#666666",
}));

export const SLastTime = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "1.125rem",
  color: "#CCCCCC",
}));

