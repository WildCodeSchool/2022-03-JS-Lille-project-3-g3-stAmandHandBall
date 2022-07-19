const AbstractManager = require("./AbstractManager");

class TeamAndStaffManager extends AbstractManager {
  static table = "teamAndStaff";

  findAll() {
    return this.connection.query(
      `SELECT team.id, team.title, team.division FROM team;`
    );
  }
}

module.exports = TeamAndStaffManager;
