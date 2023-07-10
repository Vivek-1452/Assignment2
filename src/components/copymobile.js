import React from "react";
import "./copymobile.css";
import fb from "./Logos/fb.svg";
import linkedin from "./Logos/linkedin.svg";
import insta from "./Logos/insta.svg";

function Count() {
  return (
    <div className="copyMobile">
      <div className="copyMobContainer">
        <div className="copyMob1">
          <div className="d-flex flex-row">
            <div style={{ padding: "8px" }}>
              <a className="copyIconsMob" href="null">
                <img src={linkedin} alt="" />
              </a>
              <a className="copyIconsMob" href="null">
                <img src={fb} alt="" />
              </a>
              <a className="copyIconsMob" href="null">
                <img src={insta} alt="" />
              </a>
            </div>
            <div style={{ padding: "8px 5px" }}>
              <img
                src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fglobe.png&w=32&q=75"
                alt="Lang"
                width="20"
                height="20"
                style={{ marginRight: "5px", marginBottom: "3px" }}
              />
              <span className="copyLang">English (IN)</span>
            </div>
          </div>
        </div>
        <div
          style={{ fontSize: "12px", textAlign: "start", paddingTop: "10px" }}
        >
          <span>© 2023 Cogo Universe PTE. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Count;
