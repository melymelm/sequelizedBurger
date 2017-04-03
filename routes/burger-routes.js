//Dependencies
var db = require("../models");

//Routes
module.exports = function(app) {

app.get("/", function(req,res) {
    
//List all Burgers
    db.Burger.findAll().then(function(results) {
        var hbsObject = {
            burgers: results
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//New Burger Created
app.post("/:id", function(req, res) {

    db.Burger.create({
        burger_name: req.body.name,
        devoured: req.body.devoured
    }).then(function() {
        res.redirect("/");
      });
});

//Update a Burger
app.put("/:id", function(req,res) {

    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: { id: req.params.id }}).then(function() {
            res.redirect("/");
        });
});

}