
const Customer =  require('../models/Customer')

const getAllCustomers = async(req,res,next) => {
      try {
          const customers = await Customer.find({})
          res.status(200).json({customers})
      } catch (error) {
           next(error)
      }
}

const createCustomer = async(req,res,next) => {
      try {
           const duplicateValue = await Customer.findOne({name: req.body.name, phoneNumber: req.body.phoneNumber})
           if(duplicateValue){
              res.status(409).json({msg: 'user already exists'})
           }
           const customer = await Customer.create(req.body)
           res.status(201).json({customer})
      } catch (error) {
          next(error)
      }
}

const login = async(req,res) => { 
        try{
             const {name, phoneNumber} = req.body
            const loginCredentials = await Customer.findOne({name, phoneNumber})
            if(loginCredentials){
               return res.status(200).json({msg: `Hi ${req.body.name} welcome`})
            }
            res.status(401).json({msg: 'user not found'})
        }catch(error){
            res.status(401).json({msg: 'user not found'})
        }
       
}

module.exports = {getAllCustomers, createCustomer, login}