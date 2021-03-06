const { response } = require('express');
const clientRepository = require('../../repositories/clientRepository');

const getClients = async (req, res = response )  =>  {
    try {
     
      const clients = await clientRepository.getAll();
      const count = await clientRepository.count();
  
    if(!clients){
        return res.status(401).json({
          message:  'Not Autorizado',
        })
    }
  
    res.status(200).json({
    message: 'Clients',
    response: clients,
    total: count
    })
  
    } catch (error) {
      res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

const getClient = async (req, res = response) => {
  
  const id = req.params.id
  try{

    const client = await clientRepository.getOne(id)
    console.log(client);
    if(!client){
      return res.status(401).json({
        message: 'Sin Autorizacion',
      })
    }

    return res.status(200).json({
      message: 'Client',
      data: client,
    })

  } catch (error) {
      res.status(500).json({
      message:'Error interno',
      err: error
      })
  }


}

  module.exports = {
      getClients,
      getClient
    }