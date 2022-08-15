import React from "react";
import "./Hero.css";
import Button from "@mui/material/Button";
import plant1 from "../images/plant1.jpg";
import plant2 from "../images/plant2.jpg";
import plant3 from "../images/plant3.jpg";
import plant4 from "../images/plant4.jpg";
import "react-slideshow-image/dist/styles.css";
const Hero = () => {
  const images = [plant1, plant2, plant3, plant4];
  return (
    <div>
      <h1 className="title">Indoor plants made easy</h1>
      <h3 className="title2">
        Patch plants makes it easy for you to find a plant that fits
      </h3>
      <h3 className="title3"> your home environment</h3>
      <div className="styleBtn">
        <Button
          sx={{
            padding: 0.8,
            color: "white",
            display: "block",
            backgroundColor: "#032612",
            fontFamily: "Lora",
            textTransform: "none",
            borderRadius: 0.2,
            "&:hover": { backgroundColor: "#032612" },
          }}
          className="button"
        >
          Shop Plants
        </Button>
      </div>
      <section className="wrapper">
        {
          //loop through images array and display each image
          images.map((image, index) => {
            return (
              <img
                src={image}
                key={index}
                alt="plant"
                className={"images" + index}
                style={{ width: 300, height: 400 }}
              />
            );
          })
        }
      </section>
    </div>
  );
};

export default Hero;
