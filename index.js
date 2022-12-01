/* const express = require("express"); */
import express from "express";
import dataBase from './database/dataBase.js';

const app = express()

try {
    await dataBase.authenticate()
    console.log("Coneccion exitosa")
} catch (error) {
    console.log(error)
}

app.listen(3100, ()=>{
    console.log('Servidor corriendo en el puerto 3100')
    console.log('http://localhost:3100')
})