const AbstractManager = require("./AbstractManager");

class CalendarManager extends AbstractManager {
  static table = "calendar";

  insert(calendar) {
    return this.connection.query(
      `insert into ${CalendarManager.table} (id, day, isHome, happenedAt, result, opponent, opponent_id, place) values (?,?,?,?,?,?,?,?)`,
      [
        calendar.day,
        calendar.isHome,
        calendar.happenedAt,
        calendar.result,
        calendar.opponent,
        calendar.opponent_id,
        calendar.place,
      ]
    );
  }

  update(calendar) {
    return this.connection.query(
      `update ${CalendarManager.table} set day = ?, isHome = ?, happenedAt = ?, result = ?, opponent = ?, opponent_id = ?, place = ? where id = ?`,
      [
        calendar.day,
        calendar.isHome,
        calendar.happenedAt,
        calendar.result,
        calendar.opponent,
        calendar.opponent_id,
        calendar.place,
        calendar.id,
      ]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT * FROM calendar INNER JOIN opponent ON opponent.id=calendar.opponent_id ORDER BY happenedAt ASC;`
    );
  }
}

module.exports = CalendarManager;
