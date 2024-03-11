// Array 
var friendsName = ['Salman', 'Hamza', 'Haider', 'Rehan'];
//print array 
console.log(friendsName);
//print array by list 
friendsName.forEach(function (friendName) { return console.log(friendName); });
//Ex 12 print Array with Personal Massage
friendsName.forEach(function (friendName) { return console.log("Hello ".concat(friendName, ",How Are You ?")); });
