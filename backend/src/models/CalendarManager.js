const AbstractManager = require("./AbstractManager");

class CalendarManager extends AbstractManager {
  static table = "calendar";

  insert(calendar) {
    return this.connection.query(
      `insert into ${CalendarManager.table} (id, day, isHome, happenedAt, result, opponent, opponent_id, place, news_id) values (?,?,?,?,?,?,?,?,?)`,
      [
        calendar.day,
        calendar.isHome,
        calendar.happenedAt,
        calendar.result,
        calendar.opponent,
        calendar.opponent_id,
        calendar.place,
        calendar.news_id,
      ]
    );
  }

  update(calendar) {
    return this.connection.query(
      `update ${CalendarManager.table} set day = ?, isHome = ?, happenedAt = ?, result = ?, opponent = ?, opponent_id = ?, place = ?, news_id where id = ?`,
      [
        calendar.day,
        calendar.isHome,
        calendar.happenedAt,
        calendar.result,
        calendar.opponent,
        calendar.opponent_id,
        calendar.place,
        calendar.news_id,
        calendar.id,
      ]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT * FROM calendar INNER JOIN opponent ON opponent.id=calendar.opponent_id INNER JOIN news ON news.id=calendar.news_id ORDER BY happenedAt DESC;`
    );
  }
}

module.exports = CalendarManager;
