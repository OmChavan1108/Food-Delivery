Made A React App to Study How to create a Dyanamic SPA using props

import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/swiggy", async (req, res) => {
const response = await fetch(
"https://foodfire.onrender.com/api/restaurants?lat=18.5204&lng=73.8567"
);
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=21001&catalog_qa=undefined&submitAction=ENTER

const json = await response.json();
res.json(json);
});

app.listen(3000, () => {
console.log("Backend running at http://localhost:3000");
});
