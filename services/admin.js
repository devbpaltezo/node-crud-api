const db = require("./db");
const config = require('../config');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  try{

		const bearerHeader = req.headers['authorization']
		if(typeof bearerHeader !== 'undefined'){

			const token = bearerHeader.replace("Bearer ", "")
			jwt.verify(token, config.secret, (err, authData) => {
				if(err){
					res.status(403).send({status: 403, message: "Invalid token"})
				}else{
					next()
				}
			})

		}else{
			res.status(403).send({status: 403, message: 'Unauthorized'})
		}
  }catch(err){
    throw(err)
  }
}

const login = async (req, res, next) => {
  try{

		const query = await db.exec(`SELECT * FROM users WHERE username = ? AND password = ?`, [req.body.username, req.body.password])

		if(!query || query.length == 0){
			res.send({status: 200, message: "Invalid username or password"})
		}

		const data = query[0]

		jwt.sign({...data, timestamp: Date.now()}, config.secret, (err, token) => {
			res.send({status: 200, message: "success", token: `Bearer ${token}`, data})
		})

  }catch(err){
		res.send({status: 200, message: "failure", token: "", data: null})
    throw(err)
  }
}

module.exports = {
	authenticate,
	login
}