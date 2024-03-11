var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Make An Array of Countries And Print its Original Order
var countriesToVisit = ['China', 'Denmark', 'Bangladash', 'Africa'];
console.log('Original Order :', countriesToVisit);
//Print An Array IN Alphabetical Order Without Modifying the Actual Array
console.log('Alphabetical Order :', __spreadArray([], countriesToVisit, true).sort());
//Show That the  Array is Still in its Original Order
console.log('Still In Original Order :', countriesToVisit);
//Print An Array In Reversed Order Without Modifying the Actual Array
console.log('Reversed Order :', __spreadArray([], countriesToVisit, true).reverse());
//Show That the  Array is Still in its Original Order
console.log('Still In Original Order :', countriesToVisit);
//Change the Original Array In Reversed Order
console.log('Original Array Reversed Order :', countriesToVisit.reverse());
//Print The Array to show that its Back to its Original Order
console.log('Original Array Reversed Order :', countriesToVisit.reverse());
//Print An Original Array in Alphabetica Order
console.log('Original Array in Alphabetical Order :', countriesToVisit.sort());
//Change the agian Original Array In Reversed Order
console.log('Original Array Reversed Order Again :', countriesToVisit.reverse());
