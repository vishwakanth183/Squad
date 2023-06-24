const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.JWT_KEY;
    // console.log('passport opts', opts)
    passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
        // console.log('passport jwt_payload', jwt_payload)
        if (jwt_payload) {
            return done(null, jwt_payload);
        } else {
            return done(null, false);
        }
    }));
}