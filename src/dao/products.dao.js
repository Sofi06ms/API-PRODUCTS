const productsDAO={};
import Product from "../models/Product.js";
productsDAO.getAll= async ()=>{
  return await Product.find();
};
productsDAO.getOne=(barcode)=>{
  console.log("Solicitud recibida");
  console.log("codigo de barras:", barcode);
  return{
    description:"Rufles queso",
    brand: "Sabritas",
    price: 20,
    stock: 100
  }
};
productsDAO.insetOne= async (Product)=>{
  const newProduct = await Product.create(Product);
  return newProduct;
};
productsDAO.updateOne= async (Product)=>{
  const updateProduct = await Product.findOneAndUpdate({barcode:barcode.Product},product);
  return updateProduct;
};
productsDAO.deleteOne= async (Product)=>{
  const deleteProduct = await Product.findOneAndDelete({barcode:barcode.Product})
  return deleteProduct;
}
export default productsDAO;