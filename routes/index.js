const _ = require('lodash');

const express = require('express');
const router = express.Router();

const fs = require("fs");
const path = require("path");
const url = require('url');

var worksJson;

var respond = function (req, res, next, id) {

    if (!worksJson) {
        worksJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/works/works-size-added.json'), 'utf8'));
    }

    let stage;
    let base = '';
    let title, keyowords, description, ogUrl, thumb;

    base = url.format({
        protocol: req.protocol,
        host: req.get('host')
    });
    base = "http://knights.ton-katsu.net/playtime/";

    var current = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
    });
    current = "http://knights.ton-katsu.net/playtime/:" + id ;

    _.each(worksJson, function (work) {
        if (work.id == id) {
            stage = work;
        }
    });


    let index = false;
    if (!stage) {
        title = "YFT's PlayTime"
        description = '山田 F とんかつの個人的な楽しみのためのサイトです。';
        ogUrl = base;
        thumb = path.join(base, "works/absphoto/000_maru.jpg");
        index = true;
        stage = worksJson[0];
        id = 0;
        current = "";
    } else {
        title = stage.title;
        description = stage.description;
        ogUrl = current;
        thumb = path.join(base, "works", stage.path);
    }


    res.render('index', {
        og_title: title,
        og_description: description,
        og_url: ogUrl.replace('playtime', ':3004'),
        og_thumb: thumb,
        og_thumb_w: stage.width,
        og_thumb_h: stage.height,
        baseUrl: base,
        currentUrl: current,
        worksUrl: base + "/works",
        works: worksJson,
        stage: stage,
        index: index,
        init: id,
        dirname: __dirname
    });

};

router.get('/', function (req, res, next) {
    respond(req, res, next, 0);
});

router.get('/::id', function (req, res, next) {
    console.log(req.params);
    var id = parseInt(req.params["id"]);
    respond(req, res, next, id);
});


module.exports = router;
