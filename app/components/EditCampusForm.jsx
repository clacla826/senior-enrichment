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
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(evt) {
    console.log("EVTTTTT", evt.target.name, evt.target.value)
    this.setState({[evt.target.name] : evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("THISSSSS STATE", this.state)

    const campusToPost = {
      name: this.state.campusName,
      imageUrl: this.state.imageUrl,
      description: this.state.description }
    //you want to post on database
    axios.put(`/api/campuses/${this.state.campus.id}`,  campusToPost )
      .then(res => console.log('resDATA', res.data))

    console.log("UPDATEDDDD????", this.state)

    this.setState({
      campusName: '',
      imageUrl: '',
      description: ''
    })

  }

  handleDelete(evt) {
    evt.preventDefault();
    axios
      .delete(`/api/campuses/${this.state.campus.id}`)
      .then(res => console.log('resDATA Deleted', res.data))

      console.log("DELETED CAMPUS", this.state)

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
          <button type="button" value="Delete This Campus" onClick={this.handleDelete}>Delete This Campus</button>
          <br />
          <br />


        </div>
      </div>
    );
  }
}
