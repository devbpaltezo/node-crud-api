# node-crud-api
REST API using Node JS and MySQL Database

## Installation

	clone repo, install node modules, initialize app

# To clone the repo:
	```
	$ git clone https://github.com/devbpaltezo/node-crud-api.git
	$ git checkout master
	```
# To install node modules
	```
	$ npm install
	```
# To initialize app
	```
 	$ npm start
	```

- The app will be listening at `http://localhost:3000`


## Basic Usage

	run migrations, run script tests, Postman(optional)


# Running Migrations:
	```
	$ npm run migrate
	```

# Running Script Tests:

**IMPORTANT** Terminate running server before initializing this command as it will also serve on the same port
	```
	$ npm test
	```



# API

 - GET ALL USERS
 - **GET** `http://localhost:3000/users`
 
 - GET USER DATA
 - **GET** `http://localhost:3000/users/1`

  - CREATE USER
  - **POST** `http://localhost:3000/users`
  - requires **Authorization Bearer Token**

  - UPDATE USER
  - **PUT** `http://localhost:3000/users/1`
  - requires **Authorization Bearer Token**

  - DELETE USER
  - **DELETE** `http://localhost:3000/users/1`
  - requires **Authorization Bearer Token**

  - DELETE MULTIPLE USERS
  - **POST** `http://localhost:3000/users/bulk`
  - requires **Authorization Bearer Token**

  - LOGIN AS ADMINISTRATOR
  - **POST** `http://localhost:3000/users/admin/login`
