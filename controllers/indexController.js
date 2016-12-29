class IndexController {
    static showIndex(req,res){
        res.render("index");
        
    }

         static showPhotos(req, res) {
        res.render("show-photos");
    }
}
module.exports = IndexController;