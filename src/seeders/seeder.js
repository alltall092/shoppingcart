const db = require("../utils/database");
const { Users, Product,Cart,ProductInCart,Order,ProductInOrder} = require("../models");
const initModels = require("../models/initModels");

initModels();

const users = [
  {
    username:"maria",
    email: "maria@gmail.com",
    password: "1234",
 
  },
  {
    username:"jose01",
    email: "jose01@gmail.com",
    password: "pass1234",
  }
];

const products = [
  {
    name: "alcatel",
    price:200,
    availableQty:1,
    status:false,
    userId:1
  },
  {
    name: "motorola",
    price:900,
    availableQty:1,
    status:false,
    userId:2
  },
  { 
name: "samsung galaxy",
  price:400,
  availableQty:1,
  status:false,
  userId:3
   
  },
];

const cart = [
  { userId:1,totalPrice:1000},
  { userId:2,totalPrice:2000},
  { userId:3,totalPrice:3000}

];

const productincart = [
  { cartId: 1, productId: 1, quantity:1,price:100,status:true },
  { cartId: 2, productId: 1, quantity:1,price:100,status:false },
{ cartId: 3, productId: 1, quantity:1,price:200,status:false }];


const order=[
    {totalPrice: 1100, userId:1,status:false },
    {totalPrice: 1000, userId:2,status:false },
    {totalPrice: 900, userId:2,status:true }

];

const productinorder = [
    { orderId: 1, productId: 1, quantity:1,price:100,status:true },
    { orderId: 2, productId: 1, quantity:1,price:100,status:false },
  { orderId: 3, productId: 1, quantity:1,price:200,status:false }];
 

db.sync({ force: true }).then(() => {
  console.log("Sinronizado");
  users.forEach(async (user) => await Users.create(user));
  setTimeout(() => {
    products.forEach(
      async (product) => await Product.create(product));
  }, 100);
  setTimeout(() => {
    cart.forEach(
      async (carts) => await Cart.create(carts)
    );
  }, 200);
  setTimeout(() => {
    productincart.forEach(async (productincarts) => await ProductInCart.create(productincarts));
  }, 300);
  setTimeout(() => {
    order.forEach(async (order) => await Order.create(order));
  }, 400);
  setTimeout(() => {
    productinorder.forEach(async (productinorders) => await ProductInOrder.create(productinorders));
  }, 500);



});
