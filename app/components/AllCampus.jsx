import React, {Component} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

//bring all campuses but need to be dummy
class AllCampus extends Component  {
  constructor() {
    super();
    this.state= {
      campuses: []
    }
  }

  componentDidMount() {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({ campuses }))
  }



  render () {
    const campuses = this.state.campuses;
    console.log(campuses)
    return (

      <div>
        <div className="row">
        <h2>OUR CAMPUSES</h2>
        {
          campuses.map(campus => (

            <div className="col-xs-4" key={campus.id}>
              {/*<Link className="thumbnail" to={`{/api/campuses/${campus.id}`}>
                <img src={campus.imageUrl}/>
          </Link>*/}

              <div className="caption">
                <h5>
                  <span>{campus.name}</span>
                </h5>
              </div>

            </div>

          ))
        }
        </div>
      </div>
    );
  }

  }


export default AllCampus;
