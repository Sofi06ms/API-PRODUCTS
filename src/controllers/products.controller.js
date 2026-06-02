import { response } from "express";
import productsDAO from "../dao/products.dao.js";
const productsControllers={};
productsControllers.getAll=(req, res) => {
    productsDAO.getAll()
    .then ((products) =>{
      res.json({
        data: products,
      })
    }) 
   .catch((error)=> {
    res.json({
      error:error,
       })
   })
};

productsControllers.getOne = (req, res) => {
  productsDAO.getOne(req.params.barcode)
  .then ((product) =>{
      res.json(product);
      })
   .catch((error)=> {
    console.error("Error fetching product", error)
    res
      .status(500)
      .json({ error: "An error ocurred while fetching the product"})
       })
};

productsControllers.insertOne=(req, res)=>{
  const product = req.body;
  productsDAO.insetOne(product)
 .then((response) => {
    console.log(response);
    res.json ({
      message: "product inserted successfully",
      product:response,
    });
  })
  .catch ((error) =>{

  console.error("Error inserting product", error)
  res
  .satatus(500)
  .json({error: "An error ocurred while inserting the product"});
  });
};

productsControllers.updateOne=(req, res)=>{
  productsDAO.updateOne(req.params.barcode,req.body)
  .then(()=>{
  res.json({message:"product updated succesfully"})
  })
  .catch((err)=>{
    console.error("Error al actualizar: " + err);
    res.jsonres.json({message:"Servidor no disponible",
      error:err
    })
  }
);
};
productsControllers.deleteOne=(req, res)=>{
  productsDAO.deleteOne(req.params.barcode)
   .then((result)=>{
  res.json({message:"product deleted succesfully", product:result})
  })
  .catch((err)=>{
    console.log("An error has ocurred while deleted the product");
    res.status(500).json({error:err})
    })
  };

export default productsControllers;