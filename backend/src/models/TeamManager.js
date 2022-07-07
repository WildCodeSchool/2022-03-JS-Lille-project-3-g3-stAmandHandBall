const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  static table = "team";

  insert(team) {
    return this.connection.query(
      `insert into ${TeamManager.table} (title, division,) values (?,?)`,
      [team.title, team.division]
    );
  }

  update(team) {
    return this.connection.query(
      `update ${TeamManager.table} set title = ?,  = ?, number = ? where id = ?`,
      [team.title, team.division, team.id]
    );
  }
}

module.exports = TeamManager;
