var axios = require("axios");
var cheerio = require("cheerio");

console.log(
  "\n*************************\n" +
    "\nscarping the reddit\n" +
    "\n**********************\n"
);

axios.get("https://old.reddit.com/r/webdev/").then(function(response) {
  var $ = cheerio.load(response.data);

  var results = [];

  $("p.title").each(function(i, element) {
    var title = $(element).text();
    // console.log(title);
    var link = $(element)
      .children()
      .attr("href");
    // console.log(link);

    results.push({
      title: title,
      link: link
    });
  });
  console.log(results);
});
