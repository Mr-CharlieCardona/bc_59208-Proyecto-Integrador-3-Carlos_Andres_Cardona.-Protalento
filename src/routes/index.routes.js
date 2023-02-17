const express = require("express");
const router = express.Router();
const controller = require("../controller/index.controller");

//import { cards } from './dataProducts';
cards = require("./dataProducts");

router.get("/", (req, res) => {
  cards = Object.values(cards);

  res.render("home", { cards: cards });
});
router.get("/home", (req, res) => {
  cards = Object.values(cards);

  res.render("home", { layout: false, cards: cards });
});

// Para agregar productos del carrito
router.post("/", (req, res) => {
  cards = Object.values(cards);
  const productId = req.body.productId;
  cards.map((item) => {
    if (item.productId == productId) {
      item.enCarrito = true;
    }
  });
  const inTheCart = Object.values(cards).filter((card) => card.enCarrito);
  res.render("cart", { cards: inTheCart });
});

// Para quitar productos del carrito
router.post("/cart", (req, res) => {
  cards = Object.values(cards);
  const productId = req.body.productId;
  cards.map((item) => {
    if (item.productId == productId) {
      item.enCarrito = false;
    }
  });
  res.render("home", { cards: cards });
});

// Para agregar producots al sistema
router.post("/alta", (req, res) => {
  cards = Object.values(cards);
  const data = req.body;

  console.log(data, "Este objecto son los datos que se deben guardar");

  res.render("home", { cards: cards });
});

router.get("/alta", controller.alta);
router.get("/contact", controller.contact);
router.get("/about", controller.about);
router.get("/cart", controller.cart);

module.exports = router;
