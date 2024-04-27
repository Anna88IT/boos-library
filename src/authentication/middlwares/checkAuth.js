export const checkAuthentication = (req, res, next) => {
    if(!req.isAuthenticated()){
        res.redirect("/login");
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