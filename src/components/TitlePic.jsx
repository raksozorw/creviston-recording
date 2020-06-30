import React, { useState } from "react";


const TitlePic = () => {
  const [service, setService] = useState("mixing")
  const [opacity, setOpacity] = useState({opacity: "100%"})
 

  const selectService = (type) => {
    if (service !== type) {
      setOpacity({ opacity: "0%" })
      setTimeout(() => {
        setOpacity({ opacity: "100%" })
        setService(type)
      }, 500)
    }
  }


  const unselect = () => {
    setOpacity({opacity: "100%"})
  }


  
  return (
    <div className="title-area">
        
      
      <div id="nopad" className="align container-fluid">
  
        <img style={{ paddingRight: "0px" }} className="main-image container-fluid" src={require('/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/042D9999-8A69-4CCD-9C44-DC66A4EE8D24.JPG')} alt="gear"></img>
        <div className="main-content">
       
          <div className="one title-menu">
            
            <div className="title-menu-item" onMouseOver={() => selectService("production")} onClick={() => selectService("production")} onMouseOut={unselect}><h2>Production</h2></div>
            <div className="title-menu-item" onMouseOver={() => selectService("engineering")} onClick={() => selectService("engineering")} onMouseOut={unselect}><h2>Engineering</h2></div>
            <div className="title-menu-item" onMouseOver={() => selectService("writing")} onClick={() => selectService("writing")} onMouseOut={unselect}><h2>Writing</h2></div>
            <div className="title-menu-item" onMouseOver={() => selectService("mixing")} onClick={() => selectService("mixing")} onMouseOut={unselect}><h2>Mixing</h2></div>
            <div className="title-menu-item" onMouseOver={() => selectService("mastering")} onClick={() => selectService("mastering")} onMouseOut={unselect}><h2>Mastering</h2></div>
            

              
              
            <p>See an overview of the main services I offer.</p>
          </div>
            <div className="two"></div>
          <div style={opacity} className="three service">
          {service === "production" && <div><img alt="mix" className="icon" src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/dj.png")}></img>
              <p className="service-info">Take your song from demo to <br></br> professional finished product.</p>
            </div>}

            {service === "engineering" && <div><img alt="mix" className="icon" src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/board.png")}></img>
              <p className="service-info">Take your song from demo to <br></br> professional finished product.</p>
            </div>}

            {service === "mixing" && <div>
              <img alt="mix" className="icon" src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/sound-waves.png")}></img>
              <p className="service-info">Full suite of top of <br></br> the line gear and plugins.</p>
            </div>}

            {service === "mastering" && <div>
              <img alt="mix" className="icon" src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/sound-wave.png")}></img>
              <p className="service-info">Optimized to sound perfect on <br></br> all major streaming services.</p>
            </div>}
              
            

            {service === "writing" && <div><img alt="mix" className="icon" src={require("/Users/oskarwroz/Documents/WebDev-Projects/tim-project/tim/src/images/key.png")}></img>
              <p className="service-info">Take your song from demo to <br></br> professional finished product.</p>
            </div>}
  
          </div>
            

  
        </div>
      </div>
    </div>
  );
  }


        
                    
export default TitlePic