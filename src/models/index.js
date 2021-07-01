const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize');
const basename = path.basename(__filename)
const config = require('../../config')

const meuModelCustomer = {}

const db = {
  customer: meuModelCustomer
}

let sequelize = new Sequelize(config.database, config.username, config.password, config)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})



db.sequelize = sequelize
db.Sequelize = Sequelize


const myFunction = async() =>{
  try{
    console.log('tentando conectar')
    await sequelize.authenticate();
    console.log('Conectou')
  }catch(error){
    console.error('impossivel conectar0', error)
  }
}

myFunction()

module.exports = db