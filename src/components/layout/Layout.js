import { AppBar, Grid, Stack, Typography } from "@mui/material";
import { SContainer, SHeaderStack } from "./Layout.style";
import VisitorForm from "../visitor_form/VisitorForm";
import CustomTable from "../table/CustomTable";

const Layout = () => {
  return (
    <Stack spacing={3}>
      <AppBar position="static" color="primary">
        <SContainer>
          <SHeaderStack justifyContent={"center"}>
            <Typography variant="h6" component={"h1"}>
              Application
            </Typography>
          </SHeaderStack>
        </SContainer>
      </AppBar>
      <SContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} xl={3.5}>
            <VisitorForm />
          </Grid>
          <Grid item xs={12} lg={8} xl={8.5}>
            <Grid container flexDirection={"column"} spacing={3}>
              <Grid item>
                <Typography variant="h4">Visitor managment</Typography>
              </Grid>
              <Grid item>
                <CustomTable />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SContainer>
    </Stack>
  );
};

export default Layout;
