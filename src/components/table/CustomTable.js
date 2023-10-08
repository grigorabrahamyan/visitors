import { useMemo, useState } from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  TablePagination,
  Table,
  Toolbar,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { HEADER_CELL } from "../constants/table.constant";
import HeaderCell from "./HeaderCell";
import BodyCell from "./BodyCell";
import TableWrapper from "./TableWrapper";
import {
  setPage,
  setRowPerPage,
  removeData,
} from "../../store/slices/visitorsLIst.slice";
import { SHovertableRow } from "./Table.style";

const CustomTable = () => {
  const dispatch = useDispatch();
  const { dataMap, page, rowsPerPage } =
    useSelector((state) => state.visitorsList) ?? {};

  const data = Object.values(dataMap).reverse();

  const initalStateSelected = {
    length: 0,
  };

  const [selected, setSelected] = useState(initalStateSelected);

  const visibleRows = useMemo(() => {
    const tmpPage = page * rowsPerPage;
    return data.slice(tmpPage, tmpPage + rowsPerPage);
  }, [page, rowsPerPage, data]);

  const isAllSelected =
    selected.length > 0 && selected.length === visibleRows.length;
  const isSomeSelected =
    selected.length > 0 && selected.length < visibleRows.length;

  const handleChangePage = (_, newPage) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (e) => {
    dispatch(setRowPerPage(e.target.value));
  };

  const setAllSameValue = (arr, obj, value) => {
    arr.forEach(({ id }) => (obj[id] = value));
  };

  const handleClickSelectAllClick = () => {
    if (isAllSelected) {
      setAllSameValue(visibleRows, selected, false);
      selected.length = 0;
    } else {
      setAllSameValue(visibleRows, selected, true);
      selected.length = visibleRows.length;
    }
    setSelected({ ...selected });
  };

  const handleSelectedClick = (id) => {
    if (selected[id]) {
      delete selected[id];
      if (selected.length) {
        selected.length--;
      }
      setSelected({ ...selected });
    } else {
      if (selected.length) {
        selected.length++;
      } else {
        selected.length = 1;
      }
      setSelected({ ...selected, [id]: true });
    }
  };

  const handleClickRemove = () => {
    if (selected.length) {
      dispatch(removeData(Object.keys(selected)));
      setSelected(initalStateSelected);
    }
  };

  return (
    <TableWrapper isTableShow={!!visibleRows.length}>
      <>
        <Toolbar>
          <Grid container spacing={3} alignItems={"center"}>
            <Grid item>
              <Typography>Selected {selected.length} items</Typography>
            </Grid>
            <Grid item>
              <Button
                disabled={!selected.length}
                variant="contained"
                onClick={handleClickRemove}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {HEADER_CELL.map((cell) => {
                  return (
                    <TableCell key={cell.id} sx={{ textAlign: cell.textAlign }}>
                      <HeaderCell cell={cell}>
                        <Checkbox
                          color="primary"
                          indeterminate={isSomeSelected}
                          checked={isAllSelected}
                          inputProps={{
                            "aria-label": "select all desserts",
                          }}
                          onClick={handleClickSelectAllClick}
                        />
                      </HeaderCell>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row) => {
                return (
                  <SHovertableRow
                    key={row.id}
                    onClick={() => handleSelectedClick(row.id)}
                  >
                    <BodyCell row={row} selected={selected} />
                  </SHovertableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    </TableWrapper>
  );
};

export default CustomTable;
