const models = require("../models");

class RefereeAndRoleController {
  static browse = (req, res) => {
    models.refereeAndRole
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
module.exports = RefereeAndRoleController;
