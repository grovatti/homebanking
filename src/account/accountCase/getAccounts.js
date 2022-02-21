const { response } = require('express');
const accountRepository = require('../../repositories/accountRepository');

const getAccounts = async (req, res = response )  =>  {
    try {
     
      const accounts = await accountRepository.getAll();
      const count = await accountRepository.count();
  
    if(!accounts){
        return res.status(401).json({
          message:  'Not Autorizado',
        })
    }
  
    res.status(200).json({
      message: 'Accounts',
      response: accounts,
      total: count
    })
  
    } catch (error) {
      res.status(500).json({
        message: 'Error Interno del Servidor',
        err: error
      })
    }
  }

const getAccount = async (req, res = response) => {
  
  const id = req.params.id
  try{

    const account = await accountRepository.getOne(id)
    console.log(account);
    if(!account){
      return res.status(401).json({
        message: 'Sin Autorizacion',
      })
    }

    return res.status(200).json({
      message: 'Account',
      data: account,
    })

  } catch (error) {
      res.status(500).json({
      message:'Error interno',
      err: error
      })
  }
}

module.exports = {
      getAccounts,
      getAccount
    }