# Backend API Documentation

## User Registration Endpoint

### Endpoint

`POST /users/register`

### Description

Registers a new user in the system by creating a user record with a full name, email address, and password. The API validates the incoming request body before creating the user and returns a JWT token on successful registration.

### Request Method

`POST`

### Base URL

`/users/register`

### Request Body

The request body must be sent as JSON.

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "123456"
}
```

### Required Fields

- `fullname` (object) - required
  - `firstname` (string) - required, minimum 3 characters
  - `lastname` (string) - optional, but ideally should be a valid name
- `email` (string) - required, must be a valid email format
- `password` (string) - required, minimum 6 characters

### Validation Rules

- `email` must be a valid email address
- `fullname.firstname` must be at least 3 characters long
- `password` must be at least 6 characters long

### Success Response

The endpoint returns a JSON object with a JWT token and the created user details.

#### Status Code

`201 Created`

Example response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDc2N2E0YzE4MWQ4ZTVjM2E0Yjk2NDEifQ.abc123xyz",
  "user": {
    "_id": "64c2d1f7d9a4b6e31345abc9",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

This means the user was successfully created and the server returned a valid authentication token that can be used in later requests.

### Error Responses

#### Invalid Request Data

#### Status Code

`400 Bad Request`

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Missing or Invalid Fields

If validation fails, the API returns a `400` status with a list of validation errors.

### Notes

- Passwords are hashed before being saved to the database.
- A JWT token is generated for the newly created user after successful registration.
- The endpoint uses `express-validator` for request validation.

---

## User Login Endpoint

### Endpoint

`POST /users/login`

### Description

Logs in an existing user by checking the submitted email and password. If the credentials are valid, the server returns a JWT token and the authenticated user information.

### Request Method

`POST`

### Request Body

The request body must be sent as JSON.

```json
{
  "email": "john.doe@example.com",
  "password": "123456"
}
```

### Required Fields

- `email` (string) - required, must be a valid email address
- `password` (string) - required, minimum 6 characters

### Validation Rules

- `email` must be a valid email address
- `password` must be at least 6 characters long

### Success Response

#### Status Code

`200 OK`

Example response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDc2N2E0YzE4MWQ4ZTVjM2E0Yjk2NDEifQ.abc123xyz",
  "user": {
    "_id": "64c2d1f7d9a4b6e31345abc9",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error Responses

#### Invalid Email or Password

#### Status Code

`401 Unauthorized`

```json
{
  "message": "Invalid email or Password"
}
```

#### Invalid Request Data

#### Status Code

`400 Bad Request`

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Notes

- The login route checks the saved user by email.
- The password is compared using the model method `comparePassword`.
- A token is generated after a successful login and returned to the client.

---

## User Profile Endpoint

### Endpoint

`GET /users/profile`

### Description

Returns the authenticated user's profile information from the JWT token attached to the request.

### Request Method

`GET`

### Authentication

This route requires a valid JWT token.

Include the token in the request headers:

```http
Authorization: Bearer <your_token>
```

### Success Response

#### Status Code

`200 OK`

Example response:

```json
{
  "_id": "64c2d1f7d9a4b6e31345abc9",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

### Error Responses

#### Unauthorized

#### Status Code

`401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

### Notes

- The authenticated user is attached to `req.user` by the auth middleware.
- This endpoint is used to fetch the current signed-in user's details.

---

## User Logout Endpoint

### Endpoint

`GET /users/logout`

### Description

Logs the user out by clearing the authentication cookie and blacklisting the current token.

### Request Method

`GET`

### Authentication

This route requires a valid JWT token.

Include the token in the request headers:

```http
Authorization: Bearer <your_token>
```

### Success Response

#### Status Code

`200 OK`

Example response:

```json
{
  "message": "Logged out successfully"
}
```

### Error Responses

#### Unauthorized

#### Status Code

`401 Unauthorized`

```json
{
  "message": "Unauthorized"
}
```

### Notes

- The server clears the `token` cookie from the client.
- The active token is added to the blacklist to prevent reuse after logout.
- This route is usually called after the user has already been authenticated.

---

## Captain Routes

Captain routes are mounted under the `/captains` base path.

### Captain Route Summary

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/captains/register` | Register a new captain |
| `POST` | `/captains/login` | Authenticate an existing captain |
| `GET` | `/captains/profile` | Return the authenticated captain |
| `GET` | `/captains/logout` | Blacklist the current token and clear the cookie |

### Captain Registration

#### Endpoint

`POST /captains/register`

#### Description

Registers a new captain with their personal details and vehicle information. The
request is validated with `express-validator` before registration is attempted.

#### Request Body (`application/json`)

The following JSONC example includes the requirements and constraints as comments:

```jsonc
{
  "fullname": {
    "firstname": "Alex", // Required; minimum 3 characters.
    "lastname": "Driver" // Optional.
  },
  "email": "alex.driver@example.com", // Required; must be a valid email.
  "password": "123456", // Required; minimum 6 characters.
  "vehicle": {
    "color": "Black", // Required; minimum 3 characters.
    "plate": "ABC-123", // Required; minimum 3 characters.
    "capacity": 4, // Required integer; minimum value is 1.
    "vehicleType": "car" // Required; car, motorcycle, or auto.
  }
}
```

#### Success Response

`201 Created`

The response contains an authentication token and the created captain:

```jsonc
{
  "token": "******", // JWT returned after successful registration.
  "captain": {
    "_id": "64c2d1f7d9a4b6e31345abc9",
    "fullname": {
      "firstname": "Alex",
      "lastname": "Driver"
    },
    "email": "alex.driver@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Captain Login

#### Endpoint

`POST /captains/login`

#### Request Body (`application/json`)

```jsonc
{
  "email": "alex.driver@example.com", // Required; must be a valid email.
  "password": "123456" // Required; minimum 6 characters.
}
```

#### Success Response

`200 OK`

```jsonc
{
  "token": "******", // JWT returned after successful login.
  "captain": {
    "_id": "64c2d1f7d9a4b6e31345abc9",
    "fullname": {
      "firstname": "Alex",
      "lastname": "Driver"
    },
    "email": "alex.driver@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Captain Profile

#### Request

`GET /captains/profile`

#### Request Body

```jsonc
{} // No request body is required for this GET endpoint.
```

Authentication is required. Send the JWT in a cookie or as a bearer token:

```http
Authorization: Bearer <jwt>
```

#### Response

`200 OK`

```jsonc
{
  "captain": {
    "_id": "64c2d1f7d9a4b6e31345abc9",
    "fullname": {
      "firstname": "Alex",
      "lastname": "Driver"
    },
    "email": "alex.driver@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Captain Logout

#### Request

`GET /captains/logout`

#### Request Body

```jsonc
{} // No request body is required for this GET endpoint.
```

Authentication is required. Send the JWT in a cookie or as a bearer token:

```http
Authorization: Bearer <jwt>
```

#### Response

`200 OK`

```jsonc
{
  "message": "Logout successfully" // Token is blacklisted and the cookie is cleared.
}
```

### Common Validation and Authentication Errors

#### Validation Error

`400 Bad Request`

```jsonc
{
  "errors": [
    {
      "msg": "Password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Invalid Credentials

`401 Unauthorized`

```jsonc
{
  "message": "Invalid email or Password"
}
```

#### Missing or Invalid Token

`401 Unauthorized`

```jsonc
{
  "message": "Unauthorized"
}
```

> JSONC comments are documentation only. Remove comments before sending these
> objects as strict JSON in an HTTP request.
