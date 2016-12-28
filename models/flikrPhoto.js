//Constructing a photo class. In this constructor it checks for the correct object type  and
//whether the field actually exists. If anything of these fail in the constructor it throws a custom error.
class Photo {
    
    constructor(obj) {
        //if the object does not have an id then throw an error
        if (!obj.id) {
            throw new Error("Photo does not have an id");
        } else {
            this.id = obj.id;
        }

        if (!obj.title) {
            //if the object does not have a title then throw an error
            throw new Error("Photo does not have a title");
        } else if (typeof obj.title != "string") {
            throw new Error("title must be a string");
        } else {
            this.title = obj.title;
        }

        if (obj.latitude == "0") {
            //if the object has a latitude of 0 then throw an error, otherwise use the give integer 
            throw new Error("Photo does not have a valid latitude value");
        } else {
            this.latitude = obj.latitude;
        }

        if (obj.longitude == "0") {
            //if the object has a longitude of 0 then throw an error, otherwise use the give integer 
            throw new Error("Photo does not have a valid longitude value");
        } else {
            this.longitude = obj.longitude;
        }

        if (!obj.url_c) {
            //if the object does not have an image url then throw an error
            throw new Error("Cannot display photo without valid URL");
        } else {
            this.url_c = obj.url_c;
        }
    }
}

//Exporting the Photo class
module.exports = Photo;