import Producto from "../models/ProductoModel"

const crearProducto = async (req, res) => {
    try {
        Producto.create(req.body)
        res.json({
            message: "Usuario creado correctamente"
        })
    } catch (error) {
        res.json({
            message: `No se pudo registrar ${error}`
        })
    }
}

const listarProductos = () =>{
    
}

const listarProducto = () =>{
    
}

const editarProducto = () =>{
    
}
const elimiarProducto = () =>{
    
}

export {
    crearProducto,
    listarProducto,
    listarProductos,
    editarProducto,
    elimiarProducto
}
