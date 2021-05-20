const router = require("express").Router();
let Record = require("./recordModel");

router.route("/").get((req, res) => {
  Record.find()
    .then((healthRecord) => res.json(healthRecord))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const weight = Number(req.body.weight);
  const mood = Number(req.body.mood);
  const waist = Number(req.body.waist);
  const hip = Number(req.body.hip);
  const arm = Number(req.body.arm);
  const thigh = Number(req.body.thigh);
  const date = Date.parse(req.body.date);

  const newRecord = new Record({
    weight,
    mood,
    waist,
    hip,
    arm,
    thigh,
    date,
  });

  newRecord
    .save()
    .then(() => res.json("health record added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Record.findById(req.params.id)
    .then((healthRecord) => res.json(healthRecord))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Record.findByIdAndDelete(req.params.id)
    .then(() => res.json("health record deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Record.findById(req.params.id)
    .then((healthRecord) => {
      healthRecord.weight = Number(req.body.weight);
      healthRecord.mood = Number(req.body.mood);
      healthRecord.waist = Number(req.body.waist);
      healthRecord.hip = Number(req.body.hip);
      healthRecord.arm = Number(req.body.arm);
      healthRecord.thigh = Number(req.body.thigh);
      healthRecord.date = Date.parse(req.body.date);

      healthRecord
        .save()
        .then(() => res.json("health record updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
