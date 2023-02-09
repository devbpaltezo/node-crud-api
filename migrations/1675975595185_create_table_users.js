module.exports = {
    "up": `
        CREATE TABLE 
            users 
            (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                UNIQUE KEY id (id), 
                first_name VARCHAR(300),  
                last_name VARCHAR(300),
                address TEXT,
                post_code VARCHAR(4),
                contact VARCHAR(14),
                email VARCHAR(300),
                username VARCHAR(300),
                password TEXT
    )`,
    "down": "DROP TABLE users"
}