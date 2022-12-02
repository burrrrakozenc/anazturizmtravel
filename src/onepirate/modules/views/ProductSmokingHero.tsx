import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from "@mui/material/Link";
import Typography from "../components/Typography";

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Link href="https://wa.me/905455663798">
      <Button
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <WhatsAppIcon sx={{ color: 'green', size: 60, fontSize: 60 }} />
        <Typography variant="h4" component="span">
          BİR SORUNUZ VARSA WHATSAPP HATTIMIZA YAZIN
        </Typography>
      </Button>
      </Link>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Size yardım etmek için buradayız!
      </Typography>
      <Box
        component="img"
        src="/producBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;
