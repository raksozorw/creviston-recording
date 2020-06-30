import React, {useState} from 'react';
import Client from './Client';
import clientList from './clientList';



const Clients = () => {

    const [clientDisplay, setClientDisplay] = useState("all")
    const [opacity, setOpacity] = useState({opacity: "100%"})

    const handleChange = (serviceType) => {
        transition(serviceType)
        
    }

    const transition = (type) => {
        if (clientDisplay !== type) {
            setOpacity({ opacity: "0%" })
            setTimeout(() => {
                setOpacity({ opacity: "100%" })
                setClientDisplay(type)
            }, 500)
        }
    };

    const switchClients = (list) => {
        const type = () => {
            switch (clientDisplay) {
                case "mixing":
                    return list.credits.mixing;
                case "mastering":
                    return list.credits.mastering;
                case "engineering":
                    return list.credits.engineering;
                case "production":
                    return list.credits.production;
                default:
                    return list.credits;
            }
        }

        if (type()) {
                
            return <Client
                name={list.name}
                track={list.track}
                trackPic={list.trackPic}
                credit={list.credit}
                writeup={list.writeup}
                spotify={list.spotify}
                key={list.id}
                year={list.year}
                credits={list.credits}
            />
        
        }
    };

// I could make a function at returns a button with the input for text and input for handle change     
    return <div className="clients">
        <div className="">
            <h2 className="">Clients</h2> 
            <div className="button-grid container"> 
                <button className="btn btn-outline-light" onClick={() => handleChange("all")}>All</button>
                <button className="btn btn-outline-light" onClick={() => handleChange("production")}>Production</button>
                <button className="btn btn-outline-light" onClick={() => handleChange("engineering")}>Engineering</button>
                <button className="btn btn-outline-light" onClick={() => handleChange("mixing")}>Mixing</button>
            <button className="btn btn-outline-light" onClick={() => handleChange("mastering")}>Mastering</button>
            
           
            </div>

            <div className="client-wrapper client-list container" style={opacity}>
                 {clientList.map(switchClients)}
            </div>
            

      
            <hr></hr>

        

        </div>
    </div>
};


export default Clients