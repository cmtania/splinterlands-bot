const date = require('date-and-time');
const now = new Date();
date.format(now, 'MMDDYYYYHHmmss');
const pattern = date.compile('MMDDYYYY-HHmmss');
var dateString = date.format(now, pattern);

var jsonConcat = require ("json-concat");

jsonConcat({
  src: './playerdata',
  dest: "./history/mergedPlayerHistory" + dateString + ".json"
}, function (json) {
  console.log(json);
})
