exports.getAllCartDetails = function (req) {
  return new Promise((resolve) => {
    if (req.session.cart) {
      resolve(req.session.cart);
    } else {
      req.session.cart = [];
      resolve(req.session.cart);
    }
  });
};

exports.addToCart = function (req) {
  let data = req.body;
  return new Promise((resolve) => {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    req.session.cart.push({
      productId: data.productId,
      quantity: data.quantity,
    });
    resolve(req.session.cart);
  });
};

exports.removeFromCart = function (req, id) {
  return new Promise((resolve) => {
    console.log(req.session);
    req.session.cart = req.session.cart.filter((data) => data.productId != id);
    resolve(req.session.cart);
  });
};

exports.checkout = function (req) {
  return new Promise((resolve) => {
    req.session.destroy((err) => {
      console.log("session is destroyed");
      resolve("session is destroyed is explicitly");
    });
  });
};
