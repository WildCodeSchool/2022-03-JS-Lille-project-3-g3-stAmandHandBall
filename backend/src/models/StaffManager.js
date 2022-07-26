const AbstractManager = require("./AbstractManager");

class StaffManager extends AbstractManager {
  static table = "staff";

  insert(staff) {
    return this.connection.query(
      `insert into ${StaffManager.table} (lastname, firstname, img, cf) values (?,?,?,?)`,
      [staff.lastname, staff.firstname, staff.img, staff.cf]
    );
  }

  update(staff) {
    return this.connection.query(
      `update ${StaffManager.table} set lastname = ?, firstname = ?, img = ?, cf = ? where id = ?`,
      [staff.lastname, staff.firstname, staff.img, staff.id, staff.cf]
    );
  }
}

module.exports = StaffManager;
