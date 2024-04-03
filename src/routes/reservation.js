"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | HOTEL RESERVATION API
------------------------------------------------------- */

const router = require("express").Router()


const reservation = require("../controllers/reservation")
const permissions = require("../middlewares/permissions")

router.route("/")
    .get(permissions.isLogin, reservation.list)
    .post(permissions.isLogin, reservation.create)
   

router.route("/:id")
    .get(permissions.isLogin, reservation.read)
    .put(permissions.isAdmin, reservation.update)
    .patch(permissions.isAdmin, reservation.update)
    .delete(permissions.isAdmin, reservation.delete)

module.exports = router