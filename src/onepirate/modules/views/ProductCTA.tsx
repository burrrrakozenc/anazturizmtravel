import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "../components/Typography";
// import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";

// import Button from "../components/Button";

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h2" sx={{m: 5,display:'flex',justifyContent:'center'}}>
        İLETİŞİM
      </Typography>

      <Container component="section" sx={{mt: 10, display: "flex"}}>

        <Grid container sx={{
          display: "flex",
          justifyContent: "center",
          // bgcolor: "warning.main",
          minHeight: 500
          // py: 8,
          // px: 3,
        }}>
          <Grid item xs={12} md={6} sx={{zIndex: 1}}>
            <Box>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{maxWidth: 500}}
              >
                <Box sx={{m: 3, fontWeight: 700}}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Email
                  </Typography>
                  <Link href="mailto:anazturizmtravel@gmail.com">
                    anazturizmtravel@gmail.com
                  </Link>
                </Box>
                <Box sx={{m: 3, fontWeight: 700}}>
                  <Typography variant="h5">
                    Telefon
                  </Typography>
                  <Link href="tel:+905455663798">
                    +90 545 566 37 98
                  </Link>
                </Box>
                <Box sx={{m: 3, fontWeight: 700}}>
                  <Typography variant="h5">
                    Adres
                  </Typography>
                  <Link href="https://goo.gl/maps/A7EeLQ6on9k2mia36">
                    Defterdar Mah. Otakçılar Cad. No: 78/94 Flatofis Haliç, Eyüpsultan-İstanbul
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{zIndex: 1, p: 3}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12037.638547820527!2d28.9323602!3d41.0381702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31480b82223c5a08!2sFlatofis%20Hali%C3%A7!5e0!3m2!1str!2str!4v1669938268833!5m2!1str!2str"
              width="320" height="240" loading="lazy"
              title="myFrame"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
          {/*  item*/}
          {/*  xs={12}*/}
          {/*  md={6}*/}
          {/*  sx={{ display: { md: "block", xs: "none" }, position: "relative" }}*/}
          {/*>*/}
          {/*  <Box*/}
          {/*    sx={{*/}
          {/*      position: "absolute",*/}
          {/*      top: -67,*/}
          {/*      left: -67,*/}
          {/*      right: 0,*/}
          {/*      bottom: 0,*/}
          {/*      width: "100%",*/}
          {/*      background: "url(/productCTAImageDots.png)",*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <Box*/}
          {/*    component="img"*/}
          {/*    src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"*/}
          {/*    alt="call to action"*/}
          {/*    sx={{*/}
          {/*      position: "absolute",*/}
          {/*      top: -28,*/}
          {/*      left: -28,*/}
          {/*      right: 0,*/}
          {/*      bottom: 0,*/}
          {/*      width: "100%",*/}
          {/*      maxWidth: 600,*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</Grid>*/}
        </Grid>
        <Snackbar
          open={open}
          closeFunc={handleClose}
          message="We will send you our best offers, once a week."
        />
      </Container>
    </div>
  );
}

export default ProductCTA;
