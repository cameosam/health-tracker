import React from "react";
import axios from "axios";
import LineGraph from "./LineGraph";

const metrics = ["weight", "mood", "waist", "hip", "arm", "thigh"]

export default class RecordGraphs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { records: [], metric: "weight" };
  }

  componentDidMount() {
    axios
      .get("http://localhost:7000/record/")
      .then((response) => this.setState({ records: response.data }))
      .catch((error) => console.log(error));
  }

  buttons = metrics.map((metric, index) => {
      return (
        <button
          className="ui basic button"
          value={metric}
          onClick={(e) => this.setState({ metric: e.target.value })}
          key={index}
        >
          {metric}
        </button>
      );
    }
  );

  render() {
    return (
      <div>
        <h3>Visualize Measurements</h3>
        <div className="six ui basic buttons">{this.buttons}</div>
        <div className="ui segment">
          <LineGraph records={this.state.records} metric={this.state.metric} />
        </div>
      </div>
    );
  }
}
