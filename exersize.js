// function findmax(array)
//    {
// var max = 0;
// var a = array.length;
// for (counter=0;counter<a;counter++)
// {
//     if (array[counter] > max)
//     {
//         max = array[counter];
//     }
// }
// return max;
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

//
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

function totalAmountInBusinessAccounts(array){
  var total =0;
  for(var account of array){
    if (account['type'] === 'business'){
      total += account.amount;
    }
  }
  return console.log(total);
}

totalAmountInBusinessAccounts(accounts);


function findHolderOfLargestAccount(array){

  array.sort(function(a,b){
    return a.amount > b.amount;
  });
  return console.log(array.pop()['name']);
}


findHolderOfLargestAccount(accounts);


var mySelf = { name: "Pavlos",
                height: 1.99,
                favourite_food: "Pasta carbonara"
              };

function eat(person){
  var belly = person['favourite_food'];
  return console.log(belly);
}
