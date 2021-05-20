import React from "react";
import axios from "axios";
import Form from "./Form";

export default class CreateRecord extends React.Component {
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

  onSubmit(e) {
    console.log(String(this.state.date));
    e.preventDefault();

    const Health = {
      weight: this.state.weight,
      mood: this.state.mood,
      waist: this.state.waist,
      hip: this.state.hip,
      arm: this.state.arm,
      thigh: this.state.thigh,
      date: this.state.date,
    };

    console.log(Health);

    axios
      .post("http://localhost:7000/record/add", Health)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  onInputChange(value, metric) {
    this.setState({ [metric]: value });
  }

  render() {
    return (
      <div>
        <h3>Create new record</h3>
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
