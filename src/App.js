import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import RecordList from "./components/RecordList";
import RecordGraphs from "./components/RecordGraphs";
import EditRecord from "./components/EditRecord";
import CreateRecord from "./components/CreateRecord";

function App() {
  return (
    <Router>
      <Header />
      <div className="ui container">
        <br />
        <Route path="/" exact component={RecordList} />
        <Route path="/visualize" component={RecordGraphs} />
        <Route path="/edit/:id" component={EditRecord} />
        <Route path="/create" component={CreateRecord} />
      </div>
    </Router>
  );
}

export default App;
