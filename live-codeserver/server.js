require('dotenv').config({ path: '.env' });
    
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const Pusher = require('pusher');
    
    const app = express();
    
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.set('port', process.env.PORT || 5000);
    const server = app.listen(app.get('port'), () => {
      console.log(`Express running → PORT ${server.address().port}`);
    });