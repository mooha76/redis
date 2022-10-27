// Call Express Api.
const express = require('express');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
const app = express();


const router = require('./api/routes/auth');
const authenticate = require('authenticate')


	// if you are run behind a proxy(e.g nginx )
  // app.set('trust proxy', 1);
   const RedisStore = connectRedis(session);

   // configuration our redis 
   const redisclient = redis.createClient({
            port: 6379,
            host: 'localhost'  
    });

    // 2. configuratsion session middlewre
    
    app.use(session({
      store: new RedisStore({client: redisclient}),
      secret: 'mysecret',
      saveUninitialized: false,
      resave: false,
      name: ('sessionId'),
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 100 * 60 *30
      }
    
      
    }));





    // app.use(router);

    // router.post('/login', (req, res, next) => {
 
    //   const {username, password} = req;
    //      //check if te credintial are correct 
       
    //    // assume that the cridential are correct 
       
    //    req.session.clientId = Abc123;
    //    req.session.myNum = 5;
      
      
    //   // now yuo are login with the dashboard 
    //       res.json('you are  now login');
      
    //   });

    



    // // 4 plug in username middleware that will check if the user authenticated or not 
    // app.use((req, res, next) => {
    //   if (!req.session || !req.session.clientId){

    //     const err = new Error('you shall not pass login');
    //     err.statuscode = 401;
    //     next(err);

    //   }
    //   next();
    // });







    

      
      
      
      


   


  