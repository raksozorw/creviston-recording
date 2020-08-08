import React, { useState } from "react";

const Home = () => {
  const [service, setService] = useState("production");
  const [opacity, setOpacity] = useState({ opacity: "100%" });

  const selectService = (type) => {
    if (service !== type) {
      setOpacity({ opacity: "0%" });
      setTimeout(() => {
        setOpacity({ opacity: "100%" });
        setService(type);
      }, 500);
    }
  };

  const unselect = () => {
    setOpacity({ opacity: "100%" });
  };

  const services = [
    "production",
    "engineering",
    "writing",
    "mixing",
    "mastering",
  ];

  const renderServices = (serviceInput) => {
    return (
      <div
        className='home-item'
        onMouseOver={() => selectService(serviceInput)}
        onClick={() => selectService(serviceInput)}
        onMouseOut={unselect}
      >
        <h2>{serviceInput.charAt(0).toUpperCase() + serviceInput.slice(1)}</h2>
      </div>
    );
  };

  return (
    <div
      className='home home-background'
      style={{
        backgroundImage: "url(" + require("../images/tim-header.jpeg") + ")",
      }}
    >
      <div id='nopad' className='align container-fluid'>
        <div className='home-content'>
          <img
            alt='logo'
            className='home-logo'
            src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/tim creviston (6).png")}
          ></img>

          <div className='home-service'>
            {services &&
              services.map((service) => {
                return renderServices(service);
              })}
          </div>

          <div style={opacity} className='service'>
            {service === "production" && (
              <div className='service-grid'>
                <img
                  alt='mix'
                  className='icon'
                  src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/production.png")}
                ></img>
                <p className='service-info'>
                  Take your song from demo to <br></br> professional finished
                  product.
                </p>
              </div>
            )}

            {service === "engineering" && (
              <div>
                <img
                  alt='mix'
                  className='icon'
                  src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/engineering.png")}
                ></img>
                <p className='service-info'>
                  Take your song from demo to <br></br> professional finished
                  product.
                </p>
              </div>
            )}

            {service === "mixing" && (
              <div>
                <img
                  alt='mix'
                  className='icon'
                  src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/mixing.png")}
                ></img>
                <p className='service-info'>
                  Full suite of top of <br></br> the line gear and plugins.
                </p>
              </div>
            )}

            {service === "mastering" && (
              <div>
                <img
                  alt='mix'
                  className='icon'
                  src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/mastering.png")}
                ></img>
                <p className='service-info'>
                  Optimized to sound perfect on <br></br> all major streaming
                  services.
                </p>
              </div>
            )}

            {service === "writing" && (
              <div>
                <img
                  alt='mix'
                  className='icon'
                  src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/writing.png")}
                ></img>
                <p className='service-info'>
                  Take your song from demo to <br></br> professional finished
                  product.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
