const {News}=require("../models")
exports.NewsShow = async  function(req,res){
    var news= await News.findByPk(req.params.id)
    console.log(news.dataValues)
    if(news != null){
        res.render("public/news/newsshow",{news})
    }else{
        res.redirect("/")
    }
}