import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/swiggy", async (req, res) => {
  const response = await fetch(
    "https://foodfire.onrender.com/api/restaurants?lat=18.5204&lng=73.8567"
  );

  const json = await response.json();
  res.json(json);
});

app.listen(3000, () => {
  console.log("Backend running at http://localhost:3000");
});
