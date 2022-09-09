function isAdmin(req, res, next){
    if(req.body.isAdmin){
        next();
    }else{
        res.status(403).send('You dont have permission to access this resource !')
    }
}

exports.modules = isAdmin;