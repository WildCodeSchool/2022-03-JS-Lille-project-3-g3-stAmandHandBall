const AbstractManager = require("./AbstractManager");

class CalendarManager extends AbstractManager {
  static table = "calendar";

  insert(calendar) {
    return this.connection.query(
      `insert into ${CalendarManager.table} (id, day, isHome, happenedAt, result, opponent) values (?,?,?,?,?,?)`,
      [
        calendar.day,
        calendar.isHome,
        calendar.happenedAt,
        calendar.result,
        calendar.opponent,
      ]
    );
  }

  update(calendar) {
    return this.connection.query(
      `update ${CalendarManager.table} set day = ?, isHome = ?, happenedAt = ?, result = ?, opponent = ? where id = ?`,
      [
        calendar.day,
        calendar.isHome,
        calendar.happenedAt,
        calendar.result,
        calendar.opponent,
        calendar.id,
      ]
    );
  }
}

module.exports = CalendarManager;
