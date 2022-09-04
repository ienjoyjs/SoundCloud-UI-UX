import React, { useMemo } from "react";

import "./home.css";
import First from "./first";
import Fourth from "./fourth";
import Third from "./third";
import Fifth from "./fifth";
import Second from "./second";
import Sixth from "./sixth";
import { useRouteMatch } from "react-router-dom";

const Home = (props) => {
  const match = useRouteMatch();
  const page = useMemo(() => {
    const pages = ["first", "second", "third", "fourth", "fifth", "sixth"];
    return pages.indexOf(match.params.page);
  }, [match]);

  return (
    <div className="home-container">
      <div className="pages" style={{ left: -page * 414 }}>
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
      </div>
    </div>
  );
};

export default Home;
