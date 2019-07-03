module.exports = {
   development: {
     username:  "mattweiss" ,
     password: null,
     database:  "quantified_development" ,
     host:  "127.0.0.1" ,
     dialect:  "postgres" ,
     operatorsAliases: false
  },
   test: {
     username: process.env.USERNAME ,
     password: null,
     database:  "quantified_test" ,
     host:  "127.0.0.1" ,
     dialect:  "postgres" ,
     operatorsAliases: false
  },
   production: {
     username:  "mattweiss" ,
     password: null,
     database:  "quantified_production" ,
     host:  "127.0.0.1" ,
     dialect:  "postgres" ,
     operatorsAliases: false,
  }
}
