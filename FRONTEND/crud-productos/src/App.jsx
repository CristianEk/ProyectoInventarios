import { BrowserRouter, Route, Routes} from "react-router"
import ProductList from "./components/productList"
import ProductForm from "./components/ProductForm"
import Header from "./components/header"
function App() {
  
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path ="/nuevo-producto" element={<ProductForm />}/>
        <Route path="/editar-producto/:id" element={<ProductForm />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
