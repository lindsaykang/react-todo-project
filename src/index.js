import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import TodoContainer from "./functionBased/components/TodoContainer";

// stylesheet
import "./functionBased/App.css";

ReactDOM.render(
  <Router>
    <TodoContainer />
  </Router>,
  document.getElementById("root")
);
