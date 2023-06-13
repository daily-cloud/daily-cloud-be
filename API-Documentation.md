# Daily Cloud API Documentation

## URL

- Development
  - `https://daily-cloud-api-dev-e5zoegfyha-et.a.run.app` : click [here](https://daily-cloud-api-dev-e5zoegfyha-et.a.run.app)

## Endpoints

### Documentation

- `/docs` : click [here](https://daily-cloud-api-dev-e5zoegfyha-et.a.run.app/docs)

### Users

| Method | Endpoint                 | Description         | Jump                       | Status |
| ------ | ------------------------ | ------------------- | -------------------------- | ------ |
| `GET`  | `/api/users/details`     | Get user details    | [Here](#get-user-details)  | ✅     |
| `PUT`  | `/api/users/update`      | Update user details | [Here](#update-user)       | ✅     |
| `POST` | `/api/users/signup`      | Sign up user        | [Here](#add-user-sign-up)  | ✅     |
| `POST` | `/api/users/uploadImage` | Upload user image   | [Here](#upload-user-image) | 🔄     |

### Journals

| Method | Endpoint              | Description           | Jump                          | Status |
| ------ | --------------------- | --------------------- | ----------------------------- | ------ |
| `GET`  | `/api/journals`       | Get all journals      | [Here](#get-all-journals)     | ✅     |
| `GET`  | `/api/journals/check` | Check Today's Journal | [Here](#check-todays-journal) | ✅     |
| `GET`  | `/api/journals/:id`   | Detail Journal        | [Here](#detail-journal)       | ✅     |
| `POST` | `/api/journals`       | Add new journal       | [Here](#add-new-journal)      | ✅     |

### Quotes

| Method | Endpoint      | Description       | Jump                      | Status |
| ------ | ------------- | ----------------- | ------------------------- | ------ |
| `GET`  | `/api/quotes` | Get random quotes | [Here](#get-random-quote) | ✅     |

### Articles

| Method | Endpoint            | Description       | Jump                      | Status |
| ------ | ------------------- | ----------------- | ------------------------- | ------ |
| `GET`  | `/api/articles`     | Get all articles  | [Here](#get-all-journals) | ✅     |
| `GET`  | `/api/articles/:id` | Get article by ID | [Here](#get-all-journals) | ✅     |

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
        "email": "jane@example.com",
        "name": "Jane Doe",
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
  - `name` : `string`
  - `birthday` : `Firestore Timestamp` as `string` e.g `2001-01-01T00:00:00.000Z`
- Response
  - Code : `200`
  - Content :
    ```json
    {
      "status": "success",
      "message": "User details updated successfully",
      "data": {
        "uid": "uQqLNwNlaNXqey7e165HCRjzSvF3",
        "email": "jane@example.com",
        "name": "The Greate Jane Doe",
        "birthday": "2001-01-01T00:00:00.000Z",
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
  - `email` : `string` from firebase
  - `birthday` : `Firestore Timestamp` as `string` e.g `2001-01-01T00:00:00.000Z`
- Response
  - Code : `201`
  - Content :
    ```json
    {
      "status": "success",
      "message": "User created successfully",
      "uid": "TDj86DqKdgdBbmA7aIwvgwZ7TXt2"
    }
    ```

### Upload User Image (Soon)

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
  - `/api/journals?month=6&year=2023`, `month` & `year` is optional
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
      "journals": [
        {
          "activity": "Bermain Musik",
          "mood": "happy",
          "journalId": "1XEhWpqUOVGXSbqUqM8c",
          "prediction": {
            "confidenceScore": 0.2515876293182373,
            "depression": false
          },
          "userId": "uQqLNwNlaNXqey7e165HCRjzSvF3",
          "content": "Sangat melelahkan, tapi saya senang dan semangat",
          "date": {
            "_seconds": 1686021178,
            "_nanoseconds": 691000000
          }
        },
        {...}
      ]
    }
    ```

### Check Today's Journal

- Endpoint
  - `/api/journals/check`
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
      "message": "Journal found",
      "hasUploadedJournal": {
        "status": true,
        "journal": {
          "activity": "Tidur",
          "mood": "sad",
          "journalId": "xTaXMVGAHDx6eQ1PXfbX",
          "prediction": {
            "confidenceScore": 0.010815009474754333,
            "depression": false
          },
          "userId": "uQqLNwNlaNXqey7e165HCRjzSvF3",
          "content": "Hari ini saya merasa tidak enak hati, jadi saya tidur seharian untuk melepaskan kesedihanku.",
          "date": {
            "_seconds": 1686453949,
            "_nanoseconds": 110000000
          }
        }
      }
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
      "status": "success",
      "message": "Journal retrieved successfully",
      "journal": {
        "date": {
          "_seconds": 1684426261,
          "_nanoseconds": 537000000
        },
        "journalId": "mJ8pE01Le0tWtIs3279p",
        "prediction": {
          "confidenceScore": 0.09039796143770218,
          "depression": false
        },
        "activity": "Aktivitas",
        "content": "Saya sangat senang sekali",
        "mood": "happy",
        "userId": "uQqLNwNlaNXqey7e165HCRjzSvF3"
      }
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
  - `activity` : `string`
  - `content` : `string`
  - `mood` : `string` must be `happy` or `sad`
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
      "status": "success",
      "message": "Quote retrieved successfully",
      "quote": {
        "author": "Dan Millman",
        "qoute": "Kamu tidak harus mengendalikan pikiranmu. Kamu hanya harus berhenti membiarkan mereka mengendalikanmu",
        "quoteId": "83WzRzBG0POty1s5xKNh"
      }
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
      "message": "Articles retrieved successfully",
      "articles": [
        {
          "createdAt": {
            "_seconds": 1684427327,
            "_nanoseconds": 60000000
          },
          "articleId": "41rdq0oC0sHybR08ModW",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum quis justo ut aliquam. Donec pretium purus sed euismod volutpat. Sed ac efficitur mi. Praesent vitae lacus ac ex blandit tempor. Ut tincidunt magna at ipsum mattis rhoncus. Donec semper euismod dui, vel maximus nisi elementum vitae. Donec ultricies tristique metus, sed pharetra magna. Nunc vel mauris arcu.",
          "title": "Bagaimana mengenal diri sendiri"
        },
        {...},
        {...}
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
      "status": "success",
      "message": "Article with id: 41rdq0oC0sHybR08ModW retrieved successfully",
      "article": {
        "createdAt": {
          "_seconds": 1684427327,
          "_nanoseconds": 60000000
        },
        "articleId": "41rdq0oC0sHybR08ModW",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum quis justo ut aliquam. Donec pretium purus sed euismod volutpat. Sed ac efficitur mi. Praesent vitae lacus ac ex blandit tempor. Ut tincidunt magna at ipsum mattis rhoncus. Donec semper euismod dui, vel maximus nisi elementum vitae. Donec ultricies tristique metus, sed pharetra magna. Nunc vel mauris arcu.",
        "title": "Bagaimana mengenal diri sendiri"
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
