import React, { useState } from "react";
import "./howItWorks.css";
import howIcon1 from "./Logos/howIcon1.svg";
import howIcon2 from "./Logos/howIcon2.svg";
import howIcon3 from "./Logos/howIcon3.svg";
import howIcon4 from "./Logos/howIcon4.svg";

import Card from "react-bootstrap/Card";

export default function HowItWorks() {
  const [command, setcommand] = useState(false);
  const leftcards = [
    {
      name: "Stage 1:",
      heading: "Discover",
      image: howIcon1,
      points: [
        "Spot and Contract Rates for Logistics",
        "Service details, Trade Compliance/ Regulatory Requirements",
        "Knowledge and Insights on Trade, Logistics, Finance, Supply Chains",
      ],
    },
    {
      name: "Stage 2:",
      heading: "Plan & Book",
      image: howIcon2,
      points: [
        "Route, Service Schedules, Inventory, and Cashflow planning",
        "Book with upfront visibility of service terms and inclusions",
      ],
    },
  ];

  const leftcardsMob = [
    {
      name: "Channel Partner Program",
      heading: "Sell with Cogoport",
      image: howIcon1,
      points: [
        "Upfront rates and SLAs, close more deals with your customers for end to end shipments",
        "Knowledge and Insights on Trade, Logistics, Finance, Supply Chains",
      ],
    },
    {
      name: "Logistics Partner",
      heading: "Grow Profits",
      image: howIcon2,
      points: [
        "Invoicing and payment terms that help you sell more with the same working capital",
        "Book with upfront visibility of service terms and inclusions",
      ],
    },
  ];

  const rightcards = [
    {
      name: "Stage 3:",
      heading: "Execute",
      image: howIcon3,
      points: [
        "Ocean and Air Cargo Tracking",
        "Documentation and Filings, Handled",
        "Multi-modal: Smooth coordination and handovers between various service providers and stakeholders",
      ],
    },
    {
      name: "Stage 4:",
      heading: "Finance",
      image: howIcon4,
      points: [
        "Deferred payment on Logistics with PayLater",
        "Trade Finance for your Cargo with Export Factoring",
      ],
    },
  ];

  const rightcardsMob = [
    {
      name: "Logistics Service Providers",
      heading: "Sell to Cogoport",
      image: howIcon3,
      points: [
        "Accurate forecast of demand so you can plan your operations and cashflows",
        "Steady flow of bookings from Cogoport, minimize P&L risks",
        "Get paid on time, minimize collections risks",
      ],
    },
    {
      name: "Overseas Partners",
      heading: "Scale Globally",
      image: howIcon4,
      points: [
        "Make Cogoport your local agent outside your home country, do shipments to and from 149+ countries globally",
        "Become Cogoport’s local agent in your country, boost revenue from nominations and handling",
      ],
    },
  ];

  const [left, setleft] = useState(leftcards);
  const [right, setright] = useState(rightcards);
  const handleclicked1 = () => {
    setcommand(!command);
    setleft(leftcardsMob);
    setright(rightcardsMob);
  };

  const handleclicked = () => {
    setcommand(!command);
    setleft(leftcards);
    setright(rightcards);
  };

  return (
    <div className="howitworks">
      <div className="howitheading">
        <h3 style={{ fontWeight: "bold" }}>How it Works</h3>
      </div>
      <div className="howitbtns">
        <button
          className={command ? "howbtns" : "howbtns active-btn"}
          onClick={handleclicked}
        >
          For Cargo Owners
        </button>
        <button
          className={command ? "howbtns active-btn" : "howbtns"}
          onClick={handleclicked1}
        >
          For Logistics Partners
        </button>
      </div>
      <div className="flexsection1">
        <div className="leftcards">
          {left.map((card) => (
            <Card className="maincard">
              <Card.Body style={{ padding: "0px" }}>
                <p className="cardname">{card.name}</p>
                <div className="cardsection">
                  <img src={card.image} alt={card.name} />
                  <div className="cardhead">{card.heading}</div>
                </div>
                <div>
                  {card.points.map((point) => (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>•</div>
                      <p className="carddes">{point}</p>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div>
          {/* <img
            src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow.png&w=256&q=75"
            alt="---"
            className="rightTopPic"
          /> */}
          <img
            src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&w=1200&q=75"
            width="560"
            height="320"
            style={{ color: "transparent" }}
            alt="Mac"
          />
        </div>
        <div className="rightcards">
          {right.map((card) => (
            <Card className="maincard">
              <Card.Body style={{ padding: "0px" }}>
                <p className="cardname">{card.name}</p>
                <div className="cardsection">
                  <img src={card.image} alt={card.name} />
                  <div className="cardhead">{card.heading}</div>
                </div>
                <div>
                  {card.points.map((point) => (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>•</div>
                      <p className="carddes">{point}</p>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div className="mobilesection">
        <img
          src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&w=1200&q=75"
          width="280"
          height="auto"
          alt="Mac"
          style={{ color: "transparent", marginBottom: "20px" }}
        />
        <div className="leftcards">
          {left.map((card) => (
            <Card className="maincard">
              <Card.Body style={{ padding: "0px" }}>
                <p className="cardname">{card.name}</p>
                <div className="cardsection">
                  <img src={card.image} alt={card.name} />
                  <div className="cardhead">{card.heading}</div>
                </div>
                <div>
                  {card.points.map((point) => (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>•</div>
                      <p className="carddes">{point}</p>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="rightcards">
          {right.map((card) => (
            <Card className="maincard">
              <Card.Body style={{ padding: "0px" }}>
                <p className="cardname">{card.name}</p>
                <div className="cardsection">
                  <img src={card.image} alt={card.name} />
                  <div className="cardhead">{card.heading}</div>
                </div>
                <div>
                  {card.points.map((point) => (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>•</div>
                      <p className="carddes">{point}</p>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
