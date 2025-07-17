const mongoose = require('mongoose');
const Flight = require('../Models/addSchema');  // use the correct model variable name
const flights = require('../Models/addSchema');

exports.flightAPI = async (req, res) => {
  console.log("🛬 Received request:", req.body);

  const {
    flightName,
    flightNumber,
    departureCity,
    arrivalCity,
    departureDate,
    arrivalDate,
    departureTime,
    arrivalTime,
    price
  } = req.body;

  console.log(
    flightName,
    flightNumber,
    departureCity,
    arrivalCity,
    departureDate,
    arrivalDate,
    departureTime,
    arrivalTime,
    price
  );

  try {
    // Check if flight already exists based on flightNumber
    const flightExist = await Flight.findOne({ flightNumber });

    if (flightExist) {
      return res.status(400).json("Flight already exists");
    }

    // Create new flight
    const newFlight = new Flight({
      flightName,
      flightNumber,
      departureCity,
      arrivalCity,
      departureDate,
      arrivalDate,
      departureTime,
      arrivalTime,
      price
    });

    // Save to MongoDB
    await newFlight.save();

    res.status(201).json({
      message: "Flight added successfully",
      flight: newFlight
    });

  } catch (err) {
    console.error("Error adding flight:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


exports.getAllFlight=async(req,res)=>{
  try {
     const response= await flights.find()
     res.status(200).json(response)
  } catch (error) {
    res.status(406).json(err)
  }
  
}

exports.updateFlight = async (req, res) => {
  const { id } = req.params; // Flight ID from URL
  const updatedFlightData = req.body; // New data from frontend

  try {
    // Find the flight by ID and update it
    const updatedFlight = await Flight.findByIdAndUpdate(id, updatedFlightData, { new: true });

    if (!updatedFlight) {
      return res.status(404).json({ message: "Flight not found" });
    }

    res.status(200).json({
      message: "Flight updated successfully",
      flight: updatedFlight
    });
  } catch (err) {
    console.error("Error updating flight:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



exports.deleteFlight = async (req, res) => {
  console.log("🗑️ Inside delete API");
  const { id } = req.params; // ✅ lowercase "id"

  try {
    const deletedFlight = await flights.findByIdAndDelete(id);
    if (!deletedFlight) {
      return res.status(404).json({ message: "Flight not found" });
    }
    res.status(200).json({ message: "Flight deleted successfully", deletedFlight });
  } catch (err) {
    console.error("Error deleting flight:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};




