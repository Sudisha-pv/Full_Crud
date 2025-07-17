const mongoose = require('mongoose')

//schema creation
const addSchema =new mongoose.Schema({ // passing item in object
  flightName: { 
    type: String,
     required: true 
    },
  flightNumber: { type: String, required: true },
  departureCity: { type: String, required: true },
  arrivalCity: { type: String, required: true },
  departureDate: { type: Date, required: true },
  arrivalDate: { type: Date, required: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  price: { type: Number, required: true }
})

//create models 
//exact same as mongodb collection
const flights=mongoose.model('flights',addSchema)

module.exports=flights
