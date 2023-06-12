/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const uniqueCateg = [];
  transactions.forEach(obj => {
   if(!uniqueCateg.includes(obj.category))
   {
    uniqueCateg.push(obj.category);
   }
  });
  const expenses = [];
  uniqueCateg.forEach(categ => {
    let total = 0;
    transactions.forEach(obj => {
      if(categ === obj.category)
      {
        total = total + obj.price;
      }
    });
    expenses.push({ "category" : categ, "totalSpent" : total});
  });
  console.log(expenses)
  return expenses;
}
// const trans = [
//   { itemName: "Item 1", category: "Electronics", price: 100, timestamp: "2022-01-01" },
//   { itemName: "Item 2", category: "Groceries", price: 50, timestamp: "2022-01-02" },
//   { itemName: "Item 3", category: "Electronics", price: 200, timestamp: "2022-01-03" },
//   { itemName: "Item 4", category: "Clothing", price: 80, timestamp: "2022-01-04" },
//   { itemName: "Item 5", category: "Groceries", price: 30, timestamp: "2022-01-05" }
// ]

// calculateTotalSpentByCategory(trans);

module.exports = calculateTotalSpentByCategory;
