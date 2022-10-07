const { UPSERT } = require("sequelize/types/query-types")

router.put('/.:id', (req, res) => {
    UPSERT.update(req.body, {
        individualHooks: true, 
        where: {
            is: req.params.id
        }
    })
})