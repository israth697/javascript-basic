// Tue Dec 05 2023 13:33:34 GMT+0600 (Bangladesh Standard Time)
// var d = new Date();
// 1701761614235 miliseconds passed since 1970
// Number(d) 
// Date("2017-06-23");                 // date declaration
// Date("2017");                       // is set to Jan 01
// Date("2017-06-23T12:00:00-09:45");  // date - time YYYY-MM-DDTHH:MM:SSZ
// Date("June 23 2017");               // long date format
// Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)");

var d = new Date();
a = d.getDay();     // getting the weekday

// getDate();          // day as a number (1-31)
// getDay();           // weekday as a number (0-6)
// getFullYear();      // four digit year (yyyy)
// getHours();         // hour (0-23)
// getMilliseconds();  // milliseconds (0-999)
// getMinutes();       // minutes (0-59)
// getMonth();         // month (0-11)
// getSeconds();       // seconds (0-59)
// getTime();          // milliseconds since 1970

console.log(d);