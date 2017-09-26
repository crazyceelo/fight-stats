'use strict';

module.exports = (express,passport,db,path)=>{
    const router = express.Router();
    const auth = require('./../config/passport/passport.js')(passport,db);

    router.route('/')
        .get((req,res,next)=>{
            res.sendFile(path.join(__dirname,'../public/index.html'));
        });

    return router;
};