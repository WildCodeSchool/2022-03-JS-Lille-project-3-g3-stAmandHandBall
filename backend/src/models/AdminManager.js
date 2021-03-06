const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  static table = "admin";

  insert(admin) {
    return this.connection.query(
      `insert into ${AdminManager.table} (email, password) values (?,?)`,
      [admin.email, admin.password]
    );
  }

  findOneByMail(email) {
    return this.connection.query(
      `select * from ${AdminManager.table} where email=?`,
      [email]
    );
  }
}

module.exports = AdminManager;
