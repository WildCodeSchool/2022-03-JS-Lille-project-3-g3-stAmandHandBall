const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  static table = "admin";

  insert(admin) {
    return this.connection.query(
      `insert into ${AdminManager.table} (email, password) values (?,?)`,
      [admin.email, admin.password]
    );
  }
}

module.exports = AdminManager;
