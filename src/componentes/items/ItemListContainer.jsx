import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {app} from "../../data/firebase"
import {toast} from "react-hot-toast"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


function ItemListContainer() {
  const [productos, setProductos] = useState([]);
 const {id} = useParams();
  useEffect(() => {
  toast.dismiss()
  toast.loading("Cargando Los datos, espere por favor")
   async function getProducts(){
    try{
      const db = getFirestore (app)
      const productCollection = collection(db, "products")

      const q = id
      ? query(productCollection, where("categoria", "==", id))
      : productCollection

      const consulta = await getDocs(q)
      const productosArray = [];
      consulta.docs.forEach(doc=>{
        productosArray.push(doc.data())
      })
      setProductos(productosArray)
      toast.dismiss()
      toast.success("Datos cargados correctamente")
    }
  catch{
    toast.dismiss()
    toast.error("Error al Cargar los datos, Intente nuevamente")}
  }
  getProducts()
   }  ,[id])
  return (
    <div className="ItemListContainer">
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;