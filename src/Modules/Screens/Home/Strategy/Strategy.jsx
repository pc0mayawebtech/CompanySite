import React from "react";
import "./Strategy.css";
import { useNavigate } from "react-router-dom";

const Strategy = () => {
    const navigate = useNavigate()
  const cardData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="15"
          viewBox="0 0 24 15"
          fill="none"
        >
          <path
            d="M23 1.00342L13.5 10.5034L8.5 5.50342L1 13.0034"
            stroke="#4C6FFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      color: "#4c6fff38",
      Heading: "Strategy & Business",
      Description:
        "We design business models and growth strategies to be effective and competitive.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M21 16.0033V8.00332C20.9996 7.65259 20.9071 7.30813 20.7315 7.00448C20.556 6.70084 20.3037 6.44868 20 6.27332L13 2.27332C12.696 2.09778 12.3511 2.00537 12 2.00537C11.6489 2.00537 11.304 2.09778 11 2.27332L4 6.27332C3.69626 6.44868 3.44398 6.70084 3.26846 7.00448C3.09294 7.30813 3.00036 7.65259 3 8.00332V16.0033C3.00036 16.354 3.09294 16.6985 3.26846 17.0022C3.44398 17.3058 3.69626 17.558 4 17.7333L11 21.7333C11.304 21.9089 11.6489 22.0013 12 22.0013C12.3511 22.0013 12.696 21.9089 13 21.7333L20 17.7333C20.3037 17.558 20.556 17.3058 20.7315 17.0022C20.9071 16.6985 20.9996 16.354 21 16.0033Z"
            stroke="#6AC75A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M3.27002 6.96338L12 12.0134L20.73 6.96338"
            stroke="#6AC75A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 22.0834V12.0034"
            stroke="#6AC75A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      color: "#6ac75a40",
      Heading: "Product Design",
      Description:
        "We design business models and growth strategies to be effective and competitive.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clip-path="url(#clip0_147_922)">
            <path
              d="M12 15.0034C15.866 15.0034 19 11.8694 19 8.00342C19 4.13742 15.866 1.00342 12 1.00342C8.13401 1.00342 5 4.13742 5 8.00342C5 11.8694 8.13401 15.0034 12 15.0034Z"
              stroke="#FF6D43"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.21 13.8933L7 23.0033L12 20.0033L17 23.0033L15.79 13.8833"
              stroke="#FF6D43"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_147_922">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.00341797)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      color: "#ff6d4340",
      Heading: "Futures Research",
      Description:
        "We design business models and growth strategies to be effective and competitive.",
    },
  ];
  return (
    <div className="strategy">
      <div className="strategyTop">
        <div className="topMiniTitle">IT’S TIME FOR A SOFTWARE REVOLUTION</div>
        <div className="topMainTitle">
          Developing sustainable and innovative blockchain solutions
        </div>
      </div>
      <div className="strategyHero">
        <div className="leftSectionStrategy">
          {cardData?.map((item, index) => {
            return (
              <StrategyCard
                key={index}
                logo={item.icon}
                color={item.color}
                Heading={item.Heading}
                Description={item.Description}
              />
            );
          })}
        </div>
        <div className="rightSectionStrategy">
          <div className="rightHeroTitle">
            Strategies that get you on the path to success
          </div>
          <div className="rightHeroDesc">
          What if advancing software technology didn’t require abandoning legacy systems? A stable integration approach removes the risk of disruption and ensures a seamless transition. We are building the next generation of software solutions, grounded in the principles of compatibility and efficiency.
          </div>
          <div className="rightHeroButtons">
            <button onClick={()=> navigate('/service')} className="ourServices">Our Services</button>
            <button onClick={()=> navigate('/contact')} className="getStartedBtn">How it Works</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;

export const StrategyCard = ({ logo, Heading, Description, color }) => {
  return (
    <div className="strategyMain">
      <div className="strategyLeft">
        <div style={{ backgroundColor: `${color}` }}>{logo}</div>
      </div>
      <div className="strategyRight">
        <div className="strategyHeading">{Heading}</div>
        <div className="strategyDescription">{Description}</div>
      </div>
    </div>
  );
};
