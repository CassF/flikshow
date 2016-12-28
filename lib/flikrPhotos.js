const rest = require('restler');

class Photos {
    static doFetchPhotos(){
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8d0b66ca547cdd75db44d10c3078933f&text=apple&extras=geo%2C+url_l&format=json&nojsoncallback=1`).on('complete', function(result) {
                    if (result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {
                        console.log(result);
                        resolve(result);
                    }
                });
            }
        )
    }
}
module.exports = Photos;