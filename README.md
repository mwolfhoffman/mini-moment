# mini-moment
A simple and lightweight date and time formatting tool for JavaScript.

***Install***

`npm install -save mini-moment`

or

`yarn add mini-moment`

Then 

`var miniMoment = Require('mini-moment');`

or

`import miniMoment from 'mini-moment''`






***Convert to local datetime***

var local = miniMoment.convertToLocal(data);


***Elapsed Times***

var elapsed = miniMoment.timeago(data);



***Format Date (MM/DD/YYYY)***

var date = miniMoment.formatDate(data);



***Format Time (HH:MM:SS:ms)***

var time = miniMoment.formatTime(data);


