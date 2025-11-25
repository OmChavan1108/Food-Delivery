import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/swiggy", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "application/json",
        },
      }
    );

    const json = await response.json();
    res.json(json);

  } catch (err) {
    console.log("Backend error:", err);
    res.status(500).json({ error: "Failed to fetch Swiggy" });
  }
});

// app.get("/menu/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const response = await fetch(
//       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204&lng=73.8567&restaurantId=${id}`,
//       {
//         headers: {
//           "User-Agent":
//             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
//           "Accept": "application/json",
//         },
//       }
//     );

//     const json = await response.json();
//     res.json(json);

//   } catch (err) {
//     console.error("Backend Error:", err);
//     res.status(500).json({ error: "Failed to fetch menu" });
//   }
// });


app.listen(3000, () => console.log("Backend running at http://localhost:3000"));
