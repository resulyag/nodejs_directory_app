const db = require('../models')

// create main Model
const Directory = db.directories

// main work

// 1. create product

const addDirectory = async (req, res) => {

    let info = {
        ownerid: req.body.ownerid,
        personid: req.body.personid
    }

    const directory = await Directory.create(info)
    res.status(200).send(directory)
    console.log(directory)

}



// 2. get all products

const getAllDirectories = async (req, res) => {

    let directories = await Directory.findAll({})
    res.status(200).send(directories)
}

// 3. get single product

// const getOneDirectory = async (req, res) => {

//     let id = req.params.id
//     let directory = await Directory.findOne({ where: { id: id } })
//     res.status(200).send(directory)
// }

// 4. update product

// const updateDirectory = async (req, res) => {

//     let id = req.params.id

//     const directory = await Directory.update(req.body, { where: { id: id } })

//     res.status(200).send(directory)
// }

// 5. delete product by id

// const deleteDirectory = async (req, res) => {

//     let id = req.params.id

//     await Directory.destroy({ where: { id: id } })

//     res.status(200).send('Directory is deleted ! ')
// }

// 6. get published product

// const getPublishedProduct = async (req, res) => {


//     const products = await Product.findAll({ where: { published: true } })

//     res.status(200).send(products)
// }

module.exports = {
    addDirectory,
    getAllDirectories
    // getAllDirectories,
    // getOneDirectory,
    // updateDirectory,
    // deleteDirectory
}