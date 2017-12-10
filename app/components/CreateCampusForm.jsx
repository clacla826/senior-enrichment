import React, { Component } from "react";
import axios from "axios";
import Bluebird from "bluebird";
import CampusStudents from "./CampusStudents";

const divStyle={
  padding: "20px",
  margin: "0 auto",
  float: "left",
  align: "center",
  "font-family" : "Helvetica, sans-serif"
}

export default class CreateCampusForm extends Component {
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
    console.log("EVTTTTT IN CREATE CAMPUS", evt.target.name, evt.target.value)
    this.setState({[evt.target.name] : evt.target.value });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log("THISSSSS STATE CREATE CAMPUS", this.state)

    const campusToPost = {
      name: this.state.campusName,
      imageUrl: this.state.imageUrl,
      description: this.state.description
    }

    console.log("campusToPost", campusToPost)

    axios.post('/api/campuses', campusToPost)
      .then(res => console.log('resDATA', res.data))

    console.log("POSTTEDDD????", this.state)

    this.setState({
      campusName: '',
      imageUrl: '',
      description: ''
    })

  }

  render() {
    const campus = this.state.campus;
    console.log(this.props);
    //if there is no params or campusId
    return (
      <div style={divStyle}>
        <h1>CREATE CAMPUS</h1>
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
        </div>
      </div>
    );
  }
}
