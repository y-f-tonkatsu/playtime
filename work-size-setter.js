const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const sizeOf = require('image-size');
const works = require('./public/works/works.json');

function getThumbPath(imagePath){
    let dir = path.dirname(imagePath);
    let ext = path.extname(imagePath);
    let name = path.basename(imagePath, ext);
    return path.join(dir, name + '-thumb' + ext);
}

function getPosixThumbPath(imagePath){
    return getThumbPath(imagePath).replace(/\\/g, '/').replace('public/works', '');
}

addedWorks = _.map(works, function (work) {
    let imagePath = path.join('public/works/', work.path);
    const dimen = sizeOf(imagePath);
    work.width = dimen.width;
    work.height = dimen.height;

    work.thumb = getPosixThumbPath(imagePath);
    const thumbPath = getThumbPath(imagePath);

    const thumbDimen = sizeOf(thumbPath);
    work.thumbWidth = thumbDimen.width;
    work.thumbHeight = thumbDimen.height;

    return work;
});


fs.writeFile('./public/works/works-size-added.json', JSON.stringify(addedWorks), 'utf8', function (err) {
    if (err) {
        console.log(err);
    }
});

