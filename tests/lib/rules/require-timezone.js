"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

let rule = require("../../../lib/rules/require-timezone"),

    RuleTester = require("eslint").RuleTester;

const MESSAGE = "Time zone argument is required.";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

let ruleTester = new RuleTester();

ruleTester.run("require-timezone", rule, {

    valid: [
        {
            code: "moment();"
        },
        {
            code: "moment.tz(zone);"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', true, MY_TIME_ZONE);"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', zone);"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', a.zone);"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', a.zone());"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', a.b.zone);"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', a.b.zone());"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', a.b.zone.c);"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', a.b.zone().c);"
        },
        {
            code: "moment.tz(aDateStringVariable, aFormatVariable, tz);"
        },
        {
            code: "moment.tz(aDateStringVariable, timezone);"
        },
        {
            code: "moment.tz(aDateStringVariable, 'America/Chicago');"
        },
        {
            code: "something()"
        },
        {
            code: "something.else()"
        },
        {
            code: "something.tz()"
        },
        {
            code: "something.utc()"
        }
    ],

    invalid: [
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY');",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment.tz('01/12/2018');",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment.tz();",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', false);",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', true, 'NotALegit/Timezone');",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', true);",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', 'aString');",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', someVariable);",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        }
    ]
});
