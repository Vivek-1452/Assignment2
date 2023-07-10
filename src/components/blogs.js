import React from "react";
import "./blogs.css";
import rightLongArr from "./Logos/rightLongArrBlog.svg";

function Blogs() {
  return (
    <div className="blogs">
      <div className="blogContainer">
        <h2 className="blogTitle fw-bold">Blogs</h2>
        <div className="blogCardContainer">
          <div className="card blogCard">
            <a href="null">
              <img
                className="blogPic"
                src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEnvirotainer_Banner.png&w=828&q=75"
                alt="Pic"
              />
              <div className="blogText">
                <h4 className="blogText1">Trade News</h4>
                <h4 className="blogText2">
                  Cogoport Enables Movement of 11 Envirotainer Containers from
                  India to Italy{" "}
                </h4>
                <p className="blogText3">
                  Cogoport’s collective logistics and technical expertise came
                  in handy as our operations and technical teams went the extra
                  mile and designed bespoke solutions on the go.
                </p>
                <div className="blogEnd">
                  <span className="blogMore">
                    Read more{" "}
                    <img
                      className="rightLongArrBlog"
                      src={rightLongArr}
                      alt="--"
                    />
                  </span>
                  <h4 className="blogDate">05 July 2023</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="card blogCard">
            <a href="null">
              <img
                className="blogPic"
                src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEnvirotainer_Banner.png&w=828&q=75"
                alt="Pic"
              />
              <div className="blogText">
                <h4 className="blogText1">Expert Speak</h4>
                <h4 className="blogText2">Cogoport: A Global Trade Platform</h4>
                <p className="blogText3">
                  Cogoport leverages technology and caters to enterprises of all
                  sizes. Our solutions improve predictability and enhance human
                  capabilities.
                </p>
                <div className="blogEnd">
                  <span className="blogMore">
                    Read more{" "}
                    <img
                      className="rightLongArrBlog"
                      src={rightLongArr}
                      alt="--"
                    />
                  </span>
                  <h4 className="blogDate">03 July 2023</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="card blogCard">
            <a href="null">
              <img
                className="blogPic"
                src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEnvirotainer_Banner.png&w=828&q=75"
                alt="Pic"
              />
              <div className="blogText">
                <h4 className="blogText1">Industry Basics</h4>
                <h4 className="blogText2">
                  Understanding Lean Supply Chain Management: Definition and
                  Considerations
                </h4>
                <p className="blogText3">
                  Lean Supply Chain Management represents the extension of Lean
                  Thinking across the entire supply chain. So, what are the
                  benefits and key components? Read on!
                </p>
                <div className="blogEnd">
                  <span className="blogMore">
                    Read more{" "}
                    <img
                      className="rightLongArrBlog"
                      src={rightLongArr}
                      alt="--"
                    />
                  </span>
                  <h4 className="blogDate">24 June 2023</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="viewBlogs">
        <a href="null">
          <button className="viewblogButton">View all</button>
        </a>
      </div>
    </div>
  );
}

export default Blogs;
