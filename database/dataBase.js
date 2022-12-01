//permitir trabajar con base de datos relacional
import { Sequelize } from "sequelize";

/* export */ const dataBase = new Sequelize('crudfullstack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default dataBase
/*export{
    dataBase
} */