// Copyright 2016 Andrew Engelbrecht
//
// This program is released under CC0
//
// https://creativecommons.org/publicdomain/zero/1.0/
//
//
// swirlnet.util - assorted utility functions for swirlnet

var clone, copy, isInt;

clone = require('clone');

copy = function (object) {

    "use strict";

    return clone(object, false);
};

isInt = function (number) {

    "use strict";

    return (typeof number === "number" && !isNaN(number) && number % 1 === 0);
};

module.exports.copy = copy;
module.exports.isInt = isInt;

