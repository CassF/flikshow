const Photos = require("../lib/flikrPhotos");

class PhotosController {
    static getPhotoData(req, res) {
        Photos.doFetchPhotos()
            .then(result => {
                res.status(200).send({
                    result: result
                });
            })
            .catch(err => {
                res.status(400).send(err);
            });
    }
}
module.exports = PhotosController;