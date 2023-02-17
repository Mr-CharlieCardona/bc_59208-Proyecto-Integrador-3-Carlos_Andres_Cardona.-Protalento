const controller = {};
controller.index = (req, res) => {
  res.render("home", { layout: false });
};
controller.home = (req, res) => {
  res.render("home", { layout: false });
};
controller.alta = (req, res) => {
  res.render("alta", { layout: false });
};
controller.cart = (req, res) => {
  res.render("cart", { layout: false });
};
controller.contact = (req, res) => {
  res.render("contact", { layout: false });
};
controller.about = (req, res) => {
  res.render("about", { layout: false });
};
module.exports = controller;
 