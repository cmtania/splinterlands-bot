// Requiring fs module
//const fs = require("fs");// comment this to test also

//var mainHistory = fs.readFileSync("history.json");// comment this to test also
// var mainHistoryObject = JSON.parse(mainHistory);// comment this to test also

 //let finalHistory = removeDuplicates(mainHistory,'battle_queue_id')

 function removeDuplicate(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}
//comment out to test
// console.log(mainHistory.length,'before');
// console.log(finalHistory.length,'after');

module.exports = {
    removeDuplicate : removeDuplicate
}