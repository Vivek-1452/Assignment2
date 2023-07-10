import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import "./count.css";

function Count() {
  // const [display, setdisplay] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth < 769) {
  //     setdisplay(true);
  //   }
  // }, [display]);

  return (
    <div className="count">
      {/* <div className="col-md-3 col-6 my-4"> */}
      <div className="countSub d-flex">
        <div className="countItem">
          <h2 className="fw-bold" style={{ color: "#EE3425" }}>
            180+
          </h2>
          <h5 className="fw-bold">Countries Served</h5>
        </div>
        {/* <div className="col-md-3 col-6 my-4"> */}
        <div className="countItem">
          <h2 className="fw-bold" style={{ color: "#EE3425" }}>
            10,000
          </h2>
          <h5 className="fw-bold">Ports Pairs Served</h5>
        </div>
        {/* <div className="col-md-3 col-6 my-4"> */}
        <div className="countItem">
          <h2 className="fw-bold" style={{ color: "#EE3425" }}>
            30,000+
          </h2>
          <h5 className="fw-bold">Tons of Air Cargo Moved</h5>
        </div>
        {/* <div className="col-md-3 col-6 my-4"> */}
        <div className="countItem">
          <h2 className="fw-bold" style={{ color: "#EE3425" }}>
            700,000
          </h2>
          <h5 className="fw-bold">Containers Moved</h5>
        </div>
      </div>
    </div>
  );
}

export default Count;
