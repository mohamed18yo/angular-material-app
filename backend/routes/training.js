var express = require("express");
var router = express.Router();
var FinishedExercise = require("../model/finishedExercise");

var avilableExercises = [
  { id: "crunches", name: "crunches", duration: 30, calories: 8 },
  { id: "touch-toes", name: "Touch Toes", duration: 180, calories: 15 },
  { id: "side-lunges", name: "Side Lunges", duration: 120, calories: 18 },
  // { id: "test", name: "test", duration: 120, calories: 18 },
  { id: "burpees", name: "Burpees", duration: 60, calories: 8 },
];
router.get("/", (req, res) => {
  res.status(200).json({ exercises: avilableExercises });
});

router.post("/", (req, res) => {
  const Exercise = new FinishedExercise({
    name: req.body.name,
    duration: req.body.duration,
    calories: req.body.calories,
    date: req.body.date,
    state: req.body.state,
  });
  Exercise.save().then((result) => {
    console.log(result);
    res.json(result);
  });
});
router.get("/finishedExercise", function (req, res) {
  FinishedExercise.find().then((result) => {
    res.json({ exercise: result });
    console.log(result);
  });
});

module.exports = router;
