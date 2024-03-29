"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS |  HOTEL RESERVATION API
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

// Room Schema
const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      trim: true,
      required: [true, "Room number is required"],
      unique: true,
    },
    roomType: {
      type: String,
      trim: true,
      required: [true, "Room type is required"],
      enum: {
        values: ["single", "double", "family", "king"],
        message: "Please select correct room type",
      },
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    image: [], // URL TO IMAGE, MULTER UPLOAD
  },
  {
    collection: "rooms",
    timestamps: true,
  }
);

// Room Model:
module.exports = mongoose.model("Room", roomSchema);
 