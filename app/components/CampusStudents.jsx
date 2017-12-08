import React from "react";

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
                <td>{student.name}</td>
                <td>{student.campusId}</td>
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
