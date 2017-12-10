import React, { Component } from "react";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      gpa: 0,
      email: "",
      campusId: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name] : evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const studentToPost = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gpa: this.state.gpa,
      email: this.state.email,
      campusId: this.state.campusId
    }

    this.props.addStudentToList(studentToPost);

    this.setState({
      firstName: "",
      lastName: "",
      gpa: 0,
      email: "",
      campusId: 0
    })
  }

  render() {

    return (
      <div>
        <h1>ADD NEW STUDENT </h1>
        <div className="new-form">
          <form onSubmit={this.handleSubmit}>
            <lable htmlFor="firstName">First Name: </lable>
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

            <lable htmlFor="studentName">Last Name: </lable>
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

            <lable htmlFor="gpa">GPA: </lable>
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

            <lable htmlFor="email">New Email: </lable>
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

            <lable htmlFor="campusId">Campus ID: </lable>
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
        </div>
      </div>
    );
  }
}
