import express from "express";
import { crearProducto, mostrarProductos, mostrarProducto, eliminarProducto, editarProducto} from "../controllers/ProductoController.js";

const productoRouter = express.Router();

productoRouter.get('/', mostrarProductos)
productoRouter.get('/:id', mostrarProducto)
productoRouter.post('/', crearProducto)
productoRouter.delete('/:id', eliminarProducto)
productoRouter.put('/:id', editarProducto)

export default productoRouter
