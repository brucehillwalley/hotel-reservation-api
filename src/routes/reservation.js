"use strict";
/*-------------------------------------------------------
      NODEJS EXPRESS | HOTEL RESERVATION API
-------------------------------------------------------*/
const router = require("express").Router();
/*-------------------------------------------------------*/
// Reservation Routes:

const Reservation = require("../controllers/reservation");

router.route("/").get(Reservation.list).post(Reservation.create);

router
  .route("/:reservationId")
  .get(Reservation.read)
  .put(Reservation.update)
  .patch(Reservation.update)
  .delete(Reservation.delete);

module.exports = router;
 