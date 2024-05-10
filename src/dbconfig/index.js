const Sequelize = require('sequelize');

const sequelize = new Sequelize('my_schema', 'root', 'Xiaogoesbrr1!', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

const authenticateConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log('Database Connection is Successful!');
    }catch(error){
        console.log(error.stack);
    }
}

authenticateConnection();