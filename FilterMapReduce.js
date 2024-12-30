var arr1 = [10,11,12,13,14,15]
var newArr = arr1.filter(function(ele){
  if(ele%2 === 0) {
    return ele;
  }
})

console.log('Original Array:',arr1);
console.log('Even array: ',newArr);

// Find the leapyear 

function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4 and not divisible by 100,
    // unless it is also divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// List of years to check
const years = [1996, 1997, 1994, 2000];

// Check and display whether each year is a leap year
years.forEach(year => {
    if (isLeapYear(year)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
});

// array.map(function){})
var array = [1,2,3,4,5,6]
var sq_arr = array.map(function(ele){
return ele * ele;
})

console.log('Original Array:',array);
console.log('Square Array:',sq_arr);