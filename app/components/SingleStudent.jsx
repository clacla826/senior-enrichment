import React, { Component } from "react";
import axios from "axios";





//const SingleStudent = (props) => {

export default class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      student: {}
    }
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    console.log(studentId)
    axios
      .get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({student}))
  }

  render() {
    const student = this.state.student;
    console.log("SINGLE STUDENT", student)
    return (
      <div>
        <h1>{student.name}</h1>
        <h1>{student.campusId}</h1>
        <h1>{student.email}</h1>
      </div>

    )

  }

  // const studentId = props.match.params.studentId;
  // console.log("PRORORORO", studentId)

}


