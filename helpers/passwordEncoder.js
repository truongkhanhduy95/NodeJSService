// bcrypt = require('bcrypt');
var crypto = require('crypto');

var salt = "Palomino";

exports.encodePassword = function(password){
    var mergePass = password + salt;
    return crypto.createHash('md5').update(mergePass).digest('hex');
}
    
exports.comparePassword = function(plainPass, hashword) {
    var encodePass = plainPass + salt;
    encodePass = crypto.createHash('md5').update(encodePass).digest('hex');
    return encodePass == hashword;
}
