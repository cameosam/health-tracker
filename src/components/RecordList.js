import React from "react";
import axios from "axios";
import Record from "./Record";

export default class RecordList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:7000/record/")
      .then((response) => this.setState({ records: response.data }))
      .catch((error) => console.log(error));
  }

  deleteRecord(id) {
    axios
      .delete("http://localhost:7000/record/" + id)
      .then((response) => console.log(response.data));
    this.setState({
      records: this.state.records.filter((el) => el._id !== id),
    });
  }

  recordList() {
    return this.state.records.map((currentRecord) => {
      return (
        <Record
          record={currentRecord}
          deleteRecord={this.deleteRecord}
          key={currentRecord._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Measurement Logs</h3>
        <table className="ui table">
          <thead>
            <tr>
              <th>Weight</th>
              <th>Mood</th>
              <th>Waist</th>
              <th>Hip</th>
              <th>Arm</th>
              <th>Thigh</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}
