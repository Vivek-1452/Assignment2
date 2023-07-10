import React from "react";
import { useState } from "react";
import "./footermob.css";
import "./footer1.css";
import rightarrow from "./Logos/rightarrow.svg";
import downCopyArrow from "./Logos/downCopyArrow.svg";

const Footermob = (props) => {
  // const click = (id1, id2) => {
  //   var display = document.getElementById(id2).style.display;

  //   if (id1 == "footButton1" && display == "none") {
  //     document.getElementById(id2).style.display = "block";
  //   } else if (id1 == "footButton1" && display == "none") {
  //     document.getElementById(id2).style.display = "none";
  //   }
  // };

  const [show1, setShow1] = useState(false);
  const [show11, setShow11] = useState(true);
  const [show12, setShow12] = useState(false);

  const [show2, setShow2] = useState(false);
  const [show21, setShow21] = useState(true);
  const [show22, setShow22] = useState(false);

  const [show3, setShow3] = useState(false);
  const [show31, setShow31] = useState(true);
  const [show32, setShow32] = useState(false);

  const [show4, setShow4] = useState(false);
  const [show41, setShow41] = useState(true);
  const [show42, setShow42] = useState(false);

  const [show5, setShow5] = useState(false);
  const [show51, setShow51] = useState(true);
  const [show52, setShow52] = useState(false);

  return (
    <div className="footMob">
      <div className="footDrop">
        <button
          className="footButton"
          onClick={() => {
            setShow1(!show1);
            setShow11(!show11);
            setShow12(!show12);
          }}
        >
          <h4 className="footleftText">Products</h4>
          <div className="footrightText">
            {show11 && <img className="rightAr" src={rightarrow} alt="->" />}
            {show12 && <img className="downAr" src={downCopyArrow} alt="->" />}
          </div>
        </button>
        {show1 && (
          <div className="footHidden footHidden1">
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Global Trade Platform</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Domestic logistics</h5>
                <h6>Surface: FTL, PTL, Rail</h6>
                <h6>Trailer & Rail Container Haulage</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Supply Chain Solutions</h5>
                <h6>CogoAssured</h6>
                <h6>Fulfilment logistics</h6>
                <h6>Door to Door Shipments</h6>
                <h6>Cargo Insurance</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Financial Services</h5>
                <h6>Pay Later</h6>
                <h6>Export Factoring</h6>
                <h6>CogoFx</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Trade Management Solutions</h5>
                <h6>Freight Rates & Schedules</h6>
                <h6>Quick Premium Quotations</h6>
                <h6>Duites & Taxes Calculator</h6>
                <h6>Tracking & Visibility</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>CogoMaps</h5>
                <h6>Shipment Planner</h6>
                <h6>Trade Info</h6>
                <h6>Global Routes</h6>
                <h6>Live Congestion</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button
          className="footButton"
          onClick={() => {
            setShow2(!show2);
            setShow21(!show21);
            setShow22(!show22);
          }}
        >
          <h4 className="footleftText">Partners</h4>
          <div className="footrightText">
            {show21 && <img className="rightAr" src={rightarrow} alt="->" />}
            {show22 && <img className="downAr" src={downCopyArrow} alt="->" />}
          </div>
        </button>
        {show2 && (
          <div className="footHidden footHidden1">
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Global Partner Network</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Our Logistics Providers</h5>
                <h6>Freight Forwarders</h6>
                <h6>Transporters</h6>
                <h6>Custom Agents</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Partnership Program</h5>
                <h6>Channel Partners</h6>
                <h6>Overseas Agents</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button
          className="footButton"
          onClick={() => {
            setShow3(!show3);
            setShow31(!show31);
            setShow32(!show32);
          }}
        >
          <h4 className="footleftText">Tools</h4>
          <div className="footrightText">
            {show31 && <img className="rightAr" src={rightarrow} alt="->" />}
            {show32 && <img className="downAr" src={downCopyArrow} alt="->" />}
          </div>
        </button>
        {show3 && (
          <div className="footHidden footHidden1">
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Rate Discovery</h6>
                <h6>Freight Rate Trends</h6>
                <h6>Tracking</h6>
                <h6>HS Code Finder</h6>
                <h6>Personal Trade Assistant</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button
          className="footButton"
          onClick={() => {
            setShow4(!show4);
            setShow41(!show41);
            setShow42(!show42);
          }}
        >
          <h4 className="footleftText">Company</h4>
          <div className="footrightText">
            {show41 && <img className="rightAr" src={rightarrow} alt="->" />}
            {show42 && <img className="downAr" src={downCopyArrow} alt="->" />}
          </div>
        </button>
        {show4 && (
          <div className="footHidden footHidden1">
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>About us</h6>
                <h6>Careers</h6>
                <h6>Newsroom</h6>
                <h6>Leadership</h6>
                <h6>Login</h6>
                <h6>Sign Up</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button
          className="footButton"
          onClick={() => {
            setShow5(!show5);
            setShow51(!show51);
            setShow52(!show52);
          }}
        >
          <h4 className="footleftText">Knowledge Center</h4>
          <div className="footrightText">
            {show51 && <img className="rightAr" src={rightarrow} alt="->" />}
            {show52 && <img className="downAr" src={downCopyArrow} alt="->" />}
          </div>
        </button>
        {show5 && (
          <div className="footHidden footHidden1">
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Blogs</h6>
                <h6>News & Updates</h6>
                <h6>Events</h6>
                <h6>Reports</h6>
                <h6>Notifications</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Resources</h5>
                <h6>Port info</h6>
                <h6>Shipping Terms</h6>
                <h6>Help Center</h6>
                <h6>Incoterms</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button className="footButton">
          <h4 className="footleftText">Contact Us</h4>
        </button>
      </div>
    </div>
  );
};

export default Footermob;
