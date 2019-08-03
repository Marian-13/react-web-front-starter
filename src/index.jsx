import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./styles.scss";

const App = ({ name }) => <div>Hello {name}</div>;

App.propTypes = {
  name: PropTypes.string.isRequired
};

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
