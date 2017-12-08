import React from "react";
import { Link } from "react-router-dom";

//bring all campuses but need to be dummy
const AllCampus = (props) => {
  const campuses = props.campuses;
  console.log("HII PROPS", props);
  return (
    <div>
      <div className="row">
        <h2>OUR CAMPUSES</h2>
        {campuses.map(campus => (
          <div className="col-xs-4" key={campus.id}>
            <Link className="thumbnail" to={`/api/campuses/${campus.id}`}>
              <img src={campus.imageUrl} />
            </Link>

            <div className="caption">
              <h5>
                <span>{campus.name}</span>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCampus;
