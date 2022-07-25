const models = require("../models");

class ContactController {
  static add = (req, res) => {
    const contact = req.body;

    // TODO validations (length, format...)

    models.contact
      .insert(contact)
      .then(([result]) => {
        res.status(201).send({ ...contact, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ContactController;
