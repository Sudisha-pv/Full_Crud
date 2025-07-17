// import express
const express = require('express');

// create router
const router = express.Router();

// import controller
const flightController = require('../Controllers/flightController')

// define route
router.post('/api/flight',flightController.flightAPI);

router.get('/api/getAllFlight',flightController.getAllFlight)

router.put('/api/updateFlight/:id',flightController.updateFlight)

router.delete('/api/deleteflight/:id', flightController.deleteFlight);

//  EXPORT the router so you can use it in server.js
module.exports = router;
