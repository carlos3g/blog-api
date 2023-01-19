<div align="center">
  <h1>
    Blog api
  </h1>
  <blockquote>
    A blog api with authentication and multiple users. Made with Nestjs.
  </blockquote>
  <div id="badges">
    <img src="https://img.shields.io/github/repo-size/carlos3g/blog-api?color=4000FF" alt="repo-size" />
    <img src="https://img.shields.io/github/issues-raw/carlos3g/blog-api?color=4000FF" alt="issues" />
    <img src="https://img.shields.io/badge/license-MIT-4000FF" alt="license" />
  </div>
</div>

<div align="center">

This is a blog rest api. Users can make posts, comments on posts and favorite posts made by other users. See [Features](#-features)

</div>

## Table of contents

- [Features](#-features)
- [How to run](#-how-to-run)
  - [With docker](#with-docker)
  - [Without docker](#without-docker)
- [Database Model](#-database-model)
- [Technologies](#-technologies)
- [Documentation](#-documentation)
- [How to contribute](#-how-to-contribute)
- [License](#-license)

## 💻 Features

- Authentication
- Favorite _posts_
- Create/Delete/Update/List _users_
- Create/Delete/Update/List _posts_
- Create/Delete/Update/List _comments_

## 🚀 How to run

> Before running the app, set up the `.env` file. See [.env.example](/.env.example)

### With docker

```bash
# Runs app (dev):
docker-compose up dev
```

### Without docker

```bash
# Installs dependencies:
yarn install

# Runs app (dev):
yarn dev:start
```

## 📝 Database model

> ER Diagram was made using [draw.io](https://draw.io)

![blog-api-mer](https://user-images.githubusercontent.com/52337966/213324344-9d55673a-7a9a-4ea6-8068-538c9a4bfc58.png)

## 🛠 Technologies

- API rest with `NestJs`
- Authentication with `JWT token`
- Validate requests with `class-validator`
- Handling database with `prisma`
- Documentation made with `swagger`

## 📝 Documentation

> Docs were made using swagger.

Documentation is served at route `/api-docs`. So just run the app and check it!

## 🤝 How to contribute

- Is there any problem? Found a bug? Do you have any tips? Open an [issue](https://github.com/carlos3g/quotes-api/issues) describing it.

- Want to contribute code? First read [this contribution guide](https://github.com/firstcontributions/first-contributions)

- Don't forget to leave your star ⭐, it is also a way to contribute to the project

## 📝 License

This project is under the MIT license. See [LICENSE](LICENSE) for more details.

---

<div align="center">

Created by [Carlos Mesquita](https://github.com/carlos3g) 💜

</div>
