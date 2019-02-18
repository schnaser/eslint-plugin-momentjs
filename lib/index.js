"use strict";

module.exports = {
    rules: {
        "no-empty-tz-constructor": require("./rules/no-empty-tz-constructor"),
        "no-moment-constructor": require("./rules/no-moment-constructor"),
        "require-strict-parsing": require("./rules/require-strict-parsing"),
        "require-format": require("./rules/require-format")
    }
};