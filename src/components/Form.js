import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = (props) => (
  <div className="ui segment">
    <form onSubmit={props.onSubmit} className="ui form">
      <div className="two fields">
        <div className="field">
          <label>Weight: </label>
          <input
            type="number"
            required
            value={props.weight}
            onChange={(e) => props.onInputChange(e.target.value, "weight")}
          />
        </div>
        <div className="field">
          <label>Mood rating: </label>
          <select
            className="ui fluid dropdown"
            onChange={(e) => props.onInputChange(e.target.value, "mood")}
            value={props.mood}
          >
            <option value="">Select a number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="four fields">
        <div className="field">
          <label>Waist measurement: </label>
          <input
            type="number"
            required
            value={props.waist}
            onChange={(e) => props.onInputChange(e.target.value, "waist")}
          />
        </div>
        <div className="field">
          <label>Hip measurement: </label>
          <input
            type="number"
            required
            value={props.hip}
            onChange={(e) => props.onInputChange(e.target.value, "hip")}
          />
        </div>
        <div className="field">
          <label>Arm measurement: </label>
          <input
            type="number"
            required
            value={props.arm}
            onChange={(e) => props.onInputChange(e.target.value, "arm")}
          />
        </div>
        <div className="field">
          <label>Thigh measurement: </label>
          <input
            type="number"
            required
            value={props.thigh}
            onChange={(e) => props.onInputChange(e.target.value, "thigh")}
          />
        </div>
      </div>
      <div className="field">
        <label>Date: </label>
        <div>
          <DatePicker
            selected={props.date}
            onChange={(e) => props.onInputChange(e, "date")}
          />
        </div>
      </div>

      <div>
        <input type="submit" value="Save" className="ui button" />
      </div>
    </form>
  </div>
);

export default Form;
