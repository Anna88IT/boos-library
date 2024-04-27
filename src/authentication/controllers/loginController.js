import passport from "../middlwares/passport.js";

export const login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
});
export const logout = (req, res) => {
    req.logout();
    res.redirect('/login');
};

export const loginGet = async (req, res) => {
    console.log("login get")
    res.send(false);
};