const AbstractManager = require("./AbstractManager");

class TeamAndStaffManager extends AbstractManager {
  static table = "teamAndStaff";

  findAll() {
    return this.connection.query(
      `SELECT * FROM staff AS s LEFT JOIN team AS t ON t.id=staff_id;`
    );
  }
}

module.exports = TeamAndStaffManager;
