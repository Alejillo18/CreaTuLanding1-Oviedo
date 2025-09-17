import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore,doc, getDoc } from "firebase/firestore";
import { app } from "../../data/firebase"; 
import { toast } from "react-hot-toast";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
     async function getProductID(){
      toast.dismiss()
      toast.loading("Cargando producto")
      try{
        const db = getFirestore (app)
        const consulta = doc(db,   "products", id)
        const productoIDCrudo = await getDoc(consulta)
        if(productoIDCrudo.exists()){
          const productoID = productoIDCrudo.data()
        setProducto(productoID)
        toast.dismiss()
        toast.success("Datos cargados correctamente")
        }
        else{
          toast.dismiss()
          toast.error("Producto no encontrado, intente nuevamente")
        } 
      }
    catch{
      toast.dismiss()
      toast.error("Error al Cargar los datos, Intente nuevamente")}
    }
    
    getProductID()
     }  ,[])

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;