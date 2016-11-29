// types are these? Write your answer in a comment beside it.
//
// 1;
// "cat";     string
// true;      boolean
// [];        array
// {};        switch
// 1.1;       number
// undefined; variable declared, but not assigned to anything.
//
// //Section 2
//
// // what is the truthy/falsiness values of the following
// // write your answer in a comment beside it
// // you can use an if to test this...
// 1; //true
// "cat";  truthy
// true;   truthy
// NaN;    falsy
// [];     truthy
// {};     truthy
// undefined; falsy
// "";       truthy
// 0;       falsy


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
//3.2 Assign a variable that is a string
//3.3 Assign a variable that is a boolean
//3.4 Assign a variable that is an object

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

// if(its){
//   console.log("hello");
// }
// else{
//   console.log("bye");
// }



// //Section 5
// var animals = ["raccoon","hedgehog","mouse","gerbil"];
//
// var first = animals.shift();
// var last = animals.pop()
// var sizeOfArray = animals.length;
// animals.push("rabbit");
// animals.unshift("donkey");
// animals.indexOf("hedgehog");
//5.1. Assign the first element to a variable
//5.2. Assign the last element to a variable
//5.3. Assign the length of an array to a variable
//5.4. Add an item to the end of the array
//5.5. Add an item to the start of the array
//5.6. Assign the index of hedgehog to a variable

//Section 6

// var vegetables = ["potatoes", "beans", "sprouts", "brocolli", "carrots"];
//
// function printVeggies(array){
//   x = 0
//   while (x < array.length){
//   console.log(array[x]);
//   x++;
//  }
// }

  // printVeggies(vegetables);

  // function printVeggiesDifferently(array){
  //   for(var i = 0; i < array.length; i++){
  //     console.log(array[i])
  //   }
  // }

  // printVeggiesDifferently(vegetables);

//   function printVeggiesWithIn(array){
//     for(var veg in array){
//       console.log(array[veg]);
//     }
//   }
//
// printVeggiesWithIn(vegetables);


//6.1 Create an array of 5 vegetables
//6.2 Loop over the array and write to the console using a "while"
//6.3 Loop again using a "for" with a counter
//6.4 Loop again using a "for in"

// Section 7
var accounts = [
 { name: 'jay',
   amount: 125.50,
   type: 'personal'
 },
 { name: 'val',
   amount: 55125.10,
   type: 'business'
 },
 { name: 'marc',
   amount: 400.00,
   type: 'personal'
 },
 { name: 'keith',
   amount: 220.25,
   type: 'business'
 },
 { name: 'rick',
   amount: 1.00,
   type: 'personal'
 },
];

function totalCash(array){
  var total = 0;
  for(var i = 0; i < array.length; i++){
    total += array[i]['amount'];
  }
  return total;
}

totalCash(accounts);


function largestAmount(array){
  var value = array[0]['amount'];
  for(var x of array){
    if (x['amount'] > value){
      value = x['amount'];
    }
  }
  return console.log(value);
}
//
largestAmount(accounts);



function smallestBalance(array){
  var min = array[0];
  for(i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
    }
  }
  return console.log(min["type"]);
}

smallestBalance(accounts);

function getAverage(array){
  var total = totalCash(array);
  var average = total / array.length;
    return console.log(average);
}

getAverage(accounts);


function findAccountAmountByName(array, name){
  for(var account of array){
    if (account['name'] === name){
      console.log(account['amount']);
    }
  }
}

findAccountAmountByName(accounts,'marc');

function holderOfBiggestAmount(array){
  var largest = array[0]['amount'];

  for(var i = 1; i < array.length; i++){
    if(array[i]['amount'] > largest ){
      largest = array[i];
    }
    return console.log(largest);
}

holderOfBiggestAmount(accounts);

function findHolderOfLargestAccount(array){

  array.sort(function(a,b){
    return a.amount > b.amount;
  });
  return console.log(array.pop()['name']);
}

findHolderOfLargestAccount(accounts);

function totalAmountInBusinessAccounts(array, type){
  var total =0;
  for(var account of array){
    if (account['type'] === type){
      total += account.amount;
    }
  }
  return console.log(total);
}

totalAmountInBusinessAccounts(accounts, 'business');

function largestPersonalAccountHolder(array, type){
  var accounts = [];
  for(var account of array){
    if(account.type === type){
      accounts.push(account);
    }
  }
  accounts.sort(function(a,b){
    return a.amount < b.amount;
  });
  return console.log(accounts[0]['name']);
}

largestPersonalAccountHolder(accounts, 'personal');

//7.1 Calculate the total cash in accounts
//7.2 Find the amount of money in the account with the largest balance
//7.3 Find the name of the account with the smallest balance
//7.4 Calculate the average bank account value
//7.5 Find the value of marcs bank account
//7.6 Find the holder of the largest bank account
//7.7 Calculate the total cash in business accounts
//7.8 Find the largest personal account owner


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
