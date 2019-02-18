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
            recommended: false,
            url: "https://confluence.pointclickcare.com/confluence/display/HC/Conventions%3A+Dates+and+Times#Conventions:DatesandTimes-MomentJS"
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