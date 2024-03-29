"use strict";
/*-------------------------------------------------------
    NODEJS EXPRESS | HOTEL RESERVATION API
-------------------------------------------------------*/
// Reservation Controller:

const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {
    const data = await Reservation.find();

    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await Reservation.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req, res) => {
    const data = await Reservation.findOne({ _id: req.params.reservationId });
    res.status(202).send({
      error: false,
      data: data,
    });
  },
  update: async (req, res) => {
    const data = await Reservation.updateOne({ _id: req.params.reservationId }, req.body);
    const newdata = await Reservation.find({ _id: req.params.reservationId });
    res.status(202).send({
      error: false,
      data: data,
      newdata: newdata,
    });
  },
  delete: async (req, res) => {
    const data = await Reservation.deleteOne({ _id: req.params.reservationId });
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },

};
