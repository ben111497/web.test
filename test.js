// Import express module
const express = require("express");

// Initialize the app
const app = express();

// Set up the body-parser middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Array to store the items in the To-Buy list
let toBuyList = [];

// Endpoint to get all items in the To-Buy list
app.get("/to-buy", (req, res) => {
  res.json(toBuyList);
});

// Endpoint to add an item to the To-Buy list
app.post("/to-buy", (req, res) => {
  const item = req.body.item;
  toBuyList.push(item);
  res.json({ message: "Item added to the To-Buy list" });
});

// Endpoint to remove an item from the To-Buy list
app.delete("/to-buy/:item", (req, res) => {
  const item = req.params.item;
  toBuyList = toBuyList.filter((listItem) => listItem !== item);
  res.json({ message: "Item removed from the To-Buy list" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`To-Buy list app listening on port ${port}`);
});
