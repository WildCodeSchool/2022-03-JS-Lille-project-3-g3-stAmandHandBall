const AbstractManager = require("./AbstractManager");

class ContactManager extends AbstractManager {
  static table = "contact";

  insert(contact) {
    return this.connection.query(
      `insert into ${ContactManager.table} (name, email, object, message) values (?, ?, ?, ?)`,
      [contact.name, contact.email, contact.object, contact.message]
    );
  }
}

module.exports = ContactManager;
