const { ProductServices } = require("../services");
const getProductAlls= async(req,res, next)=>{
try{
//const cantidad=req.body.availableQty;
  const result= await ProductServices.getProductAll();
  res.status(200).json(result);
}catch(err){
  next({
    status: 400,
    errorContent: err,
    message: "datos invalido",
  });
}


}
const postProduct= async(req,res, next)=>{
  try{


const newProduct=req.body;
    const result= await ProductServices.createProduct(newProduct);
    res.status(200).json(result);
  }catch(err){
    next({
      status: 400,
      errorContent: err,
      message: "datos invalido",
    });
  }
  
  
  }
const agregarProducts= async(req,res,next)=>{
try{
  const data= req.body;
  const result= await ProductServices.agregarCart(data);
res.status(201).json(result);
}catch(err){
  next({
    status: 400,
    errorContent: err,
    message: "datos invalido",
  });
}


}
const getCartAlls=async (req,res,next)=>{
try{
const result=await ProductServices.getCartAll();
res.status(200).json(result);
}catch(err){
  next({
    status: 400,
    errorContent: err,
    message: "datos invalido",
  });
}


}
const realizarCompras=async (req,res,next)=>{
try{
const cantidad= req.body;
const status=true;
const result= await ProductServices.realizarCompra(cantidad);
if(result){
const c=["productos comprado","purcharses"];
status==true?res.json(c):res.status(201).json(result);

}

}catch(err){
  next({
    status: 400,
    errorContent: err,
    message: "datos invalido",
  });
}

}
const getOrderAlls=async (req,res,next)=>{
  try{
  const result= await ProductServices.getOrdertAll();
  res.json(200).json(result);
  }catch(err){
    next({
      status: 400,
      errorContent: err,
      message: "datos invalido",
    });
  }
  
  }
  

module.exports={
getProductAlls,
postProduct,
agregarProducts,
getCartAlls,
realizarCompras,
getOrderAlls

}