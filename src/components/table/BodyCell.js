import { Grid, Checkbox, TableCell, Chip } from "@mui/material";
import { SCustomTableCell } from "./Table.style";

const BodyCell = ({ row, selected }) => {
  const { visitor, email, department, id } = row ?? {};

  return (
    <>
      <SCustomTableCell>
        <Grid container alignItems={"center"}>
          <Grid item>
            <Checkbox checked={!!selected[id]} />
          </Grid>
          <Grid item>{visitor}</Grid>
        </Grid>
      </SCustomTableCell>
      <TableCell>{email}</TableCell>
      <TableCell sx={{ textAlign: "right" }}>
        <Chip label={department} />
      </TableCell>
    </>
  );
};

export default BodyCell;
