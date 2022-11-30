const { Users,Product, Cart,ProductInCart,Order,ProductInOrder } = require("../models");
const { Op } = require("sequelize");
const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const transporter = require("../utils/mailer");
class  ProductServices{

static async getProductAll(){
 const cantidad=1;
 
try{
const result=await Product.findAll({
where:{
availableQty:cantidad>0

},
include:{
  model: Users,
  as:"user",
  attributes:["username"]
}


});
return result;
}catch(err){
  throw err;
}


}
static async createProduct(product,imagenes){
try{
  
  const result=await Product.createWish({product,imagenes});
  return result;
}catch(err){
  throw err;
}


}
static async agregarCart(...cart){

try{
  
  const results=await Product.findAll();
const productId=results.id;
const id = await Product.findOne(productId)
const carts=cart.map(userId=>{
return{userId,id}

})
const result=await Cart.build(
  carts
  

  );

  

 
return result;
  

}catch(err){
  throw err;
}

}

static async  getCartAll(){
try{
  const result=await ProductInCart.findAll({
include:[{
  model:Users,
  as:"shop"
},
{model:Product,
as:"prodIn"
},{
model:Cart,
as:"cartIn"

}
]

});
return result;
}catch(err){
  throw err;
}


}
static async  realizarCompra(cantidad){
  try{
    const results=await Cart.create(cantidad);
     const result=await stripe.charges.create({
      amount: results.totalPrice,
      currency: "usd",
      source: "tok_mastercard", // obtained with Stripe.js
      metadata: {'order_id': '6735'}
    });
    if(result){
    const user=await Users.findOne();
    await transporter.sendMail({
      from: "alltall659@gmail.com",
      to: user.email,
      subject: "Welcome to the best chat app ever",
      text: `Hello ${user.username}`,
      html: `<h1>Hello ${user.username}</h1>`,
    });
    return user;
  }
return result;
  }catch(err){
    throw err;
  }
  
  
  }
  static async  getOrdertAll(){
    try{
      const result=await ProductInOrder.findAll({
        include:[{
          model:Users,
          as:"ordenar"
        }]});
        return result;
    }catch(err){
      throw err;
    }
    
    
    }

}
module.exports=ProductServices;