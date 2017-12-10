import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const AllCampus = (props) => {
//   const campuses = props.campuses;
//   console.log("ALLCAMPUS PROPS", props);

//   return (
//     <div>
//       <div>
//         <Link to="/campusform">CREATE A CAMPUS</Link>
//       </div>
//       <div className="row">
//         <h2>OUR CAMPUSES</h2>
//         {campuses && campuses.map(campus => (
//           <div className="col-xs-4" key={campus.id}>
//             <Link className="thumbnail" to={`/campuses/${campus.id}`}>
//               <img src={campus.imageUrl} />
//             </Link>

//             <div className="caption">
//               <h5>
//                 <span>{campus.name}</span>
//               </h5>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllCampus;

//bring all campuses but need to be dummy
// class AllCampus extends Component {
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
//       .then(campuses => this.setState({ campuses }));
//   }

//   render() {
//     const campuses = this.state.campuses;
//     console.log("ALLCAMPUS THIS STATE", this.state)

//     return (
//       <div>
//       <div>
//       <Link to='/campusform'>CREATE A CAMPUS</Link>
//       </div>
//         <div className="row">
//           <h2>OUR CAMPUSES</h2>
//           {campuses.map(campus => (
//             <div className="col-xs-4" key={campus.id}>
//               <Link  className="thumbnail" to={`/campuses/${campus.id}`}>
//                 <img src={campus.imageUrl} />
//               </Link>

//               <div className="caption">
//                 <h5>
//                   <span>{campus.name}</span>
//                 </h5>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default AllCampus;

// componentWillReceiveProps(nextProps) {
//   console.log("newProps", nextProps); //oldProps
//   //const currentProps = this.props;
// //     const nextPlaylistId = nextProps.match.params.playlistId; -Renders if not same const currentPlaylistId = currentProps.match.params.playlistId;

// //     if (nextPlaylistId !== currentPlaylistId) {
// //  this.fetchPlaylistById(nextPlaylistId);
// }

const divStyle={
  background: "#eee",
  padding: "20px",
  margin: "0 auto",
  float: "left",
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
      <div style={divStyle}>
        <div >
          <Link to="/campusform">CREATE A CAMPUS</Link>
        </div>
        <div style={divStyle} >
          <h2>OUR CAMPUSES</h2>
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
    );
  }
}

export default AllCampus;
