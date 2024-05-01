export const checkAuthentication = (req, res, next) => {
    console.log("not auth")
    if(!req.isAuthenticated()){
        console.log("not auth if")
        res.redirect("/auth/login");
    }
    next();
};
export const checknotAuthentication = (req, res, next) => {
    console.log("check auth");
    if(req.isAuthenticated()){
        console.log("check auth if");
        res.redirect("/");
    }
    next();
}