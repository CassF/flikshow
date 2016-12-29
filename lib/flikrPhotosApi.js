const rest = require('restler');
const Photo = require("../models/flikrPhoto");

class Photos {
    static doFetchPhotos() {
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8d0b66ca547cdd75db44d10c3078933f&text=apples&extras=geo%2C+url_c&format=json&nojsoncallback=1`).on('complete', function (result) {
                    if (result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {
                        let photoArray = result.photos.photo;
                        let filteredArray = [];
                        for (let i in photoArray) {
                            try {
                                let flikrPhoto = new Photo(photoArray[i]);
                                filteredArray.push(flikrPhoto);
                            } catch (err) {
                                console.log(`Error ${err.message}`);
                            }
                        }
                        console.log(filteredArray);
                        resolve(filteredArray);
                    }
                });
            }
        )
    }
}
module.exports = Photos;