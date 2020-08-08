import React, { Component, setState } from "react";
import { db } from "../firebase/firebaseConfig";

export default class FirestoreTest extends Component {
  state = {
    ...this.state,
    clients: [],
  };

  array = ["a", "b", "c"];

  componentDidMount() {
    db.ref("clients").on("value", (snapshot) => {
      let allClients = [];

      snapshot.forEach((snap) => {
        allClients.push(snap.val());
      });
      this.setState({ clients: allClients });
    });
  }

  renderClients() {
    return this.state.clients.map((client) => {
      return <div>{client.name}</div>;
    });
  }

  render() {
    return (
      <div>
        <h1>TESTING</h1>
        <div>{this.renderClients()}</div>
      </div>
    );
  }
}
