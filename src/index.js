const app = require("express")();

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "hola! from backend",
    objective: "docker is easy",
  });
});

app.listen(3000, () => {
  console.log("server listing on port " + 3000);
});
