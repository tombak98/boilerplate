const port = process.env.PORT || 3000;
const app = require('./app');
const db = require('./db')
const seed = require('../script/seed')

const init = async () => {
    try {
      //seed the database if env variable is true
      if (process.env.SEED === "true") {
        await seed();
      } else {
        await db.sync();
      }
      // start listening (and create a 'server' object representing our server)
      app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
    } catch (ex) {
      console.log(ex);
    }
  };
  
  init();


//dont touch me!