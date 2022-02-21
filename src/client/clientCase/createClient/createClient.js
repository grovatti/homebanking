const { response } = require('express');
const clientRepository = require('../../../repositories/clientRepository');

const createClient = async (req, res = response )  =>  {
    
    console.log(req.body)
    try {
     
        await clientRepository.save(req.body);
      
        res.status(200).json({
            message: 'El cliente se creo correctamente',
            })

    } catch (error) {
      res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

 module.exports = {createClient};