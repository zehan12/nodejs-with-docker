const app = require("express")();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "hola! from backend",
    objective: "docker is easy",
  });
});

app.listen(PORT, () => {
  console.log("server listing on port " + PORT);
});
