const fs = require('fs');

// Storing the JSON format data in myObject
var history1 = fs.readFileSync("./history.json");
var history2 = fs.readFileSync("./historyHigh1.json");

//Convert to json object
var history1Object = JSON.parse(history1);
var history2Object = JSON.parse(history2);

var finalHistory = [...history1Object, ...history2Object];//

// Writing to our JSON file
var finalHistoryObject = JSON.stringify(finalHistory);

fs.writeFile("mainHistory.json", finalHistoryObject, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
