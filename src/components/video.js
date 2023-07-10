import React from "react";
import "./video.css";
import rightArrow from "./Logos/rightarrow.svg";

function Products() {
  return (
    <div className="videoContainer">
      <div className="videoCon">
        {/* <img
          className="homeVideo"
          src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/play-button-white.png"
          alt="Video"
        /> */}
      </div>
      <div className="videoSubCon">
        <div className="videoSub">
          <div className="videoLeft">
            <h3>Grow faster with Cogoport</h3>
            <p>Know more about Cogoport’s Global Trade Platform</p>
          </div>
          <a href="null">
            <button className="btnKnowMore">
              Know More <img className="rightArr" src={rightArrow} alt="-" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Products;
