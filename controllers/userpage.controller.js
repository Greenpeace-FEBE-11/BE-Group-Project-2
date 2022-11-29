
const userpage = require('../models/userpage')
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


exports.getInformasiById = async (req, res)=>{
    try {
        const InformationById = await userPage.findOne({_id: req.params.id})

        res.status(200).json({
            message: "success get detail information",
            data: InformationById
        })
    } catch  {
        res.status(404).json({
            message: "information not found"
        })
    }
    
},

exports.addInformasi = async (req, res) =>{
        const {name, title, content} = req.body
        const image = req.file.path
        const informasi = await userPage.create({name, title, content, image})
        res.status(200).json({
            message: "success add information",
            data: informasi
        })
        

        /*

    exports.addInformasi =  (req, res) =>{
        const data = req.body

        const userInformasi = new userPage(data)
        userInformasi.save()
       

        res.json({
            message: "succes add data",
            data: userInformasi
        })

        */
    },

exports.updateInformasi = async (req, res) =>{
/*
    const updateData = new Update({
        name: req.body.name,
        title: req.body.title,
        content: req.body.title,
        updatedAt: new Date()
    })
    Update.updateOne({_id: req.params.id}, updateData).then(
        ()=>{
            res.status(201).json({
                message: "update successfuly",
               
            })
        }
    ).catch(
        (err)=>{
            res.status(400).json({
                error: err
            })
        }
    ) */
/*
    userPage.findOneAndUpdate({_id: req.params.id},
            {
                $set: {
                    name: req.body.name,
                    title: req.body.title,
                    content: req.body.content,
                    updatedAt: new Date()
                }
            },{new: true}, (err, updateObj)=>{
                if(err){
                    res.status(400).json({
                        status: false,
                        error: "item not update"
                    })
                }else{
                    res.status(200).json({
                        message: "update item successfuly",
                        updateObj
                    })
                }
            }
        )*/
    
            const {name, title, content} = req.body
            const image = req.file.path
            const userInformasi = await userPage.findById(req.params.id)
            if(userInformasi){
                userInformasi.name = name
                userInformasi.title = title
                userInformasi.content = content
                userInformasi.image - image
                const informationUpdate = await userInformasi.save()
                res.status(200).json({
                    message: "update information successfuly",
                    data: informationUpdate
                })
            }
            else{
                res.status(404).json({
                    message: "update missing"
                })
            }
            
            
       
        
        
},

exports.deleteInformasi = (req, res) =>{
    userPage.findOneAndDelete({_id: req.params.id}, (err, deleteObj)=>{
        if(err){
            res.status(404).json({
                error: "item not found"
            })
        }else{
            res.status(200).json({
                message: "item successfuly deleted"
            })
        }
    })
}



        
    



