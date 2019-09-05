var db = require("../models");

module.exports = (app) => {
    //Get Route for retrieving all colors
    app.get("/api/colors/", function(req, res) {
    // TODO:
    db.Colors.findAll({})
      .then(function(dbColor) {
        res.json(dbColor);
      });
  });

  // Get route for retrieving a single color
  app.get("/api/colors/:id", function(req, res) {
    // TODO:
    db.Colors.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbColor) {
        res.json(dbColor);
      });
  });
}