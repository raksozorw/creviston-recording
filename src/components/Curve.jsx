import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'


function Example(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div>
            
</div>
        </Collapse>
      </>
    );
  }
  
  export default Example