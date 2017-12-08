import React, { Component } from "react";
import axios from "axios";
import Bluebird from "bluebird";
import CampusStudents from "./CampusStudents";

export default class EditCampusForm extends Component {
  constructor() {
    super();
    this.state = {
      campus: {},
      campusName: '',
      imageUrl: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log("EVTTTTT", evt.target.name, evt.target.value)
    this.setState({[evt.target.name] : evt.target.value });



  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("THISSSSS STATE", this.state)
    const campus= this.state.campusName;
    const imageUrl = this.state.imageUrl;
    const description = this.state.description;
    const campusToSend = {campus, imageUrl, description}
    { campus: }
    //you want to post on database
    axios.post('/api/campuses', { })

    this.setState({
      campusName: '',
      imageUrl: '',
      description: ''
    })

  }

  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    const mainPath = `/api/campuses/${campusId}`;
    const paths = [mainPath, `${mainPath}/students`];

    console.log("paths", paths);
    Bluebird.map(paths, path => axios.get(path))
      .map(res => {
        console.log("RES DATA", res.data);
        return res.data;
      })
      .spread((campus, students) => {
        console.log("Campus after", campus);
        campus.students = students;
        this.setState({ campus });
      });
  }

  render() {
    const campus = this.state.campus;
    console.log(this.props);
    //if there is no params or campusId
    return (
      <div>
        <h1>EDIT CAMPUS</h1>
        <div className="new-form">
          <form onSubmit={this.handleSubmit}>
            <lable htmlFor="campusName" >
             Campus Name: </lable>
              <input type="text" onChange={this.handleChange} name="campusName" value={this.state.campusName}/>

            <br />
            <br />


            <lable htmlFor="campusName" >
            imageUrl: </lable>
             <input type="text" onChange={this.handleChange} name="imageUrl" value={this.state.imageUrl}/>

           <br />
           <br />


           <lable htmlFor="campusName" >
           description: </lable>
            <input type="text" onChange={this.handleChange} name="description" value={this.state.description}/>

          <br />
          <br />

          <input type="submit" value="Submit" />
          </form>
          <br />
          <br />

          <CampusStudents students={campus.students} />
        </div>
      </div>
    );
  }
}
