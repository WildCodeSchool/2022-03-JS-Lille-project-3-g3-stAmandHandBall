const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const bcrypt = require("bcrypt");
const models = require("./models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (formMail, formPassword, done) => {
      try {
        models.admin.findOneByMail(formMail).then(([result]) => {
          if (!result.length)
            return done(null, false, { msg: "Wrong username!" });

          const admin = result[0];
          const isPasswordOK = bcrypt.compareSync(formPassword, admin.password);
          if (!isPasswordOK) return done(null, false, "Wrong password!");

          delete admin.password;
          return done(null, admin);
        });
      } catch (err) {
        console.warn(err);
        return done(err);
      }
      return null;
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    (jwtPayload, done) => {
      const admin = jwtPayload;
      return done(null, admin);
    }
  )
);

passport.serializeUser((admin, done) => {
  done(null, admin);
});

passport.deserializeUser((admin, done) => {
  done(null, admin);
});
