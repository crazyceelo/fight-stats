'use strict';

module.exports = (express,passport,db,bcrypt,request,io)=>{
    const router = express.Router();
    const auth = require('./../config/passport/passport.js')(passport,db);

    return router;
};