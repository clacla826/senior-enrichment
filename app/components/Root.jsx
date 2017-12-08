import React, { Component } from "react";
import { HashRouter as Router, Route} from 'react-router-dom';
import axios from "axios";

import Header from "./Header";
import AllCampus from "./AllCampus";
import AllStudent from "./AllStudent";
import SingleCampus from "./SingleCampus";



class Root extends Component {

  constructor() {
    super();
    this.state = {
      campuses: []
    };

  }

  componentDidMount() {
    axios
      .get("/api/campuses")
      .then(res => res.data)
      .then(campuses => console.log('hahahah', campuses));
  }


  render () {
    console.log('THIIIS.campuses', this.state)
    return (
      <Router>
      <div id="root" className="container-fluid">
        <div className="col-xs-12">
          <Header />
        </div>
        <div className="col-xs-12">
          <Route exact path='/' component={AllCampus} campuses={this.state.campuses} />
          <Route path='/campuses' component={AllCampus} />
          <Route exact path='/students' component={AllStudent} />
          <Route path='/campuses/:campusId' component={SingleCampus} />
        </div>
      </div>
      </Router>
    );

  }
}

export default Root;
