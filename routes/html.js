'use strict';

module.exports = (express,passport,db,path,request,cheerio)=>{
    const router = express.Router();
    const auth = require('./../config/passport/passport.js')(passport,db);

    router.route('/')
        .get((req,res,next)=>{
            res.sendFile(path.join(__dirname,'../public/index.html'));
        });
    
    router.route('/scrape')
        .get((req,res,next)=>{
            var upcomingEvents = "http://fightmetric.com/statistics/events/upcoming";
            request(upcomingEvents, function(error, response, html){
                var $ = cheerio.load(html);
                // get table row name of the next event only
                let nextEvent = $("tbody tr td i").children("a").first().text();
                var hrefEvent = $("tbody tr td i").children("a").first().attr("href");
                console.log(nextEvent);
                console.log(hrefEvent);
        
               request(hrefEvent, function(error, response, html){
                    var $ = cheerio.load(html);
                    var matchup1 = $("tbody tr td p").children("a").first().text();
                    console.log(matchup1);
                    console.log(nextEvent);
                })

            });
        });

    return router;
};