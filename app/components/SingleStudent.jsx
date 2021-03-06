import React, { Component } from "react";
import axios from "axios";

export default class SingleStudent extends Component {
  constructor() {
    super();
    this.state = {
      student: {},
      firstName: "",
      lastName: "",
      gpa: 0,
      email: "",
      campusId: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const studentId = this.props.match.params.studentId;
    console.log(studentId);
    axios
      .get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({ student }));
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const studentToPost = {
      fistName: this.state.firstName,
      lastName: this.state.lastName,
      gpa: this.state.gpa,
      email: this.state.email,
      campusId: this.state.campusId
    };

    axios
      .put(`/api/students/${this.state.student.id}`, studentToPost)
      .then(res => console.log("Student Updated: ", res.data));

    this.setState({
      firstName: "",
      lastName: "",
      gpa: 0,
      email: "",
      campusId: 0
    });
  }

  handleDelete(evt) {
    evt.preventDefault();
    axios
      .delete(`/api/students/${this.state.student.id}`)
      .then(res => console.log('resDATA Deleted', res.data))

      console.log("DELETED Student", this.state)

      this.setState({
        firstName: "",
        lastName: "",
        gpa: 0,
        email: "",
        campusId: 0
      })
  }

  render() {
    const student = this.state.student;
    console.log("SINGLE STUDENT", student);
    return (
      <div>
        <h1>EDIT STUDENT </h1>
        <div className="new-form">
          <form onSubmit={this.handleSubmit}>
            <lable htmlFor="firstName">
              Current Student First Name: {student.firstName} <br /> New Student
              First Name:{" "}
            </lable>
            <span>
              <input
                type="text"
                onChange={this.handleChange}
                name="firstName"
                value={this.state.firstName}
              />
            </span>

            <br />
            <br />

            <lable htmlFor="studentName">
              Current Student Last Name: {student.lastName} <br /> New Student
              Last Name:{" "}
            </lable>
            <span>
              <input
                type="text"
                onChange={this.handleChange}
                name="lastName"
                value={this.state.lastName}
              />
            </span>

            <br />
            <br />

            <lable htmlFor="gpa">
              Current GPA: {student.gpa} <br /> New GPA:{" "}
            </lable>
            <span>
              <input
                type="text"
                onChange={this.handleChange}
                name="gpa"
                value={this.state.gpa}
              />
            </span>

            <br />
            <br />

            <lable htmlFor="email">
              Current Email: {student.email} <br /> New Email:{" "}
            </lable>
            <span>
              <input
                type="email"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
              />
            </span>

            <br />
            <br />

            <lable htmlFor="campusId">
              Current Campus ID: {student.campusId} <br /> New Campus ID:{" "}
            </lable>
            <span>
              <input
                type="text"
                onChange={this.handleChange}
                name="campusId"
                value={this.state.campusId}
              />
            </span>
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <br />

          <button
            type="button"
            value="Delete This Campus"
            onClick={this.handleDelete}
          >
            Delete This Student
          </button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
