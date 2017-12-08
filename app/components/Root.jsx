import React, { Component } from "react";
import Header from "./Header";
import AllCampus from "./AllCampus";
import AllStudent from "./AllStudent";
import SingleCampus from "./SingleCampus";
/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */

const Root = () => {
  return (
    <div id="root" className="container-fluid">
      <div className="col-xs-12">
        <Header />
      </div>
      <div className="col-xs-12">
        <AllCampus />
        <AllStudent />
        <AllStudent />
        <SingleCampus />
      </div>
    </div>
  );
};

export default Root;
