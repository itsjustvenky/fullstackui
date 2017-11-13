CREATE TABLE user (user_id INT AUTO_INCREMENT, 
					login VARCHAR(100), 
					name_1 VARCHAR(255), 
					name_2 VARCHAR(255), 
					address VARCHAR(255), 
					phone_1 VARCHAR(255), 
					email VARCHAR(255), 
					password VARCHAR(255),
					dob DATE, 
					type INT(2), 
					UNIQUE(login), 
					PRIMARY KEY (user_id)
);
INSERT INTO user (login, name_1, address, phone_1, email, password, dob, type) 
			VALUES ('admin', 'Administrator', ,'Bangalore','+911234345','gopikrishna.e84@gmail.com','MTBfYmFuZ2Fsb3JlXzEw', '1984-02-03',1);


CREATE TABLE policy(policy_no INT NOT NULL, 
					user_id INT,
					name VARCHAR(50), 
					amount_paid FLOAT(7,2), 
					end_date DATETIME, 
					policy_valid BIT,  
					PRIMARY KEY (policy_no),
					FOREIGN KEY (user_id) REFERENCES user(user_id)
);


CREATE TABLE login(user_id INT, 
				token VARCHAR(6),
				login_time DATETIME, 
				valid BIT);