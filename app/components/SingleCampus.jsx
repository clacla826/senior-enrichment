import React, { Component } from "react";
import axios from "axios";
import Bluebird from "bluebird";
import AllStudent from "./AllStudent";
import CampusStudents from "./CampusStudents";

export default class SingleCampus extends Component {
  constructor() {
    super();
    this.state = {
      campus: {}
    };
  }

  componentDidMount() {

    const campusId = this.props.match.params.campusId;
    const mainPath = `/api/campuses/${campusId}`;
    const paths = [mainPath, `${mainPath}/students`];

    console.log('paths', paths)
    Bluebird
      .map(paths, path => axios.get(path))
      .map(res => {
        console.log('RES DATA', res.data)
        return res.data;
      })
      .spread((campus, students) => {
       console.log('Campus after', campus)
        campus.students = students;
        this.setState({campus})
      })
  }

  render() {
    const campus = this.state.campus;
    console.log("SINGLE CAMPUSS", this.state)
    return (
      <div className="campus">
      <h1>HIIIIIHOHOOO</h1>
        <div>
          <h3>{campus.name}</h3>
          <img src={campus.imageUrl} className="img-thumbnail" />
        </div>

        <CampusStudents students={campus.students} />

        </div>
    );
  }
}
