const AbstractManager = require("./AbstractManager");

class RefereeManager extends AbstractManager {
  static table = "referee";

  insert(referee) {
    return this.connection.query(
      `insert into ${RefereeManager.table} (lastname, firstname, img) values (?,?,?)`,
      [referee.lastname, referee.firstname, referee.division, referee.img]
    );
  }

  update(referee) {
    return this.connection.query(
      `update ${RefereeManager.table} set lastname = ?, firstname = ?, img = ? where id = ?`,
      [referee.lastname, referee.firstname, referee.img, referee.id]
    );
  }
}

module.exports = RefereeManager;
