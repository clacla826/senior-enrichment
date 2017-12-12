import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateStudent from "./CreateStudent"

const divStyle={
  padding: "20px",
  margin: "0 auto",
  float: "left",
  align: "center",
  "font-family" : "Helvetica, sans-serif"
}


export default class AllStudent extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.addStudentToList =this.addStudentToList.bind(this);
    this.fetchList =this.fetchList.bind(this);
  }

  //Adding Created Student to List
  addStudentToList(studentToPost) {
    axios.post(`api/students`, studentToPost)
      .then(res => res.data)
      .then(createdStudent => {
        const newStudentList = [...this.state.students, createdStudent]
        this.setState({ students: newStudentList});
      })

  }

  fetchList() {
    axios.get("/api/students")
    .then(res => res.data)
    .then(students => this.setState({ students }));
  }
  
  componentDidMount() {
    this.fetchList();
  }

  componentWillReceiveProps (nextProps) {
    console.log("nextProps", nextProps)
  }

  handleDelete(evt) {
    console.log(evt.target.name)
    evt.preventDefault();
    axios
      .delete(`/api/students/${evt.target.name}`)
      .then(res => console.log(res.data))
    this.fetchList();

  }

  render() {
    const students = this.state.students;

    return (
      <div style={divStyle}>
      <h1>LIST OF STUDENTS</h1>
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
        </table><br /><br />

        <CreateStudent addStudentToList={this.addStudentToList}/>
      </div>
    );
  }
}
