import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://sofimendozasilva7_db_user:Sofiamen06@cluster0.llgcsmp.mongodb.net/?appName=Cluster0")
.then((cnn)=> console.log ("Conected to MongoDB") )
.catch((error) => console.error ("Error conecting to MongoDB", error) )

export default mongoose;
