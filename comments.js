// Create web server
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var url = require('url');
var comments = [];

http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var path = url_parts.pathname;

    if (path === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<!DOCTYPE html>\n' +
            '<html>\n' +
            '<head>\n' +
            '<title>Comments</title>\n' +
            '</head>\n' +
            '<body>\n' +
            '<h1>Comments</h1>\n' +
            '<form action="/comment" method="post">\n' +
            '<textarea name="comment"></textarea>\n' +
            '<input type="submit" value="Submit">\n' +
            '</form>\n' +
            '<ul>\n');

        comments.forEach(function (comment) {
            res.write('<li>' + comment + '</li>\n');
        });

        res.write('</ul>\n' +
            '</body>\n' +
            '</html>');
        res.end();
    } else if (path === '/comment') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var params = qs.parse(body);
            comments.push(params.comment