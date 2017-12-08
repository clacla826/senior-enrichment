import React from "react";
import { HashRouter as Router, Route} from 'react-router-dom';
//import axios from "axios";

import Header from "./Header";
import AllCampus from "./AllCampus";
import AllStudent from "./AllStudent";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";
import CampusForm from "./CampusForm";



// class Root extends Component {

//   constructor() {
//     super();
//     this.state = {
//       campuses: []
//     };

//   }

//   componentDidMount() {
//     axios
//       .get("/api/campuses")
//       .then(res => res.data)
//       .then(campuses => console.log('hahahah', campuses));
//   }


//   render () {
//     console.log('THIIIS.campuses', this.state)

const Root = () => {
return (
      <Router>
      <div id="root" className="container-fluid">
        <div className="col-xs-12">
          <Header />
        </div>
        <div className="col-xs-12">
          <Route exact path='/' component={AllCampus} />
          <Route exact path='/campuses' component={AllCampus} />
          <Route exact path='/campuses/:campusId' component={SingleCampus} />
          <Route exact path='/students' component={AllStudent} />
          <Route path='/students/:studentId' component={SingleStudent} />
          <Route path='/campusform/:campusId' component={CampusForm} />
        </div>
      </div>
      </Router>
    );
}


export default Root;
