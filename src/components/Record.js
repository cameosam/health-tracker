import React from "react";
import { Link } from "react-router-dom";

const Record = ({ record, deleteRecord }) => (
  <tr>
    <td>{record.weight}</td>
    <td>{record.mood}</td>
    <td>{record.waist}</td>
    <td>{record.hip}</td>
    <td>{record.arm}</td>
    <td>{record.thigh}</td>
    <td>{record.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + record._id}>edit</Link>
      {" | "}
      <a href="/" onClick={(event) => deleteRecord(record._id)}>
        delete
      </a>
    </td>
  </tr>
);

export default Record;
