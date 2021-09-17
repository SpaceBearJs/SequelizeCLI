const { User, Address } = require("../models/index");

module.exports = {
    findAll: async (req, res) => {
        res.json(await User.findAll({
            include: {
                model: Address,
                as: 'domicilio',
                attributes: ['street']
            }
        }))
    },
    create: async (req, res) => {
        const { name, age } = req.body

        res.json(
            await User.create({ name, age })
                .catch(e => {
                    res.json(e.errors)
                })
        )
    },
    edit: async (req, res) => {

    },
    delete: async (req, res) => {

    }

}