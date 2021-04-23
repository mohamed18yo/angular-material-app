const mongoose = require("mongoose");

const finishedExerciseSchema = new mongoose.Schema({
  id: String,
  name: String,
  duration: Number,
  calories: Number,
  date: Date,
  state: String,
});

const FinishedExercise = mongoose.model(
  "FinishedExercise",
  finishedExerciseSchema
);
module.exports = FinishedExercise;
