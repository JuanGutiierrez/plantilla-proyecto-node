//permitir trabajar con base de datos relacional
import { Sequelize } from "sequelize";

const dataBase = new Sequelize('crudfullstack', 'root', '', {
    host: 'localhost'
})