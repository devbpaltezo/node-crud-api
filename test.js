const request = require('supertest');
const app = require('./index');

describe("Get All Users", () => {

	it('should get list of users from database', function (done) { 
    
		request(app)
      .get('/users')
      .expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				return done();
			});
		
  });

});

describe("Get User Data", () => {

	it('should get user data by user id', function (done) { 
    
		request(app)
      .get('/users/1')
      .expect(200)
			.end((err, res) => {
				if (err) {
					return done(err);
				}
				return done();
			});
		
  });

});

describe("Login as administrator", () => {

	it("should log in as administrator using username: admin, password: 12345", function(done){

		request(app).post('/users/admin/login')
		.send({
			"username": "admin",
			"password": "12345"
		})
		.expect(200)
		.end((err, res) => {
			if (err) {
				return done(err);
			}
			return done();
		});

	});

});


describe("Create a new user", () => {

	let token = ""

	before(function(done) {
    request(app)
      .post('/users/admin/login')
      .send({
				"username": "admin",
				"password": "12345"
			})
      .end(function(err, res) {
        token = res.body.token;
        return done();
      });
  });

	it("should create a new user to database", function(done) {

		request(app).post('/users')
		.set({ Authorization: token })
		.send({
			"firstName": "Mocha",
			"lastName": "User",
			"address": "Script testing",
			"postCode": 1111,
			"contact": "09876543210",
			"email": "email@gmail.com",
			"username": "test",
			"password": "password"
		})
		.expect(200)
		.end((err, res) => {
			if (err) {
				return done(err);
			}
			return done();
		});

	});

});

describe("Update an existing user", () => {

	let token = ""

	before(function(done) {
    request(app)
      .post('/users/admin/login')
      .send({
				"username": "admin",
				"password": "12345"
			})
      .end(function(err, res) {
        token = res.body.token;
        return done();
      });
  });

	it("should update the address of user1 to 'Manila'", function(done) {

		request(app).put('/users/1')
		.set({ Authorization: token })
		.send({ "address": "Manila"})
		.expect(200)
		.end((err, res) => {
			if (err) {
				return done(err);
			}
			return done();
		});

	});

});

describe("Delete an existing user", function(done){

	let token = ""

	before(function(done) {
    request(app)
      .post('/users/admin/login')
      .send({
				"username": "admin",
				"password": "12345"
			})
      .end(function(err, res) {
        token = res.body.token;
        return done();
      });
  });

	it("should delete the existing user (Mocha)", function(done) {

		request(app).delete('/users/8')
		.set({ Authorization: token })
		.expect(200)
		.end((err, res) => {
			if (err) {
				return done(err);
			}
			return done();
		});

	});

});


describe("Delete multiple users", function(done){

	let token = ""

	before(function(done) {
    request(app)
      .post('/users/admin/login')
      .send({
				"username": "admin",
				"password": "12345"
			})
      .end(function(err, res) {
        token = res.body.token;
        return done();
      });
  });

	it("should delete multipe users by sending array of user ids, [4,5,6]", function(done) {

		request(app).patch('/users/bulk')
		.set({ Authorization: token })
		.send({ "ids": [4,5,6] })
		.expect(200)
		.end((err, res) => {
			if (err) {
				return done(err);
			}
			return done();
		});

	});

});