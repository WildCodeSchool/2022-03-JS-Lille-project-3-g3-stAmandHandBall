const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  static table = "team";

  insert(team) {
    return this.connection.query(
      `insert into ${TeamManager.table} (title, division, staff_id) values (?,?,?)`,
      [team.title, team.division, team.staff_id]
    );
  }

  update(team) {
    return this.connection.query(
      `update ${TeamManager.table} set title = ?, division = ?, staff_id = ? where id = ?`,
      [team.title, team.division, team.staff_id, team.id]
    );
  }
}

module.exports = TeamManager;
