const { Router } = require('express');
const router = new Router();

/* ---- CLIENTS ---- */

const { getClients,createClient } = require('../client/clientController');
router.get('/clients', getClients.getClients);
router.get('/clients/:id', getClients.getClient);

router.post('/clients', createClient.createClient);

/* ---- ACCOUNT ---- */

const { getAccounts,createAccount } = require('../account/accountController');
router.get('/accounts', getAccounts.getAccounts);
router.get('/accounts/:id', getAccounts.getAccount);

router.post('/accounts', createAccount.createAccount);


module.exports = router;