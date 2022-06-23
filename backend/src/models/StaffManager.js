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
      `update ${StaffManager.table} set where id = ?, lastname = ?, firstname = ?, img = ? `,
      [staff.id, staff.lastname, staff.firstname, staff.img]
    );
  }
}

module.exports = StaffManager;
