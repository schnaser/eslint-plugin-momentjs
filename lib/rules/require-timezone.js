"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const Util = require('./util');

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Require time zone argument",
            category: "Best Practices",
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create(context) {

        return {
            CallExpression: node => {
                if (Util.isTzCall(node)) {

                    // noinspection JSAnnotator
                    const args = node.arguments;

                    if (args.length === 0 || !Util.containsTimeZone(args[args.length-1])) {
                        context.report({
                            node,
                            message: "Time zone argument is required."
                        });
                    }
                }
            }
        }
    }
};