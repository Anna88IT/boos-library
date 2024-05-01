import passport from "passport";
import passportLocal from "passport-local";
import {getUserByEmail, getUserById} from "../services/loginService.js";
import bcrypt from "bcrypt";

passport.use(new passportLocal.Strategy({
    usernameField: 'email'
}, async (email, password, done) => {

    try {
        const user = await getUserByEmail(email);
        if(user === undefined) {
            return done(null, null, {message: "incorrect email"})
        }

        if(await bcrypt.compare(password, user.password)) {
            return done(null, user)
        }

        done(null, null, {message: "incorrect password"})
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    console.log(user.id, "serialize")
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log(id, "id")
    try {
        const user = await getUserById(id);
        console.log(user.id, "deserialize");
        done(null, user);
    } catch (error) {
        done(error);
    }
});


export default passport;