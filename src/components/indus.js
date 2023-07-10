import React from "react";
import "./indus.css";

function Indus() {
  return (
    <div className="indusContainer">
      <div className="indus">
        <h3 className="indusTitle">Industries Served</h3>
        <div className="indusCards">
          <div className="indusDiv">
            <img
              className="indusPic"
              src="https://www.cogoport.com/images/chemical.svg"
              alt="Chemicals"
            />
            <h6>Chemicals</h6>
          </div>
          <div className="indusDiv">
            <img
              className="indusPic"
              src="https://www.cogoport.com/images/paracetamol.svg"
              alt="Pharma"
            />
            <h6>Pharmaceuticals</h6>
          </div>
          <div className="indusDiv">
            <img
              className="indusPic"
              src="https://www.cogoport.com/images/electronics.svg"
              alt="Electronics"
            />
            <h6>Electronics</h6>
          </div>
          <div className="indusDiv">
            <img
              className="indusPic"
              src="https://www.cogoport.com/images/whitegoods.svg"
              alt="White Goods"
            />
            <h6>White Goods</h6>
          </div>
          <div className="indusDiv">
            <img
              className="indusPic"
              src="https://www.cogoport.com/images/textiles.svg"
              alt="Textiles"
            />
            <h6>Textiles</h6>
          </div>
          <div className="indusDiv">
            <img
              className="indusPic"
              src="https://www.cogoport.com/images/manufactoring.svg"
              alt="Manufacturing"
            />
            <h6>Manufacturing</h6>
          </div>
          <div className="indusDiv">
            <img
              className="indusPic"
              src="https://www.cogoport.com/images/agriculture.svg"
              alt="Agriculture"
            />
            <h6>Agriculture</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indus;
