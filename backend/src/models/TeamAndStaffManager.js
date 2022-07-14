const AbstractManager = require("./AbstractManager");

class TeamAndStaffManager extends AbstractManager {
  static table = "teamAndStaff";

  findAll() {
    return this.connection.query(
      `SELECT *
      FROM 
        team 
          INNER JOIN staff ON staff.id=team.staff_id;`
    );
  }
}

module.exports = TeamAndStaffManager;
