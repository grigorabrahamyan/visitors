import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { TableCell, TableRow } from "@mui/material";

export const SEmptyTableBox = styled(Box)({
  padding: "24px",
});

export const SCustomTableCell = styled(TableCell)({
  width: "33%",
});

export const SHovertableRow = styled(TableRow)({
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(239, 87, 66, 0.04)",
  },
});
