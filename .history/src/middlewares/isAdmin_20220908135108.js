function isAdmin (req, res, next){
    if(req.body.isAdmin){
        next();
    }else{
        res.status(403).send('Sorry but you are not admin');
    }
}

module.exports = isAdmin;