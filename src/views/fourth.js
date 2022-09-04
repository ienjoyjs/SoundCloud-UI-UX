import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./fourth.css";
import Searchbar from "../components/searchbar";
import Keyboard from "../components/keyboard";

const Fourth = (props) => {
  const history = useHistory();

  const handlePrev = () => {
    history.push("/third");
  };

  const handleEnter = () => {
    history.push("/third");
  };

  const handleKeyDown = (key) => {
    if (key === "go") {
      history.push("/third");
    }
  };

  return (
    <div className="fourth-container">
      <Helmet>
        <title>Test - fourth</title>
      </Helmet>
      <div className="fourth-fourth">
        <Searchbar />
        <div onClick={handleEnter}>
          <img
            src="/fourth_assets/rectangle464-byn-200h.png"
            alt="Rectangle464"
            className="fourth-rectangle"
          />
          <span className="fourth-text04">
            <span>Enter</span>
          </span>
        </div>
        <img
          src="/fourth_assets/rectangle466-l5w-200h.png"
          alt="Rectangle466"
          className="fourth-rectangle1"
        />
        <span className="fourth-text06">0</span>
        <span className="fourth-text07">0</span>
        <span className="fourth-text08">0</span>
        <span className="fourth-text09">0</span>
        <span className="fourth-text10">
          <span>Address</span>
        </span>
        <span className="fourth-text12">
          <span>408 Wilshire Blvd, Santa Mon….</span>
        </span>
        <div className="fourth-group6copy7">
          <Keyboard onKeyDown={handleKeyDown} />
        </div>
        <div className="fourth-tabbarcopy4">
          <img
            src="/fourth_assets/background4213-38ah-200h.png"
            alt="background4213"
            className="fourth-background1"
          />
          <div className="fourth-bars-home-indicator-on-dark">
            <img
              src="/fourth_assets/homeindicatori421-z5rk-200h.png"
              alt="HomeIndicatorI421"
              className="fourth-home-indicator"
            />
          </div>
          <img
            src="/fourth_assets/more4215-pi0g.svg"
            alt="more4215"
            className="fourth-more"
          />
          <div className="fourth-tabs">
            <img
              src="/fourth_assets/rectangle24220-n6x-200h.png"
              alt="Rectangle24220"
              className="fourth-rectangle2"
            />
            <span className="fourth-text14">3</span>
          </div>
          <div className="fourth-search1">
            <img
              src="/fourth_assets/iconsearch4224-fbk.svg"
              alt="iconsearch4224"
              className="fourth-iconsearch"
            />
          </div>
          <img
            src="/fourth_assets/arrowright4229-dlro.svg"
            alt="arrowright4229"
            className="fourth-arrowright"
          />
          <img
            src="/fourth_assets/arrowleft4230-sm2w.svg"
            alt="arrowleft4230"
            className="fourth-arrowleft"
            onClick={handlePrev}
          />
        </div>
      </div>
    </div>
  );
};

export default Fourth;
