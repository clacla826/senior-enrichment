import React from "react";
import { Link } from "react-router-dom";

const CampusStudents = props => {
  const students = props.students;

  return (
    <div>
      <button type="button">Add Student</button>
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
                <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                <td>
                <Link to={`/campuses/${student.campusId}`}>{student.campusId}</Link>
                </td>
                <td>{student.email}</td>
                <td>{student.gpa}</td>
                <td>
                  <button type="button">Delete</button>
                </td>

              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampusStudents;
