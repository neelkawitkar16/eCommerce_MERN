import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/neel-kawitkar-73312a156/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dipizmspw/image/upload/v1668178739/avatars/hprosyfpfwj9gflryo3f.jpg"
              alt="Founder"
            />
            <Typography>Neel Kawitkar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              Hi, my name is Neel. I created this website to learn MERN stack. This project was really cool and I got a lot to learn. It taught me patience (obviously thanks to the bugs &#128027;). 
              I'm an avid reader &#128214;, like to cook &#127831; and they have nominated me for MasterChef &#129315;.
              To keep myself fit I play Cricket &#127951; and Football &#9917;
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">You can find me on</Typography>

            <a href="https://www.linkedin.com/in/neel-kawitkar-73312a156/" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;