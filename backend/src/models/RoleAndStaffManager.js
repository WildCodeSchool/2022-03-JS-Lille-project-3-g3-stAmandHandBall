const AbstractManager = require("./AbstractManager");

class RoleAndStaffManager extends AbstractManager {
  static table = "roleAndStaff";

  findAll() {
    return this.connection.query(
      `SELECT * FROM staff_has_role AS shr JOIN staff AS s ON s.id=shr.staff_id JOIN role AS r ON r.id=shr.role_id;`
    );
  }
}

module.exports = RoleAndStaffManager;
