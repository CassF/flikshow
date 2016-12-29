const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const photoController = require("../controllers/photoController");

router.get("/", indexController.showIndex);
router.post("/search", photoController.getPhotoData);
router.get("/show-photos", indexController.showPhotos);
module.exports = router;