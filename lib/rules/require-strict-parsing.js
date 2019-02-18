"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const Util = require('./util');

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Require strict format parsing",
            category: "Best Practices",
            recommended: false,
            url: "https://confluence.pointclickcare.com/confluence/display/HC/Conventions%3A+Dates+and+Times#Conventions:DatesandTimes-MomentJS"
        },
        fixable: null,
        schema: []
    },

    create(context) {

        return {
            CallExpression: node => {
                if (Util.isTzCall(node)
                    && Util.isParse(node)) {

                    // noinspection JSAnnotator
                    const args = node.arguments;

                    // Only care about strict parsing if we're actually using .tz for parsing.
                    // Any other problems with args (e.g. not specifying a format string)
                    // will be caught by other rules
                    if (args.length >= 2 && (args[2] || {}).value !== true) {
                        context.report({
                            node,
                            message: "Always prefer strict format check over loose format check."
                        });
                    }
                }
            }
        }
    }
};