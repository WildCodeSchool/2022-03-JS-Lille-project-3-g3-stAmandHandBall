const AbstractManager = require("./AbstractManager");

class RoleAndStaffManager extends AbstractManager {
  static table = "roleAndStaff";

  findAll() {
    return this.connection.query(
      `SELECT r.name as roleName, r.group as groupName, r.id as role_id, staff_id, s.firstname, s.cf, s.lastname, s.img, s.id
      FROM staff_has_role AS shr
      INNER JOIN role AS r ON r.id=shr.role_id
      INNER JOIN staff AS s ON s.id=shr.staff_id;`
    );
  }

  findOne(id) {
    return this.connection.query(
      `select staff_has_role.staff_id from  ${RoleAndStaffManager}/news/team where id = ?`,
      [id]
    );
  }

  update(roleAndStaff) {
    return this.connection.query(
      `update ${RoleAndStaffManager.table} set role_id = ?, staff_id = ?`,
      [roleAndStaff.role_id, roleAndStaff.staff_id]
    );
  }
}

module.exports = RoleAndStaffManager;
