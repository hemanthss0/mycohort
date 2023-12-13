/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr=[]
  let flag=Array(transactions.length).fill(0);
  for(let i=0;i<transactions.length;i++){
    if(flag[i]==1)continue;
    let cat=transactions[i].category;
    let price=transactions[i].price;

    let check=1;
    for(let j=0;j<arr.length;j++){
      if(cat==arr[j].category)
      {
        arr[j].totalSpent+=price;
        flag[i]=1
        check=0;
      }

    }
    if(check==1)
    arr.push({category:cat,totalSpent:price})

  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
