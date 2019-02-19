"use strict";

module.exports = {
    rules: {
        "no-moment-constructor": require("./rules/no-moment-constructor"),
        "require-strict-parsing": require("./rules/require-strict-parsing"),
        "require-format": require("./rules/require-format"),
        "require-timezone": require("./rules/require-timezone")
    }
};