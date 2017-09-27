'use strict';

module.exports = (express,passport,db,bcrypt,request,io)=>{
    const router = express.Router();
    const auth = require('./../config/passport/passport.js')(passport,db);

    router.route('/register')
        .get((req,res,next)=>{

        })

        .post((req,res,next)=>{

        })

        .put((req,res,next)=>{

        });

    return router;
};