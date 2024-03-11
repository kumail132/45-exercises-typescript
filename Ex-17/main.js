//Make A Guestlist Array
var guestList = ['Haider', 'Saleem', 'Rabia'];
// making a variable for those guest who cant Come
var dontCome = guestList[2];
//Print the name of guest Who Dont Come
console.log(dontCome, 'Is Not Coming At Dinner\n');
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
//Sending Invitation Massgae To Our Guests One By One With Their Name
guestList.forEach(function (oneGuest) { return console.log("Salam, ".concat(oneGuest, ", Would You Like To Dinner With Me \n")); });
// Inform that Only Two Guest can be Invited For Dinner
console.log('Unfortunately . the new Dinner Table Wont arrive On Time . So I can Only Invite Two Guest For Dinner With Me \n');
// While Loop Run Till Condition Is True
while (guestList.length > 2) {
    //Pop Function Remove Value From Array 
    var removeGuest = guestList.pop();
    console.log("Sorry ".concat(removeGuest, ", I cant Invite You For Dinner\n"));
}
//Sending Invitation To The Last Two Guest
console.log('Invitation To The Last 2 Guest For Dinner \n');
guestList.forEach(function (lastGuest) { return console.log("Luckly!, ".concat(lastGuest, ", You Are Still Invited For Dinner\n")); });
// Removing The Last Two Guest From The List 
guestList.pop();
guestList.pop();
//Print Array After Removing Last two Guest 
console.log('Empty List', guestList);
