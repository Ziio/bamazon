var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    runStore();
  });

  function runStore() {
    // connection.query("select * from products", function(err, res) {
    //   if (err) throw err;
    //   console.log(res);
    inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Make a purchase.",
        "Post an item.",
      ]
    })

    .then(function(answer) {
        switch (answer.action) {
        case "Make a purchase.":
          bidItem();
          break;

        case "Post an item.":
          postItem();
          break;
        }
      });
  }

  function bidItem() {
    connection.query("select * from products", function(err, res) {
    if (err) throw err;
    // console.log(res);
    for (var i = 0; i < res.length; i++){
      console.log("ID: " + res[i].id + " | Item: " + res[i].item + " | Department: " + res[i].department + " | Price: " + res[i].price + " | Stock: " + res[i].stock + " |" );
    }
      console.log("------------------------------------------------------------------");


      inquirer.prompt([
        {
            name: "itemId",
            type: "input",
            message: "What is the ID of the product that you would like to buy??",
           
        },
        {
            name: "quantity",
            type: "input",
            message: "How many many would you like to have?"
        }
      ])


      .then(function(answer){
        var itemId = answer.itemId;
        var quantity = answer.quantity;
        var itemPrice = answer.itemId.price;


        if (answer.quantity <= 0) {
          console.log("Insufficient quantity!");
          runStore();
        }
        else{
          console.log("Item ID: |" + itemId + "| purchased. x" + quantity + " = total of: $" + itemPrice);
          connection.query (
            "UPDATE products SET stock = stock - ? WHERE id = ?",
            [quantity, itemId, itemPrice], function(err, res) {
              console.log("Purchase made.");
              runStore();
            }

          );
        }
      })
    });
  }

