import React from "react";
import "./products.css";

export default function getStarted() {
  return (
    <div className="products gsContainer">
      <div className="purpose">
        <div className="purposeSub">
          <div className="purposeItems purposeItem1 text-start gsItem1">
            {/* <h2 className="fw-bold">One Stop Solution for Your Supply Chain</h2>
            <span>
              Connected Shipping, Finance, and Trade-tech, to Power Global Trade
              and Supply Chains.
            </span> */}
            <h2 className="getstartedhead">Get Started Today</h2>
            <p className="getstartedpara">
              Plan, Book and Finance your shipment in one place.
            </p>
            <p>
              Experience how Cogoport’s Global Trade Platform can Turbocharge
              your Business.
            </p>
            <a href="null" className="getstartedbtn">
              Get Started
            </a>
          </div>
          <div className="purposeItems purposeItem2 purposeItemgs">
            <img
              alt="Product"
              src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&w=640&q=75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
