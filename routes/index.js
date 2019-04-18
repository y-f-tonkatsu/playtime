const _ = require('lodash');

const express = require('express');
const router = express.Router();

const fs = require("fs");
const path = require("path");
const url = require('url');

var worksJson;

var respond = function (req, res, next, id) {

    if (!worksJson) {
        worksJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/works/works.json'), 'utf8'));
    }

    let stage;

    let base = '';
    let title, keyowords, description, ogUrl, thumb;

    let index = false;
    if (!stage) {
        title = 'Y.F.T のプレイタイム'
        description = '山田 F とんかつの個人的な楽しみのためのサイトです。';
        ogUrl = base;
        thumb = base + "works/absphoto/000_maru.jpg";
        index = true;
        stage = worksJson[0];
        id = 0;
        current = "";
    } else {
        title = stage.title;
        description = stage.description;
        ogUrl = current;
        thumb = base + "works" + stage.path;
    }


    res.render('index', {
        og_title: title,
        og_description: description,
        og_url: ogUrl,
        og_thumb: thumb,
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

router.get('/:id/', function (req, res, next) {
    var id = parseInt(req.params["id"]);
    respond(req, res, next, id);
});


module.exports = router;
