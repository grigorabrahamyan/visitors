import styled from "@emotion/styled";
import { Container, Stack, Alert, Box } from "@mui/material";

export const SContainer = styled(Container)({
  minWidth: "100%",
});

export const SHeaderStack = styled(Stack)({
  height: "64px",
  backgroundColor: "error",
});

export const SAlert = styled(Alert)({
  width: "50%",
  margin: "0 auto",
});

export const SBoxAlert = styled(Box)({
  position: "absolute",
  width: "100%",
  bottom: "3%",
  transition: "all 0.3s",
  visibility: "visible",
  maxHeight: "300px",
  "&.hide": {
    visibility: "hidden",
    maxHeight: "0",
  },
});

export const SBoxLayout = styled(Box)({
  height: "100%",
  position: "relative",
});
