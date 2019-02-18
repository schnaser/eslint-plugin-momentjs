# require-format

Always specify the format of the date-time string, so moment does not have to guess the format.

    // Good
    moment.tz('01/12/2018', 'MM/DD/YYYY', true, 'America/Chicago');
     
    // Avoid
    moment.tz('01/12/2018', 'America/Chicago');


[Moment.js Documentation](https://momentjs.com/docs/#/parsing/string-format/)
