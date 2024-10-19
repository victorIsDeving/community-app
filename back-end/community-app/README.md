# Community App Backend

This is the backend for the Community App, built with Java Spring Boot and PostgreSQL. The backend provides APIs to support the application's functionality.

## Prerequisites

To run this project locally, you'll need to have the following installed:

- [Java 17](https://adoptium.net/) or later
- [Apache Maven](https://maven.apache.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

Follow these steps to get the backend up and running:

### 1. Clone the Repository

Clone this repository to your local machine:

bash
	git clone https://github.com/victorIsDeving/community-app.git
	cd community-app/back-end

### 2. Configure the Database
Make sure PostgreSQL is running.
Create a new database (e.g., community_app_db).
You can create the database using the following command:

sql
	CREATE DATABASE community_app_db;

Update the database configuration in src/main/resources/application.properties:
```
	spring.datasource.url=jdbc:postgresql://localhost:5432/community_app_db
	spring.datasource.username=your_db_username
	spring.datasource.password=your_db_password
	spring.jpa.hibernate.ddl-auto=update
```
Replace your_db_username and your_db_password with your PostgreSQL credentials.

### 3. Build the Project
Use Maven to build the project:

bash
	mvn clean install

### 4. Run the Application
Start the Spring Boot application:

bash
	mvn spring-boot:run

The backend should now be running at http://localhost:8080.

### 5. Test the API
You can test the API using a tool like Postman or by sending HTTP requests to the endpoints. For example:

GET http://localhost:8080/hello

Troubleshooting
If you encounter any issues, ensure the following:

The database configuration in `application.properties` is correct.

The PostgreSQL server is running and accessible.