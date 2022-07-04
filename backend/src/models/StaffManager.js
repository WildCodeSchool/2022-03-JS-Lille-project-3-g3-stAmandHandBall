const AbstractManager = require("./AbstractManager");

class StaffManager extends AbstractManager {
  static table = "staff";

  insert(staff) {
    return this.connection.query(
      `insert into ${StaffManager.table} (lastname, firstname, img) values (?,?,?)`,
      [staff.lastname, staff.firstname, staff.img]
    );
  }

  update(staff) {
    return this.connection.query(
      `update ${StaffManager.table} set lastname = ?, firstname = ?, img = ? where id = ?`,
      [staff.lastname, staff.firstname, staff.img, staff.id]
    );
  }
}

module.exports = StaffManager;
