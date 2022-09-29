const express = require("express");
const expressSession = require("express-session");
const routes = require("./router");

const oneDay = 1000 * 60 * 60 * 24;
const app = express();
const PORT = 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var sessionMiddlware = expressSession({
  secret: "cart",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
});
app.use(sessionMiddlware);

routes(app);
app.listen(PORT, () => {
  console.log(`App Server is Listening on Port ${PORT}`);
});
