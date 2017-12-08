import React, { Component } from "react";





//const SingleStudent = (props) => {

export default class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      student: {}
    }
  }

  componentDidMount() {
    const studentId = props.match.params.studentId;
    axio
      .get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState(student))
  }

  render() {
    const student = this.state.student;
    console.log("SINGLE STUDENT", student)
    return (
      <div>
        <h1>{student.name}</h1>
        <h1>{student.campus}</h1>
      </div>

    )

  }

  // const studentId = props.match.params.studentId;
  // console.log("PRORORORO", studentId)

}


