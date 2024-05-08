import passport from "../middlwares/passport.js";
//
// export const login = passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
// });

const logRequestBody = (req, res, next) => {
    next();
};

export const login = (req, res, next) => {
    logRequestBody(req, res, () => {
        console.log(req.body, "body")
        // const {email} = req.body;
        req.session.userData = {email: req.body.email};
        console.log(req.session.userData);
        res.redirect('/');
        // passport.authenticate('local', {
        //     successRedirect: '/',
        //     failureRedirect: '/login',
        //     failureFlash: true
        // })(req, res, next);
    });
};
export const logout = (req, res) => {
    req.logout();
    const isAuthenticated = res.locals.isAuthenticated;
    res.json(isAuthenticated);
};

export const loginGet = async (req, res) => {
    console.log("login get")
    res.send(false);
};