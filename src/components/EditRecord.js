import React from "react";
import axios from "axios";
import Form from "./Form";

export default class EditRecord extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      weight: "",
      mood: "",
      waist: "",
      hip: "",
      arm: "",
      thigh: "",
      date: new Date(),
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:7000/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          weight: response.data.weight,
          mood: response.data.mood,
          waist: response.data.waist,
          hip: response.data.hip,
          arm: response.data.arm,
          thigh: response.data.thigh,
          date: new Date(response.data.date),
        });
      })
      .catch((error) => console.log(error));
  }

  onSubmit(e) {
    e.preventDefault();

    const record = {
      weight: this.state.weight,
      mood: this.state.mood,
      waist: this.state.waist,
      hip: this.state.hip,
      arm: this.state.arm,
      thigh: this.state.thigh,
      date: this.state.date,
    };

    axios
      .post(
        "http://localhost:7000/record/update/" + this.props.match.params.id,
        record
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  onInputChange(value, metric) {
    this.setState({ [metric]: value });
  }

  render() {
    return (
      <div>
        <h3>Edit record</h3>
        <Form
          onSubmit={this.onSubmit}
          onInputChange={this.onInputChange.bind(this)}
          weight={this.state.weight}
          waist={this.state.waist}
          hip={this.state.hip}
          arm={this.state.arm}
          thigh={this.state.thigh}
          date={this.state.date}
        />
      </div>
    );
  }
}
