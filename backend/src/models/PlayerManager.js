const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  static table = "player";

  insert(player) {
    return this.connection.query(
      `insert into ${PlayerManager.table} (lastname, firstname, number, position, captain, img, cf) values (?,?,?,?,?,?,?)`,
      [
        player.lastname,
        player.firstname,
        player.number,
        player.position,
        player.captain,
        player.img,
        player.cf,
      ]
    );
  }

  update(player) {
    return this.connection.query(
      `update ${PlayerManager.table} set lastname = ?, firstname = ?, number = ?, position = ?, captain = ?, img = ?, cf = ? where id = ?`,
      [
        player.lastname,
        player.firstname,
        player.number,
        player.position,
        player.captain,
        player.img,
        player.cf,
        player.id,
      ]
    );
  }
}

module.exports = PlayerManager;
