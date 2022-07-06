const AbstractManager = require("./AbstractManager");

class RoleManager extends AbstractManager {
  static table = "role";

  insert(role) {
    return this.connection.query(
      `insert into ${RoleManager.table} (name, group) values (?,?)`,
      [role.name, role.group]
    );
  }

  update(role) {
    return this.connection.query(
      `update ${RoleManager.table} set name = ?, group = ? where id = ?`,
      [role.name, role.group, role.id]
    );
  }
}

module.exports = RoleManager;
