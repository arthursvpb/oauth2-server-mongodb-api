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

### Users

### Transactions

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
