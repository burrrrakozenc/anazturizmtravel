import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://i.lezzet.com.tr/images-xxlarge-secondary/bursa-piknik-alanlari-bursanin-en-iyi-10-piknik-alani-04306c85-29cc-4dd2-8f79-0c8ca3609f52.jpg",
    title: "Bursa",
    width: "40%",
  },
  {
    url: "https://www.memurlar.net/common/news/images/337750/tcdd-den-sirkeci-gari-aciklamasi.jpg",
    title: "SİRKECİ",
    width: "20%",
  },
  {
    url: "https://pix10.agoda.net/hotelImages/290/29007546/29007546_211130152400108897328.jpg?ca=24&ce=0&s=1024x768",
    title: "Sapanca",
    width: "40%",
  },
  {
    url: "https://manesol.com/uploads/sultanahmet-gezilecek-yerler.jpg",
    title: "sultanahmet",
    width: "38%",
  },
  {
    url: "https://cdn1.ntv.com.tr/gorsel/3QzZDX1sd0mLy3ZEY7r-fQ.jpg?width=1000&mode=crop&scale=both",
    title: "BALON TURLARI",
    width: "38%",
  },
  {
    url: "https://iasbh.tmgrup.com.tr/ee4c62/752/395/0/104/723/484?u=https://isbh.tmgrup.com.tr/sbh/2022/07/21/kapadokya-nerede-kapadokya-hangi-ilde-nereye-bagli-ve-nasil-gidilir-k1-1658414578552.jpg",
    title: "KAPADOKYA",
    width: "24%",
  },
  // {
  //   url: "https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80",
  //   title: "Walking",
  //   width: "40%",
  // },
  // {
  //   url: "https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80",
  //   title: "Fitness",
  //   width: "20%",
  // },
  // {
  //   url: "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80",
  //   title: "Reading",
  //   width: "40%",
  // },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        NEREDE OLURSANIZ OLUN, 7/24 SİZE BİR BİR TELEFON KADAR YAKINIZ
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
