[![BANK-API]](https://rtosin.herokuapp.com/)
This project is my implementation of a Bank-Api is an Non-Persistent Endpoint developed with NodeJs and Express.

Bank Api is a simple non persisten Api that simulate account Creation and some othjer basic functionalities .

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The project can be built with npm, so choose one of the approach bellow in case you don't have any installed on your system.

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

### Demo

* **Bank-api DEMO ** Deployed in Heroku. (https://rtosin.herokuapp.com/)

### Installing

To download the project follow the instructions bellow:

```
git clone https://github.com/ricatosin/bank-api.git

cd bank-api
```

Then install dependencies and run:

```
npm install
npm run start
```

### API Description

You can import POSTMAN JSON file from:
```
cd bank-api/postman_collections
```


Reset state before starting tests

```
POST /reset

200 OK
```

Get balance for non-existing account

```
GET /balance?account_id=1234

404 0
```

Create account with initial balance
```
POST /event {"type":"deposit", "destination":"100", "amount":10}

201 {"destination": {"id":"100", "balance":10}}
```

Deposit into existing account
```
POST /event {"type":"deposit", "destination":"100", "amount":10}

201 {"destination": {"id":"100", "balance":20}}
```

Get balance for existing account
```
GET /balance?account_id=100

200 20
```

Withdraw from non-existing account
```
POST /event {"type":"withdraw", "origin":"200", "amount":10}

404 0
```

Withdraw from existing account
```
POST /event {"type":"withdraw", "origin":"100", "amount":5}

201 {"origin": {"id":"100", "balance":15}}
```

Transfer from existing account
```
POST /event {"type":"transfer", "origin":"100", "amount":15, "destination":"300"}

201 {"origin": {"id":"100", "balance":0}, "destination": {"id":"300", "balance":15}}
```

Transfer from non-existing account
```
POST /event {"type":"transfer", "origin":"200", "amount":15, "destination":"300"}

404 0
```
## Versions

v1.0
* Default project implementation

## Authors

Ricardo Tosin 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
