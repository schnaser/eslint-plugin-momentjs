# no-empty-tz-constructor

Do not use the `moment.tz()` constructor. Always specify the time zone.

    // Good
    moment.tz('America/Chicago');
     
    // Avoid
    moment.tz();
