const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const sizeOf = require('image-size');
const works = require('./public/works/works.json');
const Util = require('./src/pt-util');

addedWorks = _.map(works, function (work) {
    let imagePath = Util.getImagePathFromOuter(work);
    const dimen = sizeOf(imagePath);
    work.width = dimen.width;
    work.height = dimen.height;

    work.thumb = Util.getPosixThumbPath(work);
    const thumbPath = Util.getThumbPathFromOuter(work);

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

