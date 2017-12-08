import React, { Component } from "react";
import axios from "axios";
import AllStudent from "./AllStudent";

export default class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      campus: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/students/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({ campus }));
  }

  render() {
    const campus = this.state.campus;
    console.log("SINGLE CAMPUS", campus)
    return (
      <div className="campus">
        <div>
          <h3>{campus.name}</h3>
          <img src={campus.imageUrl} className="img-thumbnail" />
        </div>
        <AllStudent />
      </div>
    );
  }
}
