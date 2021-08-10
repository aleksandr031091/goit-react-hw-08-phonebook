import React from "react";
import { connect } from "react-redux";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItems";

const Navigstion = () => {
  return (
    <>
      <ul>
        {mainRoutes.map((route) => (
          <NavigationItem {...route} key={route.path} />
        ))}
      </ul>
      <button>logOut</button>
    </>
  );
};

export default connect()(Navigstion);
