'use strict';

module.exports = (express,passport,db,bcrypt,request,io,mma)=>{
    const router = express.Router();
    const auth = require('./../config/passport/passport.js')(passport,db);

    router.route('/fighters/:fighter_name')
        .get((req,res,next)=>{
            let fighter_name = req.params.fighter_name;

            mma.fighter(fighter_name,(data)=>{
                console.log(data);
                res.send(data);
            });
        })

        .post((req,res,next)=>{

        })

        .put((req,res,next)=>{

        });

    return router;
};