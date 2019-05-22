const path = require('path');
const _ = require('lodash');

const Util = {
    'getImage': (works, id) => {
        return _.find(works, (currentWork) => {
            return currentWork.id.toString() === id.toString();
        });
    },
    'getImagePath': (work) => {
        return path.join('works/', work.path);
    },
    'getImagePathFromOuter': (work) => {
        return path.join('public', Util.getImagePath(work));
    },
    'getThumbPath': (work) => {
        const imagePath = Util.getImagePath(work);
        let dir = path.dirname(imagePath);
        let ext = path.extname(imagePath);
        let name = path.basename(imagePath, ext);
        return path.join(dir, name + '-thumb' + ext);
    },
    'getThumbPathFromOuter': (work) => {
        return path.join('public', Util.getThumbPath(work));
    },
    'getPosixThumbPath': (work) => {
        return Util.getThumbPathFromOuter(work)
            .replace(/\\/g, '/')
            .replace('public/works/', '');
    }
}


module.exports = Util;