# Moment.js style rules

### no-moment-constructor

When creating moment instances, use moment-timezone constructor over the moment only constructor.

    // Good
    moment.tz('2019-01-01', 'YYYY-MM-DD', true, 'America/Chicago');
     
    // Avoid
    moment('2019-01-01', 'YYYY-MM-DD', true); // no timezone info
    
[Moment.js Documentation](https://momentjs.com/timezone/docs/#/using-timezones/parsing-in-zone/)

### no-empty-tz-constructor

Do not use the `moment.tz()` constructor. Always specify the time zone.

    // Good
    moment.tz('America/Chicago');
     
    // Avoid
    moment.tz();

### require-format

Always specify the format of the date-time string, so moment does not have to guess the format.

    // Good
    moment.tz('01/12/2018', 'MM/DD/YYYY', true, 'America/Chicago');
     
    // Avoid
    moment.tz('01/12/2018', 'America/Chicago');


[Moment.js Documentation](https://momentjs.com/docs/#/parsing/string-format/)

### require-strict-parsing

Prefer strict format check over loose format check.

    // Good
    moment.tz('01/12/2018', 'MM/DD/YYYY', true, 'America/Chicago');
     
    // Avoid
    moment.tz('This has date 01/12/2018', 'MM/DD/YYYY', 'America/Chicago');
    
[Moment.js Documentation](https://momentjs.com/guides/#/parsing/strict-mode/)
