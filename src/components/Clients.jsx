import React, { useState, useEffect } from "react";
import Client from "./Client";
import ScrollFade from "./ScrollFade";
import { db } from "../firebase/firebaseConfig";
import ClientDropdown from "./ClientDropdown";
import ClientServiceSelect from "./ClientServiceSelect";

const Clients = () => {
  const [clientDisplay, setClientDisplay] = useState("All");
  const [opacity, setOpacity] = useState({ opacity: "100%" });
  const [clients, setClients] = useState([]);

  // get client list data from firebase realtime db (not GET tho becuase it's not a REST API)
  useEffect(() => {
    db.ref("clients").on("value", (snapshot) => {
      let allClients = [];

      snapshot.forEach((snap) => {
        allClients.push(snap.val());
      });
      setClients(allClients);
    });
  }, []);

  // next functions handle the fading transition between selected services
  const handleChange = (serviceType) => {
    transition(serviceType);
  };

  const transition = (type) => {
    if (clientDisplay !== type) {
      setOpacity({ opacity: "0%" });
      setTimeout(() => {
        setOpacity({ opacity: "100%" });
        setClientDisplay(type);
      }, 500);
    }
  };

  // logic for which clients are displayed based on service selected, default "all"
  const switchClients = (list) => {
    const type = () => {
      switch (clientDisplay) {
        case "Mixing":
          return list.credits.mixing;
        case "Mastering":
          return list.credits.mastering;
        case "Engineering":
          return list.credits.engineering;
        case "Production":
          return list.credits.production;
        default:
          return list.credits;
      }
    };

    if (type()) {
      return (
        <Client
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
      );
    }
  };

  return (
    <div className='clients'>
      <div
        className='client-background'
        style={{
          backgroundImage: "url(" + require("../images/tim-header.jpeg") + ")",
        }}
      >
        <div className='darkened'>
          <ScrollFade
            content={
              <div>
                <h2>Clients</h2>
                <ClientDropdown
                  clientDisplay={clientDisplay}
                  handleChange={handleChange}
                />
                <hr></hr>
                <ClientServiceSelect handleChange={handleChange} />
                <div
                  className='client-wrapper client-list container'
                  style={opacity}
                >
                  {clients.map(switchClients)}
                </div>

                <div className='spacer'></div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
