import React from "react";
import gearList from "./gearList";
import Gear from "./Gear";
import ScrollFade from "./ScrollFade";

function createGear(list) {
  return (
    <Gear
      name={list.name}
      description={list.description}
      image={list.image}
      key={list.id}
    />
  );
}

const Equipment = () => {
  return (
    <>
      <div className='equipment'>
        <div></div>
        <ScrollFade
          content={
            <div className='gear-wrapper'>{gearList.map(createGear)}</div>
          }
        />
        <section id='section-2'></section>
        <br></br>
      </div>
    </>
  );
};

export default Equipment;
