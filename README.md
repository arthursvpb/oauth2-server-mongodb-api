# 💻 OAuth2 Server MongoDB API

This project is a Node.js API to simulate a secure bank environment. It is using OAuth2 Access Token to request operations and storing data to MongoDB.

## 🛠️ Tecnologies

This project was built using the following technologies:

- [OAuth2-Server](https://github.com/oauthjs/node-oauth2-server)
- [MongoDB](https://mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

## ▶️ Running

It is necessary having Git, MongoDB, Node and Yarn (you shouldn't use NPM in this project).

1. Clone this project.

```sh
git clone https://github.com/arthursvpb/OAuth2-Server-MongoDB-API.git
```

2. Install required packages.

```sh
yarn
```

3. Create `.env` file using `.env.example`.

4. Start the server.

```sh
yarn dev:server
```

## 🏁 Endpoints

### Authentication

| Method | Path         | Description                                         |
| :----- | :----------- | :-------------------------------------------------- |
| `POST` | ` /api/auth` | Authenticate the User and return token information. |

**Body example in `x-www-form-urlencoded`**:

- `username`: "146.282.284-00"
- `password`: "my-strong-password"
- `grant_type`: "password"
- `client_id`: "client_id"
- `client_secret`: "client_secret"

**Successful response example**:

```json
{
  "accessToken": "c24f807266f8b2d8d9b493f05130af272164b891",
  "accessTokenExpiresAt": "2021-05-13T15:45:06.736Z",
  "refreshToken": "d22c029956d43079804e92523f51d6ffde2dff74",
  "refreshTokenExpiresAt": "2021-05-27T14:45:06.736Z",
  "client": {
    "id": "client_id"
  },
  "user": {
    "username": "146.282.284-00"
  }
}
```

**After authentication, you must use `Bearer {accessToken}` on Authorization header.**

### Users

`POST /users` - Register a new user to database.

**Body example**:

- `name`: "Arthur Vasconcellos"
- `username`: "146.282.284-00"
- `password`: "my-strong-password"

`GET /users` - Show all users registered.

`GET /users/profile` - Show the current logged user.

### Transactions

`POST /transactions/debit` - Perform debit operation.

**Body example**:

- `amount`: 2000

`POST /transactions/credit` - Perform credit operation.

**Body example**:

- `amount`: 2000

`GET /transactions/history` - Show the history of debit and credit transactions.

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
