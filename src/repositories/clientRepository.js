const Client = require('../models/clients');

const getAll = async ()  =>  await Client.find().populate('accounts');
const getOne = async (id)  =>  await Client.findById(id).populate('accounts');
const count = async ()  =>  await Client.count();

const save = async (body)  =>  {
  const client = new Client({
    firstName: body.firstName,
    lastName:body.lastName,
    email:body.email
  })
  await client.save();
  return client;

}

module.exports = {
  getAll,
  getOne,
  count,
  save
}