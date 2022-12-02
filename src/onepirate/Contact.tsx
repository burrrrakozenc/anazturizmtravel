import * as React from "react";
import Container from "@mui/material/Container";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
// import withRoot from "./modules/withRoot";
import ProductCTA from "./modules/views/ProductCTA";
import withRoot from "./modules/withRoot";

function Contact() {
  return (
    <React.Fragment>
      <Container>
        <AppAppBar/>
        <ProductCTA/>
        <AppFooter/>
      </Container>
    </React.Fragment>
  )
}

export default withRoot(Contact);