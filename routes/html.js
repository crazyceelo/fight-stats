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
                    var matchups = $("tbody tr td p a").text(); // gets the names and match up
                    var matchupsHref = $("tbody tr td p a").attr("href"); // gets the href of matchup
                    // var matchups = $("tbody tr td p").children("a").eq(2).text(); gets only matchup
                    // console.log(matchups);
                    // console.log(matchupsHref);
                })

            });
        });
    return router;
};