import React, { useState } from "react";
import "./navbar.css";
import "./footermob.css";
import logo from "./Logos/logo.svg";
import happyface from "./Logos/happyface.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import navToggleIcon from "./Logos/navToggleIcon.svg";
import rightarrow from "./Logos/rightarrow.svg";
import downCopyArrow from "./Logos/downCopyArrow.svg";
import navToggleCross from "./Logos/navToggleCross.svg";
import whatsappIcon from "./Logos/whatsappIcon.svg";

export default function Navbar() {
  window.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector(".nav").classList.add("navBarScroll");
    } else {
      document.querySelector(".nav").classList.remove("navBarScroll");
    }
  };

  window.onscroll = () => {
    if (window.scrollY > 0) {
      document.getElementById("navbarmain").style.backgroundColor = "#ffffff";
    } else {
      document.getElementById("navbarmain").style.backgroundColor = "#fddc00";
    }
  };

  window.onscroll = () => {
    if (window.scrollY > 300) {
      document.getElementById("whatsappIcon").style.display = "block";
    } else {
      document.getElementById("whatsappIcon").style.display = "none";
    }
  };

  const [bar, setbar] = useState(true);
  const [cross, setcross] = useState(false);

  const [sideBar, setsideBar] = useState(false);

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
    <div className="nav navBarScroll">
      <div id="navbarmain" className="navBarr">
        <button
          className="navbar-toggler navIconToggle"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setsideBar(!sideBar);
            setbar(!bar);
            setcross(!cross);
          }}
        >
          <span className="navbar-toggler-icon">
            {bar && <img src={navToggleIcon} alt="=" />}
            {cross && <img src={navToggleCross} alt="X" />}
          </span>
        </button>
        <div role="button" className="logoimage">
          <img src={logo} alt="cogoport logo" />
        </div>
        <nav className="navbar navbar-expand-md" id="navbarmainsub">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div role="button" className="nav-link">
                  Products
                  <ArrowDropDownIcon
                    sx={{ width: "1em", height: "1em" }}
                  />{" "}
                </div>
              </li>
              <li className="nav-item">
                <div role="button" className="nav-link">
                  Partners
                  <ArrowDropDownIcon
                    sx={{ width: "1em", height: "1em" }}
                  />{" "}
                </div>
              </li>
              <li className="nav-item">
                <div role="button" className="nav-link">
                  Tools
                  <ArrowDropDownIcon
                    sx={{ width: "1em", height: "1em" }}
                  />{" "}
                </div>
              </li>
              <li className="nav-item">
                <div role="button" className="nav-link">
                  Knowledge Center
                  <ArrowDropDownIcon
                    sx={{ width: "1em", height: "1em" }}
                  />{" "}
                </div>
              </li>
              <li className="nav-item">
                <div role="button" className="nav-link">
                  Compnany
                  <ArrowDropDownIcon
                    sx={{ width: "1em", height: "1em" }}
                  />{" "}
                </div>
              </li>
              <li className="nav-item">
                <div role="button" className="nav-link">
                  Contact Us
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="loginbtnsdiv">
          <ul className="loginbuttons">
            <li className="nav-btn">
              <img src={happyface} alt="happyface" />
              login
            </li>
            <li className="signinbtn">
              <button className="signupbtn"> Sign Up</button>
            </li>
          </ul>
        </div>
      </div>

      {/* sidebar */}
      {sideBar && (
        <div className="footMob navMob">
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
                {show11 && (
                  <img className="rightAr" src={rightarrow} alt="->" />
                )}
                {show12 && (
                  <img className="downAr" src={downCopyArrow} alt="->" />
                )}
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
                {show21 && (
                  <img className="rightAr" src={rightarrow} alt="->" />
                )}
                {show22 && (
                  <img className="downAr" src={downCopyArrow} alt="->" />
                )}
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
                {show31 && (
                  <img className="rightAr" src={rightarrow} alt="->" />
                )}
                {show32 && (
                  <img className="downAr" src={downCopyArrow} alt="->" />
                )}
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
                {show41 && (
                  <img className="rightAr" src={rightarrow} alt="->" />
                )}
                {show42 && (
                  <img className="downAr" src={downCopyArrow} alt="->" />
                )}
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
                {show51 && (
                  <img className="rightAr" src={rightarrow} alt="->" />
                )}
                {show52 && (
                  <img className="downAr" src={downCopyArrow} alt="->" />
                )}
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

          <div className="loginbtnsdiv loginbtnsdiv2">
            <ul className="loginbuttons loginbtns2">
              <li className="signinbtn">
                <button className="signupbtn"> Sign Up</button>
              </li>
              <li className="nav-btn">
                <img src={happyface} alt="happyface" />
                login
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* sidebar ends */}

      {/* Whatsapp icon */}
      <div id="whatsappIcon" className="whatsappIcon">
        <img className="wIcon" src={whatsappIcon} alt="" />
        <h6 style={{ fontSize: "14px", fontWeight: "bold", color: "#ffffff" }}>
          WhatsApp Us
        </h6>
      </div>
    </div>
  );
}
