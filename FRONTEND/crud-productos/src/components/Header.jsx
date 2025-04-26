import { Link } from "react-router"

export default function Header() {
    return(
        <nav className="py-4 mb-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold bg-blue-300 text-white px-4 py-2 rounded-lg hover:text-gray-400">Productos</Link>
                <div>
                    <Link to="/nuevo-producto" className="text-xl font-bold bg-green-400 text-white px-4 py-2 rounded-lg hover:text-gray-400">Nuevo Producto</Link>
                    </div>
            </div>
        </nav>
    )
}