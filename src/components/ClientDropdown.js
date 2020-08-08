import React from "react";
import { Dropdown } from "react-bootstrap";

export default function ClientDropdown(props) {
  return (
    <div className='dropdown'>
      <Dropdown className='btn-group'>
        <Dropdown.Toggle variant='btn btn-outline-light' id='dropdown-basic'>
          {props.clientDisplay}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            className='btn btn-outline-light'
            onClick={() => props.handleChange("All")}
          >
            All
          </Dropdown.Item>
          <Dropdown.Item
            className='btn btn-outline-light'
            onClick={() => props.handleChange("Production")}
          >
            Production
          </Dropdown.Item>
          <Dropdown.Item
            className='btn btn-outline-light'
            onClick={() => props.handleChange("Engineering")}
          >
            Engineering
          </Dropdown.Item>
          <Dropdown.Item
            className='btn btn-outline-light'
            onClick={() => props.handleChange("Mixing")}
          >
            Mixing
          </Dropdown.Item>
          <Dropdown.Item
            className='btn btn-outline-light'
            onClick={() => props.handleChange("Mastering")}
          >
            Mastering
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
