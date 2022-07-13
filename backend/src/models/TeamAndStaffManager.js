const AbstractManager = require("./AbstractManager");

class TeamAndStaffManager extends AbstractManager {
  static table = "teamAndStaff";

  findAll() {
    return this.connection.query(
      `select *
      FROM 
        team 
          inner join staff on staff.id=team.staff_id;`
    );
  }
}

module.exports = TeamAndStaffManager;
