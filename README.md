# Web POS API

This app will serve as the backend api server for a web point of sales.

## Technologies

* [![Node.js 20.11.1](https://img.shields.io/badge/node-20.11.1-brightgreen)](https://nodejs.org/en/blog/release/v20.11.1)
* [![Express 4.18.2](https://img.shields.io/badge/express-4.18.2-brightgreen)](https://www.npmjs.com/package/express)
* [![Typescript 5.3.3](https://img.shields.io/badge/typescript-5.3.3-brightgreen)](https://www.npmjs.com/package/typescript)
* [![NPM 10.2.4](https://img.shields.io/badge/npm-10.2.4-brightgreen)](https://www.npmjs.com/package/npm)

## Development Setup

Install [nvm](https://github.com/nvm-sh/nvm) and then install node 20.11.1 using it

    nvm i 20.11.1

Clone the project

    git clone https://<github-access-token>@github.com/madeelshabbir/web-pos-api.git

Go to the project directory

    cd web-pos-api

Copy `.env.example` to `.env`

      cp .env.example .env

- Update all missing values.

Install dependencies

    npm i

Start the app

    npm start
