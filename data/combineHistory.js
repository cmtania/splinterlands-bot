const fs = require('fs');
const removeDup = require('./removeDuplicateBattle.js')
const indexKey = 'battle_queue_id'
const mainDirPath = "./data/mainHistory.json"//when calling from battlesGetData.js
const newFileHistoryDirPath = "./data/history/"//when calling from battlesGetData.js
 //const mainDirPath = "mainHistory.json"//for testing here
 //const newFileHistoryDirPath = "history/"//for testing here


function combineHistory(fileName){
    var mainHistoryDb = fs.readFileSync(mainDirPath);
    var newHistory = fs.readFileSync(newFileHistoryDirPath + fileName);

    //Convert to json object
    var mainHistoryDbObj = JSON.parse(mainHistoryDb);
    var newHistoryObj = JSON.parse(newHistory);

     console.log(mainHistoryDbObj.length,'Main file length before');
     console.log(newHistoryObj.length,'latest history length');
    
    var finalHistory = [...mainHistoryDbObj, ...newHistoryObj];//adding

    //call the removeDuplicate function
    var filterHistoryJson = removeDup.removeDuplicate(finalHistory,indexKey);
    console.log(filterHistoryJson.length,'Final length for mainHistory.json');//checking the number of battles retrieved after removing duplicates
    
    // Writing to our main JSON file for the battle history
    fs.writeFile(mainDirPath, JSON.stringify(filterHistoryJson), (err) => {
        // Error checking
        if (err) {
            console.log(err);
        } else {
            console.log("Successfuly completed.")
        }
      });
}

//combineHistory("history06192021-234731.json");//for testing

module.exports = {
    combineHistory : combineHistory
}