"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS |  HOTEL RESERVATION API
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

// Reservation Schema
const ReservationSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    userName: {
      type: mongoose.Schema.Types.userName,
      ref: "User",
      required: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
   
    checkInDate: {
      type: Date,
      required: [true, "Check in date is required"],
    },
    checkOutDate: {
      type: Date,
      required: [true, "Check out date is required"],
    },
    guestNumber: {
      type: Number,
      required: [true, "Guest number is required"],
      min: [1, "Guest number can not be less than 1"],
      max: [5, "Guest number can not be more than 5"],
    },
    nights: {
        type: Number,
        required: [true, "Nights is required"],
        min: [1, "Nights can not be less than 1"],       
        
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    totalPrice: {
        default: function(){ return this.nights * this.price }, // Create
        transform: function(){ return this.nights * this.price }, // Update
  }
  },
  {
    collection: "Reservations",
    timestamps: true,
  }
);

// Reservation Model:
module.exports = mongoose.model("Reservation", ReservationSchema);
 