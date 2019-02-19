### require-timezone

Require a time zone argument to calls to `moment.tz` 

    // Good
    moment.tz('America/Chicago');
    moment.tz(aTimeZone);
    moment.tz(zone);
    moment.tz(tz);
     
    // Avoid
    moment.tz(aString, 'MM/DD/YYYY');
    
[Moment.js Documentation](https://momentjs.com/timezone/docs/#/using-timezones/)
