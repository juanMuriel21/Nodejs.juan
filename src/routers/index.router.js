const express = require ("express")
const router = express.Router();
const controller = require("../control/index.controller")

router.get ("/", controller.index)

module.exports = router