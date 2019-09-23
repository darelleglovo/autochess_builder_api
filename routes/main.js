const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const Race = require("../models/race");
const Class_ = require("../models/class");
const Hero = require("../models/hero");



router.get("", (req, res, next) => {
  res.status(200).json({
    test: 'tests'
  })
});

router.post("/addrace", (req, res, next) => {
    console.log(req.body)
    const race = new Race({
        name: "testing",
        description: "this is a test",
        buffInfo: {
            level: 1,
            heroQty: 2,
            description: "this is a buff"
        }
    });
    race.save().then(result => {
    res.status(201).json({
        message: "Race created..",
        result: result
    });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        });
    });
});

router.post("/addclass", (req, res, next) => {
    console.log(req.body)
    const class_ = new Class_({
        name: "testing",
        description: "this is a test",
        buffInfo: {
            level: 1,
            heroQty: 2,
            description: "this is a buff"
        }
    });
    class_.save().then(result => {
    res.status(201).json({
        message: "Class created..",
        result: result
    });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        });
    });
});

router.get("/addhero", (req, res, next) => {
    console.log(req.body)
    const hero = new Hero({
        name: "testing",
        description: "this is a test",
        class: ["Class1", "Class2"],
        race: ["Race1", "Race2"]
    });
    hero.save().then(result => {
    res.status(201).json({
        message: "Hero created..",
        result: result
    });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;