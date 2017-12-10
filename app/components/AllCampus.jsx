import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const divStyle={
  background: "#eee",
  padding: "20px",
  margin: "0 auto",
  float: "left",
  align: "center",
  "font-family" : "Helvetica, sans-serif"
}

const divStyle2={
  background: "#eee",
  height: "100%",
  width:"100%",
  overflow: "hidden",
  align: "center"
}

const divStyle3={
  background: "#eee",
  padding: "20px",
  margin: "0 auto",
  height: "100%",
  width:"100%",
  float: "center",
  align: "center",
  "font-family" : "Helvetica, sans-serif"
}

class AllCampus extends Component {
  constructor() {
    super();
    this.state = {
      campuses: []
    };
  }

  fetchCampuses() {
    axios
      .get("/api/campuses")
      .then(res => res.data)
      .then(campuses => {
        console.log("fetchCampuses AllCampus axios request", campuses);
        this.setState({ campuses });
      });
  }

  componentDidMount() {
    console.log("didMount", this.props);
    this.fetchCampuses();
  }

  render() {
    const campuses = this.state.campuses;
    console.log("ALLCAMPUS THIS STATE", this.state);

    return (
      <div style={divStyle2}>
      <div style={divStyle3}>
        <div >
          <Link to="/campusform">CREATE A CAMPUS</Link>
        </div>
        <div style={divStyle3} >
          <h1>OUR CAMPUSES</h1>
          <div>
            {campuses.map(campus => (
              <div style={divStyle} className="campus" key={campus.id}>
                <h4>{campus.name}</h4>
                <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                  <img src={campus.imageUrl} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default AllCampus;
