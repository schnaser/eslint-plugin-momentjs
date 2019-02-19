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
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create(context) {

        return {
            CallExpression: node => {
                if (Util.isParse(node)) {

                    // noinspection JSAnnotator
                    let args = node.arguments;

                    // last arg is assumed to be a time zone specification. Ignore it.
                    if (Util.isTzCall(node)) {
                        args = args.slice(0, -1);
                    }

                    if (args.length === 0 || (args[args.length-1] || {}).value !== true) {
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