export const checkAuthentication = (req, res, next) => {
    console.log("not auth");
    console.log(req.user, "user in check")
    if(req.isAuthenticated()){
        console.log("not auth if")
        res.locals.isAuthenticated = true;
    } else {
        console.log("not auth else")
        res.locals.isAuthenticated = false;
    }
    next();
};
export const checknotAuthentication = (req, res, next) => {
    console.log("check auth");
    console.log(req.user, "user in check")
    if(!req.isAuthenticated()){
        console.log("check auth if");
        res.send("authenticated");
    }
    next();
}