const AbstractManager = require("./AbstractManager");

class HistoryManager extends AbstractManager {
  static table = "history";

  insert(history) {
    return this.connection.query(
      `insert into ${HistoryManager.table} (title, text) values (?,?)`,
      [history.title, history.text]
    );
  }

  update(history) {
    return this.connection.query(
      `update ${HistoryManager.table} set title = ?, text = ? where id = ?`,
      [history.title, history.text, history.id]
    );
  }
}

module.exports = HistoryManager;
