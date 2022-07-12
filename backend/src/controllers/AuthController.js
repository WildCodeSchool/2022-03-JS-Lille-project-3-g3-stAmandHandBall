const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

class AuthController {
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

  static loginAdmin = (req, res) => {
    if (req.user.email === process.env.ADMIN_EMAIL) {
      const token = jwt.sign(req.user, process.env.JWT_SECRET);
      res.status(200).json({ user: req.user, token });
    } else {
      res.status(401).send();
    }
  };
}

module.exports = AuthController;
