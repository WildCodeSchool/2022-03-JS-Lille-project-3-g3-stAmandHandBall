const AbstractManager = require("./AbstractManager");

class TeamManager extends AbstractManager {
  static table = "team";

  insert(team) {
    return this.connection.query(
      `insert into ${TeamManager.table} (title, division, img) values (?,?,?)`,
      [team.title, team.division, team.img]
    );
  }

  update(team) {
    return this.connection.query(
      `update ${TeamManager.table} set title = ?, division = ?, img = ? where id = ?`,
      [team.title, team.division, team.img, team.id]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT t.id, t.title, t.division 
      FROM ${this.table} AS t ;`
    );
  }

  find(id) {
    return this.connection.query(
      `SELECT t.id, t.title, t.division, t.img, s.firstname, s.lastname, s.img AS staffImg 
      FROM ${this.table} AS t 
      INNER JOIN staff_has_team AS sht ON sht.team_id=t.id
      INNER JOIN staff AS s ON s.id=sht.staff_id 
      WHERE t.id = ?`,
      [id]
    );
  }
}

module.exports = TeamManager;
