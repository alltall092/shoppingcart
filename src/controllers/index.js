const { userRegister, getAllUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const {getProductAlls,postProduct,agregarProducts,getCartAlls,
  realizarCompras,
  getOrderAlls} =require("./product.controllers");
module.exports = {
  userRegister,
  getAllUser,
  userLogin,
  getProductAlls,
  postProduct,
  agregarProducts,
  getCartAlls,
realizarCompras,
getOrderAlls

};
