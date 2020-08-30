const passport = require("passport"),
  LocalStaregy = require("passport-local").Strategy;
const passwordJWT = require("passport-jwt"),
  JWTStrategy = passwordJWT.Strategy,
  ExtractJWT = passwordJWT.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "Your_jwt_secret"
    },
    (email, password, cb) => {
      //this one is typically a DB call.Assume that the returned user
      //object is pre -formatted and reddy for storing in jwt
      return UserModel.findOne({ email, password })
        .then((user) => {
          if (!user) {
            return cb(null, false, { message: "Incorrect email or Password" });
          }
          return cb(null, user, { message: "Log in Successfully" });
        })
        .catch((err) => cb(err));
    }
  )
);
