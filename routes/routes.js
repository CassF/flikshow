const express = require("express");
const router = express.Router();
// const indexController = require("../controllers/indexController");
const photoController = require("../controllers/photoController");

// router.get("/", indexController.showIndex);
router.get("/", photoController.getPhotoData);

module.exports = router;