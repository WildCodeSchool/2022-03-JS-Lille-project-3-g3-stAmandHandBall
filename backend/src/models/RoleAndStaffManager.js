const AbstractManager = require("./AbstractManager");

class RoleAndStaffManager extends AbstractManager {
  static table = "roleAndStaff";

  findAll() {
    return this.connection.query(
      `SELECT r.name as roleName, r.group as groupName, s.firstname, s.lastname, s.img
      FROM staff_has_role AS shr
      INNER JOIN role AS r ON r.id=shr.role_id
      INNER JOIN staff AS s ON s.id=shr.staff_id;`
    );
  }
}

module.exports = RoleAndStaffManager;
