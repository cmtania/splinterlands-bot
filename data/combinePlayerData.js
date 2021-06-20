const fs = require('fs');
const removeDup = require('./removeDuplicateBattle.js')
const indxKey = 'battle_queue_id_1'
const playerName = 'banshee1975'//insert the name of player here

 const mainDirPath = "mainPlayerData.json"//for testing here
 const newPlayerDataDirPath = "playerdata/"//for testing here

function combinePlayerData(playerName){
    var mainPlayerData = fs.readFileSync(mainDirPath);
    var newPlayerData = fs.readFileSync(newPlayerDataDirPath + playerName + '_Raw.json');

    //Convert to json object
    var mainPlayerDataObj = JSON.parse(mainPlayerData);
    var newPlayerDataObj = JSON.parse(newPlayerData);

     console.log(mainPlayerDataObj.length,'Main file length before');
     console.log(newPlayerDataObj.length,'Player data length for ' + playerName);
    
    var finalPlayerData = [...mainPlayerDataObj, ...newPlayerDataObj];//adding

    //call the removeDuplicate function
    var filterPlayerDataJson = removeDup.removeDuplicate(finalPlayerData,indxKey);
    console.log(filterPlayerDataJson.length,'Final length for mainPlayerData.json');//checking the number of battles retrieved after removing duplicates
    
    //Writing to our main JSON file for the battle history
    // fs.writeFile(mainDirPath, JSON.stringify(filterPlayerDataJson), (err) => {
    //     // Error checking
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("Successfuly completed.")
    //     }
    //   });
}

combinePlayerData("abfus");//insert player name here to test

module.exports = {
    combinePlayerData : combinePlayerData
}