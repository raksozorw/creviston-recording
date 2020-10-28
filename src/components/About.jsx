import React from "react";
import ScrollFade from "./ScrollFade";

const About = () => {
  return (
    <div>
      <ScrollFade
        content={
          <div className='about container-fluid'>
            <img
              alt='tim'
              className='tim-photo'
              src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/tim-bio-pic.jpeg")}
            ></img>
            <div className='text'>
              <h2>About Me</h2>
              <p>
                {" "}
                For over five years I’ve been proudly helping other musicians
                bring their ideas to life through my skills in production,
                engineering, mixing, mastering, and writing. I’ve worked with
                clients across genres from hardcore to indie rock, always
                striving to find the perfect way to achieve their vision for the
                project.
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default About;
