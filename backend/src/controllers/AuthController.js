const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

class AuthController {
  static browse = (req, res) => {
    models.admin
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.admin
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.admin.delete(req.params.id).then(() => {
      res.sendStatus(204);
    });
  };

  static signup = (req, res) => {
    const admin = req.body;

    // TODO validations (length, format...)

    admin.password = bcrypt.hashSync(
      admin.password,
      parseInt(process.env.CRYPT_ROUNDS, 10)
    );

    models.admin
      .insert(admin)
      .then(([result]) => {
        admin.id = result.insertId;
        delete admin.password;
        const token = jwt.sign(admin, process.env.JWT_SECRET);
        res.status(201).send({ admin, token });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = (req, res) => {
    const token = jwt.sign(req.user, process.env.JWT_SECRET);
    res.status(200).json({ user: req.user, token });
  };
}

module.exports = AuthController;
