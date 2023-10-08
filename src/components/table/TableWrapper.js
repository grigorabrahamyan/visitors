import { Box, Paper, Typography } from "@mui/material";
import { SEmptyTableBox } from "./Table.style";

const TableWrapper = ({ children, isTableShow }) => {
  return (
    <Box>
      <Paper>
        {isTableShow ? (
          children
        ) : (
          <SEmptyTableBox>
            <Typography variant="h6" fontWeight={400} textAlign={"center"}>
              There is no Visitor. Please add the new one from the left menu.
            </Typography>
          </SEmptyTableBox>
        )}
      </Paper>
    </Box>
  );
};

export default TableWrapper;
