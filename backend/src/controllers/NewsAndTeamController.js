const models = require("../models");

class NewsAndTeamController {
  static browse = (req, res) => {
    models.newsAndTeam
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}
module.exports = NewsAndTeamController;
