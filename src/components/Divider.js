import React from "react";

export default function Divider() {
  return (
    <div>
      <div
        className='home-background'
        style={{
          backgroundImage: "url(" + require("../images/tim-header.jpeg") + ")",
        }}
      >
        <div className='darkened divider'></div>
      </div>
    </div>
  );
}
