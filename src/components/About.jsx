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
              src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/B4F84836-FDEB-4CA6-8028-0FD68A2B5431-D421733E-4C52-4F8B-8F55-9D420E68BEB2 2.jpg")}
            ></img>
            <div className='text'>
              <h2>About Me</h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, pri adhuc qualisque cu. Assentior
                definitionem ex mel. Errem tempor dolores et eum, ne quot
                democritum ius, has eu clita gubergren. Cu ludus quaerendum
                dissentiet vel, oporteat perfecto at vix. Vidisse sapientem
                prodesset has ex. Ut natum graeci eos, qui commodo verterem
                definitiones et. Mundi exerci consetetur et quo, discere
                pertinax ea usu, reque nemore patrioque vel cu.
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default About;
