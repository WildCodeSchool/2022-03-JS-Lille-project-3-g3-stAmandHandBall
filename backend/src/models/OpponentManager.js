const AbstractManager = require("./AbstractManager");

class OpponentManager extends AbstractManager {
  static table = "opponent";

  insert(opponent) {
    return this.connection.query(
      `insert into ${OpponentManager.table} (name, logo) values (?,?)`,
      [opponent.name, opponent.logo]
    );
  }

  update(opponent) {
    return this.connection.query(
      `update ${OpponentManager.table} set name = ?, logo = ? where id = ?`,
      [opponent.name, opponent.logo, opponent.id]
    );
  }
}

module.exports = OpponentManager;
