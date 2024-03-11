var guestList = ['Haider', 'Saleem', 'Rabia'];
// making a variable for those guest who cant Come
var dontCome = guestList[2];
//Print the name of guest Who Dont Come
console.log(dontCome, 'Is Not Coming At Dinner');
//splice Is a array function For Remove Value From Array
guestList.splice(2, 2, 'Sadia');
// Massage Print For Bigger Table
console.log('Good News ! We Have Found A Bigger Table For Dinner\n');
//unshift is a Array function  : for Add a Value at Starting Index of Array
guestList.unshift('Ali');
//Push is Array Function : For Add A Value At Ending index Of Array
guestList.push('Zainab');
// Get A Middle Index of our Guest List Array 
var middleIndex = Math.floor(guestList.length / 2);
// Add a Value To Middle Index of Array 
guestList.splice(middleIndex, 0, 'Kashif');
// Print Massage Of Updated List Of Guest
console.log('Update List Of Our Guests\n');
//Sending Invitation Massgae To Our Guests One By One With There Name
guestList.forEach(function (oneGuest) { return console.log("Salam , ".concat(oneGuest, ", Would You Like To Dinner With Me ?")); });
