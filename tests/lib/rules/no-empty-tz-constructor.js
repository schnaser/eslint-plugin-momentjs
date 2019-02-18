"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

let rule = require("../../../lib/rules/no-empty-tz-constructor"),

    RuleTester = require("eslint").RuleTester;

const MESSAGE = "When creating new moment.tz instances, be sure to provide a time zone";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

let ruleTester = new RuleTester();
ruleTester.run("no-empty-tz-constructor", rule, {

    valid: [
        {
            code: "moment.tz(input)"
        },
        {
            code: "moment.tz(USER_TIME_ZONE, input)"
        },
        {
            code: "something()"
        }
    ],

    invalid: [
        {
            code: "moment.tz()",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        }
    ]
});
