# Daily Cloud API Documentation

## URL

- Development
  - `https://daily-cloud-api-dev-e5zoegfyha-et.a.run.app` : click [here](https://daily-cloud-api-dev-e5zoegfyha-et.a.run.app)

## Endpoints

### Users

| Method | Endpoint                 | Description         | Jump                       | Status |
| ------ | ------------------------ | ------------------- | -------------------------- | ------ |
| `GET`  | `/api/users/details`     | Get user details    | [Here](#get-user-details)  | ✅     |
| `PUT`  | `/api/users/update`      | Update user details | [Here](#update-user)       | ✅     |
| `POST` | `/api/users/signup`      | Sign up user        | [Here](#add-user-sign-up)  | ✅     |
| `POST` | `/api/users/uploadImage` | Upload user image   | [Here](#upload-user-image) | 🔄     |

### Journals

| Method | Endpoint            | Description      | Jump                      | Status |
| ------ | ------------------- | ---------------- | ------------------------- | ------ |
| `GET`  | `/api/journals`     | Get all journals | [Here](#get-all-journals) | 🔄     |
| `GET`  | `/api/journals/:id` | Detail Journal   | [Here](#detail-journal)   | 🔄     |
| `POST` | `/api/journals`     | Add new journal  | [Here](#add-new-journal)  | 🔄     |

### Quotes

| Method | Endpoint      | Description       | Jump                      | Status |
| ------ | ------------- | ----------------- | ------------------------- | ------ |
| `GET`  | `/api/quotes` | Get random quotes | [Here](#get-random-quote) | 🔄     |

### Articles

| Method | Endpoint            | Description       | Jump                      | Status |
| ------ | ------------------- | ----------------- | ------------------------- | ------ |
| `GET`  | `/api/articles`     | Get all articles  | [Here](#get-all-journals) | 🔄     |
| `GET`  | `/api/articles/:id` | Get article by ID | [Here](#get-all-journals) | 🔄     |

### Token Verification

| Method | Endpoint           | Description       | Jump                       | Status |
| ------ | ------------------ | ----------------- | -------------------------- | ------ |
| `GET`  | `/api/auth/verify` | Verify user token | [Here](#verify-user-token) | ✅     |

## Users API

### Get User Details

- Endpoint
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

### Update User

- Endpoint
  - `/api/users/update`
- Method
  - `PUT`
- Headers
  - `Authorization` : `Bearer <token>`
- Request Body
  - Updated data
  - `name` : `string`
  - `birthday` : `Timestamp` e.g `2001-01-01T00:00:00.000Z`
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

### Add User (Sign Up)

- Endpoint
  - `/api/users/signup`
- Method
  - `POST`
- Headers
  - `Authorization` : `Bearer <token>`
- Request Body
  - `name` : `string`
  - `email` : `string`
  - `password` : `string`
  - `birthday` : `Timestamp` e.g `2001-01-01T00:00:00.000Z`
- Response
  - Code : `201`
  - Content :
    ```json
    {
      "status": "success",
      "message": "User created successfully",
      "uid": "uQqLNwNlaNXqey7e165HCRjzSvF3"
    }
    ```

### Upload User Image

- Endpoint
  - `/api/users/uploadImage`
- Method
  - `POST`
- Headers
  - `Authorization` : `Bearer <token>`
- Request Body
  - `photo` : `file`, must be valid image file, max size `1MB`
- Response
  - Code : `201`
  - Content :
    ```json
    {
      "status": "success",
      "message": "Upload image success",
      "imageUrl": "example.com/image.jpg"
    }
    ```

## Journals API

### Get All Journals

- Endpoint
  - `/api/journals`
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
      "message": "Journals retrieved successfully",
      "data": [
        {
          "journalId": "1",
          "title": "Journal 1",
          "date": {
            "_seconds": 1009888496,
            "_nanoseconds": 0
          }
        },
        {
          "journalId": "2",
          "title": "Journal 2",
          "date": {
            "_seconds": 1009888496,
            "_nanoseconds": 0
          }
        }
      ]
    }
    ```

### Detail Journal

- Endpoint
  - `/api/journals/:id`
- Method
  - `GET`
- Headers
  - `Authorization` : `Bearer <token>`
- Response

  - Code : `200`
  - Content :

    ```json
    {
      "journalId": "1",
      "title": "Journal 1",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies",
      "createdAt": {
        "_seconds": 1009888496,
        "_nanoseconds": 0
      },
      "date": {
        "_seconds": 1009888496,
        "_nanoseconds": 0
      },
      "mood": "",
      "prediction": "",
      "userId": "uQqLNwNlaNXqey7e165HCRjzSvF3"
    }
    ```

### Add new Journal

- Endpoint
  - `/api/journals`
- Method
  - `POST`
- Headers
  - `Authorization` : `Bearer <token>`
- Request Body
  - Journal Data
  - `title` : `string`
  - `content` : `string`
  - `mood` : `string` if ml model is integrated
  - `prediction` : `string` if ml model is integrated
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

## Quotes API

### Get Random Quote

- Endpoint
  - `/api/quotes`
- Method
  - `GET`
- Headers
  - `Authorization` : `Bearer <token>`
- Response

  - Code : `200`
  - Content :

    ```json
    {
      "quoteId": "1",
      "author": "John Doe",
      "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies"
    }
    ```

## Articles API

### Get All Articles

- Endpoint
  - `/api/articles`
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
      "message": "Journals retrieved successfully",
      "data": [
        {
          "articleId": "1",
          "title": "Article 1",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies",
          "createdAt": {
            "_seconds": 1009888496,
            "_nanoseconds": 0
          }
        },
        {
          "articleId": "2",
          "title": "Article 2",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies",
          "createdAt": {
            "_seconds": 1009888496,
            "_nanoseconds": 0
          }
        }
      ]
    }
    ```

### Detail Article

- Endpoint
  - `/api/articles/:id`
- Method
  - `GET`
- Headers
  - `Authorization` : `Bearer <token>`
- Response

  - Code : `200`
  - Content :

    ```json
    {
      "articleId": "1",
      "title": "Article 1",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies",
      "createdAt": {
        "_seconds": 1009888496,
        "_nanoseconds": 0
      }
    }
    ```

## Token Verification API

### Verify User Token

- Endpoint
  - `/api/auth/verify`
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
      "message": "Token is valid"
    }
    ```
