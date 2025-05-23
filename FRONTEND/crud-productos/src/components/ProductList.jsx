import React, { useEffect, useState } from "react"
import { getProducts, deleteProduct } from "../api/products"
import { useNavigate } from "react-router"

export default function ProductList(){

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    const loadProducts = async() => {
        const response = await getProducts()
        setProducts(response.data)
    }
    
    const handleDelete = async(id) => {
            await deleteProduct(id)
            setProducts(products.filter(product => product.id !== id))  
    }

    useEffect(()=>{
        loadProducts()
    }, [])                         
    return(
        <div className="mt-8">
            <h1 className="text-3xl font-bold text-sky-900">Productos Disponibles</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 text-white">
                {products.map(products=>(
                    <div key={products.id} className="bg-sky-900 p-4 rounded-lg shadow">
                    <p> {products.nombre}</p>
                    <p><span className="font-bold">Precio: </span>${products.precio}</p>
                    <p><span className="font-bold">Descripcion: </span>{products.descripcion}</p>
                    <div className="mt-4">
                        <button className="bg-green-400 text-white px-2 py-1 rounded-lg"
                        onClick={() => navigate(`/editar-producto/${products.id}`)}>
                        Editar</button>
                        <button onClick={() => handleDelete(products.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-lg ml-2">Eliminar</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}