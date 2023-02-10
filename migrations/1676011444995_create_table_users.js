module.exports = {
    "up": `INSERT INTO users (
            first_name,
            last_name,
            post_code,	
            address,	
            contact,	
            email,	
            username,	
            password
        ) VALUES (
            "Administrator",
            "Account",
            "1234",
            "Admin secret address",
            "91191191191",
            "admin@gmail.com",
            "admin",
            "12345"
        )`,
    "down": "DELETE users WHERE username = 'admin'"
}