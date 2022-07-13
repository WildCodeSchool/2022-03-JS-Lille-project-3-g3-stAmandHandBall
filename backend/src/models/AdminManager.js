const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  static table = "news";

  insert(admin) {
    return this.connection.query(
      `insert into ${AdminManager.table} (email, admin) values (?,?)`,
      [admin.email, admin.password]
    );
  }

  update(admin) {
    return this.connection.query(
      `update ${AdminManager.table} set email = ?, password = ? where id = ?`,
      [admin.email, admin.password, admin.id]
    );
  }
}

module.exports = AdminManager;
