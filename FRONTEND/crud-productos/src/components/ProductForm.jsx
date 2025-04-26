import React, { useEffect, useState } from "react"
import { createProduct, getProduct, updateProduct } from "../api/products"
import { useNavigate, useParams } from "react-router"

export default function ProductForm() {

    const [product, setProduct] = useState({
        nombre: '',
        precio: 0,
        descripcion: ''
    })

    const navigate = useNavigate()

    const params = useParams()
    useEffect(() => {
      const loadProduct = async () => {
        if (params.id) {
          const response = await getProduct(params.id)
          setProduct(response.data)
        }
      }
      loadProduct()
    },[params.id])

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (params.id) {
            await updateProduct(params.id, product)
        } else {
            await createProduct(product)
        }
        navigate('/')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold text-sky-900">Nuevo Producto</h1>
                <div className="mt-4">
                    <label className="block text-gray-700">Nombre</label>
                    <input value={product.nombre}
                     type="text" 
                     onChange={(e) => setProduct({...product, nombre: e.target.value})}
                     className="border border-gray-300 p-2 w-full rounded-lg" placeholder="Nombre del producto"/>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Precio</label>
                    <input value={product.precio}   
                    type="number" 
                    onChange={(e) => setProduct({...product, precio: e.target.value})}
                    className="border border-gray-300 p-2 w-full rounded-lg" placeholder="Precio del producto"/>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Descripcion</label>
                    <textarea 
                    value={product.descripcion} 
                    onChange={(e) => setProduct({...product, descripcion: e.target.value})}
                    className="border border-gray-300 p-2 w-full rounded-lg" placeholder="Descripcion del producto"></textarea>
                </div>
                <button type="submit" className="bg-green-400 text-white px-4 py-2 mt-4 rounded-lg">Guardar</button>
                <button type="submit" className="bg-red-600 text-white px-4 py-2 mt-4 rounded-lg ml-2">Cancelar</button>
            </form>
        </div>
    )
}