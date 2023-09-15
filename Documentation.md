# API Documentation
## Introduction 

Welcome to the official documentation for my user management API, a tool for managing user data within an application. The API allows for seamless create, read, update and delete users records. This guide provides detailed information on API endpoints, request and response formats, sample usage scenarios and known limitations.

## Assumptions
The ID of every user is known and used to retrieve data.\
Each user knows their unique user ID.\
User IDs are unique and do not repeat across users.

## Standard Formats for request and Response
### Requests
#### Create a new user
**Endpoint:** post/api \
Request Body (JSON):
```
{
    "name" : user_name
}
```
#### Read a user
**Endpoint:** GET /api\
Request Body(JSON)
```
{
    "id" : user_id
}
```
#### Update a user
**Endpoint:** PUT /api/user_id \
Request Body (JSON)
```
{
    "id" : user_id
}
```
#### Delete a user
**Endpoint:** DELETE /api/user_id \
Request Body (JSON)
```
{
    "id" : user_id
}
```

### Responses
#### Create user
Success Response (HTTP status 201) \
Response Body (JSON) for GET requests:
```
{
    "id" : user_id,
    "name": user_name
}
```
Error Response (HTTP status 500)\
Response Body (JSON):
```
{
    "error": “internal server error”
}
```
### Read user
Success Response (HTTP status 200)\
Response Body (JSON):
```
{
    "id": user_id,
    "name": user_name
}
```
Error Response (HTTP status 500)\
Response Body (JSON):
```
{
   “error’: “internal server error” 
}
```
### Update user
Success Response (HTTP status 200)\
Response Body (JSON):
```
{
    "message": "user updated",
    "user": {
        "id": user_id,
        "name": user_name
    }
}
```
Error Response (HTTP status 500)\
Response Body (JSON):
```
{
   “error’: “internal server error” 
}
```
### Delete User
Success Response (HTTP status 200)\
Response Body (JSON):
```
{
    "message": "user deleted",
    "user": {
        "id": user_id,
        "name": user_name
    }
}
```
Error Response (HTTP status 500)\
Response Body (JSON):
```
{
   “error’: “internal server error” 
}
``````

## API  Sample usage 
### Create a user
POST /api \
content-Type:application/json
```
{
    “name” : “Eluupee”
}
```
Response (HTTP status 201):
```
{
    "message": "user added",
    "newUser": {
        "id": 71,
        "name": "Eluupee"
    }
}
```
### Read user
GET /api\
content-Type:application/json
```
{
    "id": 71
}
```
Response(HTTP status 200)
```
{
    "id": 71,
    "name: "Eluupee"
}
```
### Update user
PUT /api/user_id \
content-Type:application/json
```
{
    "id": 77,
    "name": "Obikekerenke"
}
```
Response(HTTP status 200)
```
{
    "message": "user updated",
    "user": {
        "id": 71,
        "name": "Obikekerenke"
    }
}
```
### Delete user
DELETE /api/user_id \
content-Type:application/json
```
{
    "id": 71
}
```
Response(HTTP status 200)
```
{
    "message": "user deleted",
    "user": {
        "id": 71,
        "name": "Obikekerenke"
    }
}
```

## Setting up and deploying the API locally or on a server.
### Prerequisites
- node.js installed
- npm installed
- Mongodb installed and running\

**Dependencies**
- express
- express-validator
- mongoose
### connection URL
Replace URI with your mongoDB connection URL
```
CONNECTIONSTRING = mongodb://localhost:port/database_name
```
### Port for Server
Start the API server
```
PORT=8080 
Start the API server: npm start 
The API should now be running locally on port 8080 (or the port specified in your .env file).
```
### Usage
API Endpoints The API provides the following endpoints for managing user data:
```
GET /api: Retrieve a user by their ID.\
POST /api: Add a new user.\
PUT /api/user_id: Update a user's information by their ID.\
DELETE /user_id: Delete a user by their ID.
```

### Deployment
To deploy this API in a production environment, follow these steps:\
* Host your database (e.g., MongoDB Atlas).\
* Set up environment variables for production in your hosting environment. \
* Deploy the API to a hosting platform (e.g., Heroku, AWS, Azure, render and any of your choice.). \
* Update the database connection URL in your production environment. \
* Ensure proper security measures (e.g., authentication and authorization) are in place to protect user data. 


