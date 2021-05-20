const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema(
  {
    weight: { type: Number, required: true },
    mood: { type: Number, required: true },
    waist: { type: Number, required: true },
    hip: { type: Number, required: true },
    arm: { type: Number, required: true },
    thigh: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
