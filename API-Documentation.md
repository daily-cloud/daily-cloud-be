# Daily Cloud API Documentation

## URL

- Development
  - `https://daily-cloud-be-7q3q3q3q3q-uc.a.run.app`

## Endpoints

| Method | Endpoint             | Description       | Jump                       |
| ------ | -------------------- | ----------------- | -------------------------- |
| `GET`  | `/api/users/details` | Get user details  | [Here](#get-user-details)  |
| `POST` | `/api/users/signup`  | Sign up user      | [Here](#add-user-sign-up)  |
| `GET`  | `/api/journals`      | Get all journals  | [Here](#get-all-journals)  |
| `GET`  | `/api/auth/verify`   | Verify user token | [Here](#verify-user-token) |

## Users API

### Get User Details

- URL
  - `/api/users/details`
- Method
  - `GET`
- Headers
  - `Authorization` : `Bearer <token>`
- Response
  - Code : `200`
  - Content :
    ```json
    {
      "status": "success",
      "message": "User details retrieved successfully",
      "data": {
        "uid": "uQqLNwNlaNXqey7e165HCRjzSvF3",
        "name": "Jane Doe",
        "email": "jane@example.com",
        "birthday": {
          "_seconds": 1009888496,
          "_nanoseconds": 0
        },
        "imageUrl": "none"
      }
    }
    ```

### Add User (Sign Up)

- URL
  - `/api/users/signup`
- Method
  - `POST`
- Headers
  - `Authorization` : `Bearer <token>`
- Response
  - Code : `200`
  - Content :
    ```json
    {
      "status": "success",
      "message": "User created successfully",
      "uid": "uQqLNwNlaNXqey7e165HCRjzSvF3"
    }
    ```

### Update User

- URL
  - `/api/users/update`
- Method
  - `PUT`
- Headers
  - `Authorization` : `Bearer <token>`
- Response
  - Code : `200`
  - Content :
    ```json
    {
      "status": "success",
      "message": "User details retrieved successfully",
      "data": {
        "uid": "uQqLNwNlaNXqey7e165HCRjzSvF3",
        "name": "Jane Doe II",
        "email": "jane@example.com",
        "birthday": {
          "_seconds": 1009888496,
          "_nanoseconds": 0
        },
        "imageUrl": "none"
      }
    }
    ```

## Journals API

_Will be updated_

## Quotes API

_Will be updated_
