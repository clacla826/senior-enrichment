import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class AllStudent extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/students")
      .then(res => res.data)
      .then(students => this.setState({ students }));
  }

  handleDelete(evt) {
    console.log(evt.target.name)
    evt.preventDefault();
    axios
      .delete(`/api/students/${evt.target.name}`)
      .then(res => console.log(res.data))

  }

  render() {
    const students = this.state.students;
    //console.log('ALL Students', students);

    return (
      <div>
      <Link to="/studentform">ADD NEW STUDENT</Link>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Campus</th>
              <th>email</th>
              <th>gpa</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>
                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                  </td>
                  <td>
                    <Link to={`/campuses/${student.campusId}`}>{student.campusId}</Link>
                  </td>
                  <td>{student.email}</td>
                  <td>{student.gpa}</td>
                  <td>
                    <button name={student.id} type="button" onClick={this.handleDelete}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
