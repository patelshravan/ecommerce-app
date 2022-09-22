const express = require("express");
const routes = require("./router");
const app = express();
const PORT = 7000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);
app.listen(PORT, () => {
  console.log(`App Server is Listening on Port ${PORT}`);
});
