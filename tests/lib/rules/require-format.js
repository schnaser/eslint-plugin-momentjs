"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

let rule = require("../../../lib/rules/require-format"),

    RuleTester = require("eslint").RuleTester;

const MESSAGE = "Always specify the format of the date-time string, so moment does not have to guess the format.";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

let ruleTester = new RuleTester();
ruleTester.run("require-format", rule, {

    valid: [
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', true, MY_TIME_ZONE);"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY', true);"
        },
        {
            code: "moment.tz('01/12/2018', 'MM/DD/YYYY');"
        },
        {
            code: "moment.tz('01/12/2018', DATE_FORMAT);"
        },
        {
            code: "moment('01/12/2018', 'MM/DD/YYYY', true);"
        },
        {
            code: "moment('01/12/2018', 'MM/DD/YYYY');"
        },
        {
            code: "moment('01/12/2018', DATE_FORMAT);"
        },

        // Constructing "now"
        {
            code: "moment.tz(MY_TIME_ZONE);"
        },
        {
            code: "moment.tz(thing.call().thing.call().timezone);"
        },
        {
            code: "moment.tz(thing.call().timezone.call().thing);"
        },
        {
            code: "moment.tz(timezone);"
        },
        {
            code: "moment.tz(timeZone);"
        },
        {
            code: "moment.tz(tz);"
        },
        {
            code: "moment.tz(TZ);"
        },
        {
            code: "moment.tz(zone);"
        },
        {
            code: "moment.tz(getTimeZone());"
        },
        {
            code: "moment.tz(SomeObject.getTimeZone());"
        },
        {
            code: "moment.tz('myString', SomeObject.getTimeZone());"
        },
        {
            code: "moment.tz('myString', 'myOtherString', SomeObject.getTimeZone());"
        },
        {
            code: "moment.tz(SomeObject.getTimeZoneForUser());"
        }
    ],

    invalid: [
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
            code: "moment.tz(foo);",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment.tz(foo());",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment('01/12/2018');",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment(foo);",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment(foo());",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        },
        {
            code: "moment.tz(a.b().c().d.e.f().g);",
            errors: [
                {
                    message: MESSAGE,
                    type: "CallExpression"
                }
            ]
        }
    ]
});
