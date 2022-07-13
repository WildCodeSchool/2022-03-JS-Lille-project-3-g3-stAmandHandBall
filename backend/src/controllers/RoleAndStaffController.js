const models = require("../models");

class RoleAndStaffController {
  static browse = (req, res) => {
    models.roleAndStaff
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
module.exports = RoleAndStaffController;
