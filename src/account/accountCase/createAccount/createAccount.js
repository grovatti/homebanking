const { response } = require('express');
const accountRepository = require('../../../repositories/accountRepository');

const createAccount = async (req, res = response )  =>  {
    
    console.log(req.body)
    try {
     
        await accountRepository.save(req.body);
      
        res.status(200).json({
            message: 'La cuenta se creo correctamente',
            })

    } catch (error) {
      res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

 module.exports = {createAccount};