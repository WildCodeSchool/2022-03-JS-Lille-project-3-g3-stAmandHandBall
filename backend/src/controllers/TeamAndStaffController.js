const models = require("../models");

class TeamAndStaffController {
  static browse = (req, res) => {
    models.teamAndStaff
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
module.exports = TeamAndStaffController;
