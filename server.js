import express from "express";
import expressSession from "express-session";
import cors from "cors";
import productRoutes from "./routes/product.router.js";
import customerRoutes from "./routes/customer.router.js";
import vendorRoutes from "./routes/vendor.router.js";
import staffRoutes from "./routes/staff.router.js";
import sellerRoutes from "./routes/seller.router.js";
import orderRoutes from "./routes/order.router.js";
import dashboardRoutes from "./routes/dashboard.router.js";
// import routes from "./routes/router.js";

const oneDay = 1000 * 60 * 60 * 24;
const app = express();
const PORT = 7000;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

var sessionMiddlware = expressSession({
  secret: "cart",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
});

app.use(sessionMiddlware);

//
productRoutes(app);
customerRoutes(app);
sellerRoutes(app);
staffRoutes(app);
vendorRoutes(app);
orderRoutes(app);
dashboardRoutes(app);

app.listen(PORT, () => {
  console.log(`App Server is Listening on Port ${PORT}`);
});
