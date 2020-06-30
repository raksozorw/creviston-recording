import React, {useState, useEffect} from 'react';
import Collapse from 'react-bootstrap/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';



const Client = (props) => {
    
    const [open, setOpen] = useState();
    const [credit, setCredit] = useState([]);

    const object = props.credits

    useEffect(() => { // takes the credits object provided by props and turns the true value into an array with commas except for the last 
        const credits = []
      
        for (const property in object) {
            if (object[property] === true) {
                credits.push(`${property}, `) 

            }

            const cleanCredits = credits.map((element, index) => {
                if (index + 1 === credits.length) {
                    return element.replace(",", "")
                } else {
                    return element
                }        
            });

            setCredit(cleanCredits)
        }
        
    }, []);
        
    
    

    return <div className="client-card" id={props.id}>
        <h4>{props.name}</h4> 
        <iframe
            className="player"
            title="player"
            src={`https://open.spotify.com/embed/track/${props.spotify}`}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
        />
        
        <Collapse in={open}>
            <div className="client-info">
                <h5>Album:</h5>
                <p>{props.track}</p>
                <h5>Year:</h5>
                <p>{props.year}</p>
                <h5>Credits:</h5>
                <p>{credit}</p>
              
                
            
                
            </div>
        </Collapse>
        <div className="text">
           

           {!open && <ExpandMoreIcon onClick={() => setOpen(!open)}
                fontSize="large"
                aria-controls="example-collapse-text"
                aria-expanded={open} className="expand-btn" />
            }
            {open && <ExpandLessIcon onClick={() => setOpen(!open)}
                fontSize="large"
                aria-controls="example-collapse-text"
                aria-expanded={open} className="expand-btn" />}
           

        </div>
        


    </div>
};

export default Client