const AbstractManager = require("./AbstractManager");

class RefereeAndRoleManager extends AbstractManager {
  static table = "refereeAndRole";

  findAll() {
    return this.connection.query(
      `SELECT * FROM referee AS r LEFT JOIN role AS ro ON ro.id=r.role_id;`
    );
  }
}

module.exports = RefereeAndRoleManager;
