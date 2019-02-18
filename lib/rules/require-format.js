"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const Util = require('./util');

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Require explicit specification of date format",
            category: "Best Practices",
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {

        /**
         * Moment.js assumes the second argument of the constructor to be a date format string.
         * @param node the node being parsed
         * @return {boolean} whether the node has 2 or more arguments
         */
        function hasFormat(node) {
            // noinspection JSAnnotator
            return node.arguments.length >= 2;
        }

        return {
            CallExpression: node => {
                if (Util.isTzCall(node)
                    && Util.isParse(node)
                    && !hasFormat(node)) {
                    context.report({
                        node,
                        message: "Always specify the format of the date-time string, so moment does not have to guess the format."
                    });
                }
            }
        }
    }
};