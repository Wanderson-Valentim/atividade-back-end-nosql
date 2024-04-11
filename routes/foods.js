const express = require('express');
const foodsController = require('../controllers/foods');
const router = express.Router()

router.get("/api/foods", foodsController.findAll);

router.get("/api/foods/:id", foodsController.findById);

router.post("/api/foods", foodsController.create);

router.put("/api/foods/:id", foodsController.update);

router.delete("/api/foods/:id", foodsController.remove);

module.exports = router;