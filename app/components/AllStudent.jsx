import React, { Component } from 'react';
import axios from 'axios';

export default class AllStudent extends Component {
  constructor() {
    super();
    this.state = {
      students : []
    }
  }

  componentDidMount () {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => this.setState({ students }))
  }


  render() {
    const students = this.state.students;
    console.log('ALL Students', students);

    return (
      <div>
      <button type="button">Add Student</button>
      <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Campus</th>
          <th>email</th>
          <th>gpa</th>
        </tr>
      </thead>
      <tbody>
        {
          students && students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{ student.name }</td>
              <td>{ student.campusId }</td>
              <td>{student.email}</td>
              <td>{ student.gpa }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>

    )
  }

}


