"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallows use of moment() constructor",
            category: "Best Practices",
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create(context) {

        return {
            CallExpression: node => {
                if (node.callee.name === 'moment') {
                    context.report({
                        node,
                        message: "When creating moment instances, use moment-timezone constructor (moment.tz) over the moment only constructor."
                    });
                }
            }
        };
    }
};