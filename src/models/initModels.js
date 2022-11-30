const { Users, Product, Cart, Order, ProductInCart,ProductInOrder} = require("./index");

const initModels = () => {
  // muchos a muchos --> usuarios y conversaciones
 //Users.belongsToMany(Conversations, { through: "participants" });
  //Conversations.belongsToMany(Users, { through: "participants" });

  //Un usuario puede tener muchos productos, y un producto le pertenece a un usuario
 Product.belongsTo(Users, { as: "user", foreignKey: "userId" });
  Users.hasMany(Product, { as: "user", foreignKey: "userId" });
  //carrito
  Cart.belongsTo(Product, { as: "carrito", foreignKey: "userId" });
  Product.hasMany(Cart, { as: "carrito", foreignKey: "userId" });
  //Un usuario solo puede tener un carrito, y un carrito le pertenece a un usuario
  Cart.belongsTo(Users, { as: "shopping", foreignKey: "userId" });
  Users.hasOne(Cart, { as: "shopping", foreignKey: "userId" });
 // Un usuario puede crear muchas ordenes y una orden le pertenece a un usuario
  Order.belongsTo(Users, { as: "order", foreignKey: "userId" });
  Users.hasMany(Order, { as: "order", foreignKey: "userId" });
  //Un ProductInCart puede tener un producto y pertenece a un carrito
  ProductInCart.belongsTo(Users, { as: "shop", foreignKey: "userId" });
  Users.hasOne(ProductInCart, { as: "shop", foreignKey: "userId" });
  Cart.belongsTo(ProductInCart, { as: "cartIn", foreignKey: "cartId" });
  ProductInCart.hasOne(Cart, { as: "cartIn", foreignKey: "userId" });
  ProductInCart.belongsTo(Product, { as: "prodIn", foreignKey: "userId" });
  Product.hasMany(ProductInCart, { as: "ProdIn", foreignKey: "productId" });
 // Un carrito tiene muchos ProductInCart
 ProductInCart.belongsTo(Cart, { as: "carts", foreignKey: "cartId" });
 Cart.hasMany(ProductInCart, { as: "carts", foreignKey: "cartId" });
// orden tiene muchos ProductInOrder
 ProductInOrder.belongsTo(Order, { as: "orders", foreignKey: "orderId" });
 Order.hasMany(ProductInOrder, { as: "orders", foreignKey: "orderId" });
 //Un ProductInOrder tiene un producto y pertenece a una orden
 Order.belongsTo(ProductInOrder, { as: "orderIn", foreignKey: "orderId" });
 ProductInOrder.hasOne(Order, { as: "orderIn", foreignKey: "userId" });
Order.belongsTo(Users, { as: "ordenes", foreignKey: "userId" });
 Users.hasOne(Order, { as: "ordenes", foreignKey: "userId" });
 ProductInOrder.belongsTo(Users, { as: "ordenar", foreignKey: "orderId" });
 Users.hasOne(ProductInOrder, { as: "ordenar", foreignKey: "orderId" });
}
module.exports = initModels;

