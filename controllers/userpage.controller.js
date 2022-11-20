const userPage = require('../models/userpage')


exports.getInformasi= async (req, res) =>{
        try {
            const userGetInformasi = await userPage.find()

            res.json({
                message: "succes get data",
                data: userGetInformasi
            })
        } catch (error) {
            
        }
    },

    exports.addInformasi =  (req, res) =>{
        const data = req.body
        const userInformasi = new userPage(data)
        userInformasi.save()
       

        res.json({
            message: "succes add data",
            data: userInformasi
        })
        
    }


