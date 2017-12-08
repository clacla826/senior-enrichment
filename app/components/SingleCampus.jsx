import React, { Component } from "react";
import axios from "axios";
import Bluebird from "blubird";
import AllStudent from "./AllStudent";

export default class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      campus: []
    };
  }

  componentDidMount() {
    console.log(this)
    const campusId = this.props.match.params.campusId;
    const mainPath = `/api/campuses/${campusId}`;
    const paths = [mainPath, `/api/campuses/${campusId}`]

    axios
      .get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({ campus }));
  }

  render() {
    const campus = this.state.campus;
    console.log("SINGLE CAMPUS", campus)
    return (
      <div className="campus">
      <h1>HIIIIIHOHOOO</h1>
        <div>
          <h3>{campus.name}</h3>
          <img src={campus.imageUrl} className="img-thumbnail" />
        </div>

        <AllStudent />

        </div>
    );
  }
}
