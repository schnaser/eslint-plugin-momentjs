"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const Util = require('./util');

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallows use of empty moment.tz() constructor",
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
                // noinspection JSAnnotator
                if (Util.isTzCall(node)
                    && node.arguments.length === 0) {
                    context.report({
                        node,
                        message: "When creating new moment.tz instances, be sure to provide a time zone"
                    });
                }
            }
        };
    }
};