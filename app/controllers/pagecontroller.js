paths=require("path")
const {News}=require("../models")
exports.HomePage = async  function(req,res){
    var news= await News.findAll()
    console.log(news)
    res.render("public/index",{news})
}