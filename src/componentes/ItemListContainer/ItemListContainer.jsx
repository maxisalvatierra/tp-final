import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import Carrousel from "../Carrousel/Carrousel"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log("Error, nos van a despedir", error))
  }, [idCategoria])

  return (
    <div>
      <Carrousel/>
      <h2>Mis productos</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer