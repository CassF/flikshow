const rest = require('restler');

class Photos {
    static doFetchPhotos() {
        return new Promise(
            (resolve, reject) => {
                rest.get('http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=66cd4245bc876f8edca6a37cd1f909a1&user_id=146102203@N04&per_page=12&page=4&format=json&jsoncallback=?').on('complete', function(result) {
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
