import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import Logo from '../../../anaz-2.png'

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ fontSize: 24 }}
          >
            <object style={{marginTop:'1rem'}} data={Logo} height="150" width="150" aria-label="logo-anaz" />
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/"
              sx={rightLink}
            >
              {"ANA SAYFA"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              component={RouterLink}
              to="/terms"
              sx={rightLink}
            >
              {"İLETİŞİM"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
