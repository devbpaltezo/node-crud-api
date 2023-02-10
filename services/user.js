const db = require("./db");
const helper = require('../helper');
const config = require('../config');

const getAll = async (req, res, next) => {
  try{

    const rows = await db.query(
      `SELECT * FROM users`
    );

    if(!rows){
      res.send({status: 200, message: 'success', data: []})
      return
    }

    res.send({status: 200, message: 'success', data: rows})
    return


  }catch(err){
    throw(err)
  }
}

const create = async (req, res) => {
  try{

    const {firstName, lastName, address, postCode, contact, email, username, password} = req.body

    const query = await db.exec(`
      INSERT INTO 
        users 
        (first_name, last_name, address, post_code, contact, email, username, password)
      VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        firstName, 
        lastName, 
        address, 
        postCode, 
        contact, 
        email, 
        username, 
        password
    ])

    if(!query){
      res.send({status: 200, message: 'failure', data: query})
      return
    }

    res.send({status: 200, message: 'success', data: query})
    return

  }catch(err){
    res.send({status: 200, message: 'failure', error: err})
  }
}

const read = async (req, res, next) => {
  try{

    console.log(req.params)
    const query = await db.exec(`SELECT * FROM users WHERE id = ?`, [req.params.id])

    if(!query){
      res.send({status: 200, message: 'failure', data: query})
      return
    }

    res.send({status: 200, message: 'success', data: query})
    return

  }catch(err){
    res.send({status: 200, message: 'failure', error: err})
    throw(err)
  }
}

const update = async (req, res) => {
  try{


    const {firstName, lastName, address, postCode, contact, email, username, password} = req.body

    const query = await db.exec(`
      UPDATE 
        users 
      SET
        first_name = ?,
        last_name = ?,
        address = ?,
        post_code = ?,
        contact = ?,
        email = ?,
        username = ?,
        password = ?
      WHERE
        id = ?
      `, [
        firstName, 
        lastName, 
        address, 
        postCode, 
        contact, 
        email, 
        username, 
        password,
        req.params.id
    ])

    if(!query){
      res.send({status: 200, message: 'failure', data: query})
      return
    }

    res.send({status: 200, message: 'success', data: query})
    return

  }catch(err){
    res.send({status: 200, message: 'failure', errpr: err})
    throw(err)
  }
}

const remove = async (req, res) => {
  try{
    const query = await db.exec(`DELETE FROM users WHERE id = `, [req.params.id])
    if(!query){
      res.send({status: 200, message: 'failure', data: query})
      return
    }

    res.send({status: 200, message: 'success', data: query})
    return
  }catch(err){
    res.send({status: 200, message: 'failure', error: err})
    throw(err)
  }
}

const bulkDelete = async (req, res) => {
  try{

    if(!req.body.ids){
      res.send({status: 200, message: 'Missing ids payload', data: null})
      return
    }

    let inArray = req.body.ids.map(() => {
      return `(?)`
    })?.join(",")

    const query = await db.exec(`DELETE FROM users WHERE id IN (${inArray}) AND username != 'admin'`, req.body.ids, true)
    if(!query){
      res.send({status: 200, message: 'Query failed', data: null})
      return
    }

    if(query && query.affectedRows == 0){
      res.send({status: 200, message: 'No rows affected', data: query})
      return
    }

    res.send({status: 200, message: 'success', data: query})
    return
  }catch(err){
    res.send({status: 200, message: 'failure', error: err})
    throw(err)
  }
}

const createx = async (req, res, next) => {
  try{

  }catch(err){
    throw(err)
  }
}

module.exports = {
  bulkDelete,
  create,
  getAll,
  read,
  update,
  remove,
}