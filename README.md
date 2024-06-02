# MS-ABDULAH-WAHDI-BETEST

Repository for Task 2 of Technical Test Jenius. 

## Stack
Stack using:
 1. Express JS
 2. MongoDB
 3. Redis
 4. Kafka
 5. Docker

## Prerequisites

To run this application with Docker Compose, you need to have the following prerequisites installed on your system:

- [Docker Engine](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Additionally, ensure that you have internet access to download any required Docker images specified in the `docker-compose.yml` file.


## Usage

 1. Clone this repository
 2. Set up environment variables on  `docker-compose.yml` like `PORT`, `MONGO_URI`, `KAFKA_BROKER` , `JWT_SECRET` and `REDIS_URL`
		 Notes: if `PORT` change, please change to `ports` in `docker-compose.yml` and `EXPOSE` in `Dockerfile`
 3. Run `docker-compose up -d`
 4. As default application will be running on `PORT` 3000

## Endpoint

- Generate Token `POST /generate-token` 
		for get token to access CRUD Users. 
		Sample cUrl
```
curl --location --request POST 'localhost:3000/generate-token' 
```

- Get All User  `GET /users`
sample cUrl
```
curl --location --request GET 'http://localhost:3000/users/by-number/1234567890' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb20iOiJyMjMxZyIsImlhdCI6MTcxNzM0MDk5OSwiZXhwIjoxNzE3MzQ0NTk5fQ.AdZ6Kz0WD1iAACq8in65cXiSRJxiO7tqZ9NClF_Pi4Q'
```

- Get User by Account Number `GET /users/by-number/:accountNumber`
sample cUrl:
```
curl --location --request GET 'http://localhost:3000/users/by-number/1234567890' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb20iOiJyMjMxZyIsImlhdCI6MTcxNzM0MDk5OSwiZXhwIjoxNzE3MzQ0NTk5fQ.AdZ6Kz0WD1iAACq8in65cXiSRJxiO7tqZ9NClF_Pi4Q'
```
- Get User by IdentityNumber `GET /users/by-identity/:identityNumber`
sample cUrl
```
curl --location --request GET 'http://localhost:3000/users/by-identity/ID123456' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb20iOiJyMjMxZyIsImlhdCI6MTcxNzM0MDk5OSwiZXhwIjoxNzE3MzQ0NTk5fQ.AdZ6Kz0WD1iAACq8in65cXiSRJxiO7tqZ9NClF_Pi4Q'
```
- Add User `POST /users`
sample cUrl
```
curl --location 'http://localhost:3000/users' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb20iOiJyMjMxZyIsImlhdCI6MTcxNzM0MDk5OSwiZXhwIjoxNzE3MzQ0NTk5fQ.AdZ6Kz0WD1iAACq8in65cXiSRJxiO7tqZ9NClF_Pi4Q' \
--data-raw '{
        "userName": "John Doe",
        "accountNumber": "1234567890",
        "emailAddress": "john@example.com",
        "identityNumber": "ID123456"
      }'
```
- Edit User `PUT /users/:id`
sample cUrl
```
curl --location --request PUT 'http://localhost:3000/users/665c8b4fddfbd22f45af54ab' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb20iOiJyMjMxZyIsImlhdCI6MTcxNzM0MDk5OSwiZXhwIjoxNzE3MzQ0NTk5fQ.AdZ6Kz0WD1iAACq8in65cXiSRJxiO7tqZ9NClF_Pi4Q' \
--data-raw '{
        "userName": "Updated User Name",
        "emailAddress": "updateduser@example.com"
      }'
```
- Delete User `DELETE /users/:id`
sample cUrl
```
curl --location --request DELETE 'http://localhost:3000/users/665c8b4fddfbd22f45af54ab' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb20iOiJyMjMxZyIsImlhdCI6MTcxNzM0MDk5OSwiZXhwIjoxNzE3MzQ0NTk5fQ.AdZ6Kz0WD1iAACq8in65cXiSRJxiO7tqZ9NClF_Pi4Q'
```