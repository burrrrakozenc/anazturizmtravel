import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { Link as RouterLink } from "react-router-dom";

const backgroundImage =
  "https://www.greecetravel.com/turkey/istanbul/istanbul-ferries001.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        ANAZ TURİZM & TRAVEL
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Şehirdeki Yardımcınız Biz Olalım
      </Typography>
      {/*<Button*/}
      {/*  color="secondary"*/}
      {/*  variant="contained"*/}
      {/*  size="large"*/}
      {/*  component={RouterLink}*/}
      {/*  to="/sign-up/"*/}
      {/*  sx={{ minWidth: 200 }}*/}
      {/*>*/}
      {/*  Register*/}
      {/*</Button>*/}
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Şehri keşfetmeye hazır olun!
      </Typography>
    </ProductHeroLayout>
  );
}
