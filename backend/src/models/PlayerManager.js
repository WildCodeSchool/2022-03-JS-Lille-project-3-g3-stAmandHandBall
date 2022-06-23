const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  static table = "player";

  insert(player) {
    return this.connection.query(
      `insert into ${PlayerManager.table} (lastname, firstname, number, position, captain, img) values (?,?,?,?,?,?)`,
      [
        player.lastname,
        player.firstname,
        player.number,
        player.position,
        player.captain,
        player.img,
      ]
    );
  }

  update(player) {
    return this.connection.query(
      `update ${PlayerManager.table} set lastname = ?, firstname = ?, number = ?, position = ?, captain = ?, img = ? where id = ?`,
      [
        player.lastname,
        player.firstname,
        player.number,
        player.position,
        player.captain,
        player.img,
        player.id,
      ]
    );
  }
}

module.exports = PlayerManager;
