const userPage = require('../models/userpage')


module.exports = {
    getInformasi: async (req, res) =>{
        try {
            const userGetInformasi = await userPage.find()

            res.json({
                message: "succes get data",
                data: userGetInformasi
            })
        } catch (error) {
            
        }
    },

    addInformasi:  (req, res) =>{
        const data = req.body
        const userInformasi = new userPage(data)
        const images = req.file.path
        userInformasi.save()
       

        res.json({
            message: "succes add data",
            data: userInformasi
        })
        
    },


    updateInformasi: (req, res) =>{
        
    },
}