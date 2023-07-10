import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./mainPoster.css";
export default function Homepage() {
  return (
    <div
      className="mainPoster"
      style={{
        textAlign: "start",
        backgroundColor: "#fddc01",
        backgroundImage: `url(https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/home-banner-background-1.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "100%",
        paddingTop: "57px",
        marginTop: "-30px",
        width: "100%",
      }}
    >
      <div className="mainPoster1">
        <div className="mainPosterleft">
          <h1 style={{ fontWeight: "bold" }}>Grow Faster, Go Global.</h1>
          <p>
            Strengthen your Supply Chain, and Scale your Business <br></br>with
            Reliable Shipping and Cashflows.
          </p>
          <div className="inpDiv">
            <InputGroup className="searchbox">
              <InputGroup.Text className="searchbox1">
                <WhatsAppIcon sx={{ color: "#36bb22" }} />
                <select name="Number" id="code" className="selecttag">
                  <option value="+91">+91</option>
                  <option value="+787">+787</option>
                  <option value="+34">+34</option>
                </select>
              </InputGroup.Text>
              <FormControl
                placeholder="Whatsapp Number"
                className="searchbox2"
              />
              <InputGroup.Text className="searchbox1">
                <button className="searchboxbutton">Get started</button>
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
        <div className="mainPosterright">
          <video
            className="mainPoster2"
            muted
            width="590"
            height="400"
            autoPlay="loop"
            poster="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/final_static_chat_girl_img.png"
          >
            <source
              src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoverse_desktop_3_webm.webm"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
