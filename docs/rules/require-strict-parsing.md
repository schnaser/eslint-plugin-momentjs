### require-strict-parsing

Prefer strict format check over loose format check.

    // Good
    moment.tz('01/12/2018', 'MM/DD/YYYY', true, 'America/Chicago');
     
    // Avoid
    moment.tz('This has date 01/12/2018', 'MM/DD/YYYY', 'America/Chicago');
    
[Moment.js Documentation](https://momentjs.com/guides/#/parsing/strict-mode/)
