import passport from "../middlwares/passport.js";
//
// export const login = passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
// });

const logRequestBody = (req, res, next) => {
    console.log(req.body, "body000");
    next();
};

export const login = (req, res, next) => {
    logRequestBody(req, res, () => {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            // failureFlash: true
        })(req, res, next);
    });
};
export const logout = (req, res) => {
    req.logout();
    res.redirect('/login');
};
//
// export const loginGet = async (req, res) => {
//     console.log("login get")
//     res.send(false);
// };