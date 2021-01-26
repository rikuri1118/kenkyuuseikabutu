const express = require("express");
const app = express();
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('48baa567cd314a4687772536378919e0');

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.get("/data", (req, res) => {
  newsapi.v2.topHeadlines({
    country: 'jp',
    q: 'コロナ',
    pageSize: 40
  }).then(news => res.send(news));
});

app.listen(3000, () => console.log('listening on port ' + 3000));