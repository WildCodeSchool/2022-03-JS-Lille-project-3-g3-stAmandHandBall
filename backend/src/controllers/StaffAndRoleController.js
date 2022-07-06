const models = require("../models");

class StaffAndRoleController {
  static browse = (req, res) => {
    models.staffAndRole
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
module.exports = StaffAndRoleController;
