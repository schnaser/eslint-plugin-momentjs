"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

let rule = require("../../../lib/rules/no-moment-constructor"),

    RuleTester = require("eslint").RuleTester;

const MESSAGE = "When creating moment instances, use moment-timezone or moment-utc constructor (moment.tz / moment.utc) over the moment only constructor.";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

let ruleTester = new RuleTester();
ruleTester.run("no-moment-constructor", rule, {

    valid: [
        {
            code: "moment.tz(input)"
        },
        {
            code: "moment.tz(USER_TIME_ZONE, input)"
        },
        {
            code: "moment.utc()"
        },
        {
            code: "something()"
        }
    ],

    invalid: [
        {
            code: "moment()",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment('abcd')",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment('abcd', 1234)",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        }
    ]
});
