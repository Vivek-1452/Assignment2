import React from "react";
import "./newsletter.css";
import "./footer1.css";
import "./footer2.css";
import "./copyright.css";
import rightLongArr from "./Logos/rightLongArr.svg";
import fb from "./Logos/fb.svg";
import linkedin from "./Logos/linkedin.svg";
import insta from "./Logos/insta.svg";

function Newsletter() {
  return (
    <div>
      <div className="curveContainer2">
        <div className="curveSub2"></div>
        <div className="newsContainer">
          <div className="newsimgCon">
            <img
              className="newsImg"
              src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport-subscribe.png&w=256&q=75"
              alt="Newsletter"
            />
          </div>
          <div>
            <h3 className="subText">Subscribe to our newsletter now!</h3>
            <h6 className="subText2">
              Don’t miss out on the latest happenings at Cogoport.
            </h6>
            <div className="newsformCon">
              <form className="newsForm">
                <div>
                  <input
                    className="newsInput"
                    type="email"
                    placeholder="Enter your email here"
                  />
                </div>
                <div>
                  <button className="newsSubmit" type="submit">
                    Subscribe{" "}
                    <img className="rightLongArr" src={rightLongArr} alt="--" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FOoter1 starts */}
        <div className="foot1Container">
          <div className="foot1Col">
            <h3 className="foot1Title">Products</h3>
            <div className="foot1Bottom">
              <div className="foot1Text">
                <h6>Global Trade Platform</h6>
              </div>
              <div className="foot1Text">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text">
                <h5>DOmestic logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
              </div>
              <div className="foot1Text">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
            </div>
          </div>
          <div className="foot1Col">
            <h3 className="foot1Title" style={{ visibility: "hidden" }}>
              Products
            </h3>
            <div className="foot1Bottom">
              <div className="foot1Text">
                <h5 style={{ marginTop: "8px" }}>Supply Chain Solutions</h5>
                <h6>CogoAssured</h6>
                <h6>Fulfilment logistics</h6>
                <h6>Door to Door Shipments</h6>
                <h6>Cargo Insurance</h6>
              </div>
              <div className="foot1Text">
                <h5>Financial Services</h5>
                <h6>Pay Later</h6>
                <h6>Export Factoring</h6>
                <h6>CogoFx</h6>
              </div>
            </div>
          </div>
          <div className="foot1Col">
            <h3 className="foot1Title">Partners</h3>
            <div className="foot1Bottom">
              <div className="foot1Text">
                <h6>Global Trade Platform</h6>
              </div>
              <div className="foot1Text">
                <h5>Our Logistics Providers</h5>
                <h6>Freight Forwarders</h6>
                <h6>Transporters</h6>
                <h6>Custom Agents</h6>
              </div>
              <div className="foot1Text">
                <h5>Partnership Program</h5>
                <h6>Channel Partners</h6>
                <h6>Overseas Agents</h6>
              </div>
            </div>
          </div>
          <div className="foot1Col">
            <h3 className="foot1Title">Tools</h3>
            <div className="foot1Bottom">
              <div className="foot1Text">
                <h6>Rate Discovery</h6>
                <h6>Freight Rate Trends</h6>
                <h6>Tracking</h6>
                <h6>HS Code Finder</h6>
                <h6>Personal Trade Assistant</h6>
              </div>
            </div>
          </div>
          <div className="foot1Col">
            <h3 className="foot1Title">Company</h3>
            <div className="foot1Bottom">
              <div className="foot1Text">
                <h6>About us</h6>
                <h6>Careers</h6>
                <h6>Newsroom</h6>
                <h6>Leadership</h6>
                <h6>Login</h6>
                <h6>Sign Up</h6>
              </div>
            </div>
          </div>
          <div className="foot1Col">
            <h3 className="foot1Title">Knowledge Center</h3>
            <div className="foot1Bottom">
              <div className="foot1Text">
                <h6>Blogs</h6>
                <h6>News & Updates</h6>
                <h6>Events</h6>
                <h6>Reports</h6>
                <h6>Notifications</h6>
              </div>
              <div className="foot1Text">
                <h5>Resources</h5>
                <h6>Port info</h6>
                <h6>Shipping Terms</h6>
                <h6>Help Center</h6>
                <h6>Incoterms</h6>
              </div>
            </div>
          </div>
        </div>
        {/* Footer1 ends */}

        {/* Footer1 starts */}
        <div className="foot2Container">
          <div className="foot2colContainer">
            <div className="foot2Col">
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
            </div>
            <div className="foot2Col">
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
            </div>
            <div className="foot2Col">
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
              <a href="null">Hyderabad (IN) to Norflok, Virginia</a>
            </div>
          </div>
        </div>

        {/* Footer2 ends */}

        {/* Copyright starts */}

        <div className="copyContainer">
          <div className="copyCol1">
            <span className="copycolText">
              © 2023 Cogo Universe PTE. All rights reserved.
            </span>
            <ul className="copycolText">
              <li role="presentation" className="copyLi">
                <a href="null">Terms and Conditions |</a>
              </li>
              <li role="presentation" className="copyLi">
                <a href="null">Cookie policy |</a>
              </li>
              <li role="presentation" className="copyLi">
                <a href="null">Privacy and Data Protection Policy</a>
              </li>
            </ul>
          </div>

          <div className="copyCol2">
            <div style={{ marginBottom: "10px", marginRight: "5px" }}>
              <img
                src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fglobe.png&w=32&q=75"
                alt="Lang"
                width="20"
                height="20"
              />
            </div>
            <div className="copyLang">English (IN)</div>
            <div className="copyRight" style={{ marginBottom: "10px" }}>
              <a className="copyIcons" href="null">
                <img src={linkedin} alt="" />
              </a>
              <a className="copyIcons" href="null">
                <img src={fb} alt="" />
              </a>
              <a className="copyIcons" href="null">
                <img src={insta} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright ends */}
      </div>
    </div>
  );
}

export default Newsletter;
