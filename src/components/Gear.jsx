import React from "react";

const Gear = (props) => {
  return (
    <div className='zoom gear container'>
      <div className='icon-div'>
        <img src={props.image} alt='gearPic' className='gear-icon'></img>
      </div>
      <div className='mask flex-center rgba-red-strong'>
        <h3>{props.name}</h3>
      </div>
      <div className='gear-description'>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Gear;
