var express = require("express");
var router = express.Router();

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

module.exports = router;
