/* const express = require("express"); */
import express from "express";
import { dataBase } from './database/dataBase.js';

const app = express()

app.listen(3100, ()=>{
    console.log('Servidor corriendo en el puerto 3100')
})