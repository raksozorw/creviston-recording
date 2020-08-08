import React from "react";

export default function ClientServiceSelect(props) {
  return (
    <div className='button-grid container'>
      <button
        className='btn btn-outline-light'
        onClick={() => props.handleChange("All")}
      >
        All
      </button>
      <button
        className='btn btn-outline-light'
        onClick={() => props.handleChange("Production")}
      >
        Production
      </button>
      <button
        className='btn btn-outline-light'
        onClick={() => props.handleChange("Engineering")}
      >
        Engineering
      </button>
      <button
        className='btn btn-outline-light'
        onClick={() => props.handleChange("Mixing")}
      >
        Mixing
      </button>
      <button
        className='btn btn-outline-light'
        onClick={() => props.handleChange("Mastering")}
      >
        Mastering
      </button>
    </div>
  );
}
