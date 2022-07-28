const AbstractManager = require("./AbstractManager");

class TeamAndStaffManager extends AbstractManager {
  static table = "teamAndStaff";

  findAll() {
    return this.connection.query(
      `SELECT t.id as team_id, t.title, t.division, t.img as team_img, s.id as staff_id, s.lastname, s.firstname, s.img as staff_img, s.cf
      FROM staff_has_team AS sht
      INNER JOIN team AS t ON t.id=sht.team_id
      INNER JOIN staff AS s ON s.id=sht.staff_id;`
    );
  }
}

module.exports = TeamAndStaffManager;
