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

        function isFormat(node) {
            if (node.type === "Literal") {
                return typeof node.value === "string";
            }
            // Assume the node is a format
            return true;
        }

        /**
         * Moment.js assumes the second argument of the constructor to be a date format string.
         * @param node the node being parsed
         * @return {boolean} whether the node has a format argument
         */
        function hasFormat(node) {
            // noinspection JSAnnotator
            return node.arguments.length >= 2
                && isFormat(node.arguments[1]);
        }

        return {
            CallExpression: node => {
                if (Util.isParse(node)
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