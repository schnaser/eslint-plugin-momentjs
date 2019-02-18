# no-moment-constructor

When creating moment instances, use moment-timezone constructor over the moment only constructor.

    // Good
    moment.tz('2019-01-01', 'YYYY-MM-DD', true, 'America/Chicago');
     
    // Avoid
    moment('2019-01-01', 'YYYY-MM-DD', true); // no timezone info
    
[Moment.js Documentation](https://momentjs.com/timezone/docs/#/using-timezones/parsing-in-zone/)
