var request = require("request");

// 1. JSON : 뉴스 데이터 파싱하기
request(
    "http://newsapi.org/v2/top-headlines?apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&country=kr&category=business", 
    function(error, response, body) {
        var parsedData = JSON.parse(body);
        var articles = parsedData.articles;

        for (var i = 0; i < articles.length; i++) {
            console.log(i + 1, articles[i].title);
        }
    }
);

// 2. XML : 날씨 데이터 파싱하기
var parseString = require('xml2js').parseString;
var xml = request("http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109");

parseString(xml, function (err, result) {
    console.log(result);
});