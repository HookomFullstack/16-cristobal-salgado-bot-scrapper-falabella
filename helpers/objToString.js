
function objToString (obj) {
    var str = '';
    for (var p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += p + ': ' + obj[p] + '\n';
        }
    }
    return str;
}

module.exports = {
    objToString
}