var Crawler = require("simplecrawler");

var crawler = Crawler("https://etherscan.io/txsPending/")
    .on("fetchcomplete", function () {
        console.log("Fetched a resource!")
    });

crawler.interval = 7000; // Ten secondss

crawler.respectRobotsTxt=false

crawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
    console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
    console.log("It was a resource of type %s", response.headers['content-type']);
});

crawler.start();