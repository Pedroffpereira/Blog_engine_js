paths=require("path")
exports.HomePage = function(req,res){
    path = paths.resolve(__dirname, 'logo.jpg')
    res.render("index",{path: path})
}