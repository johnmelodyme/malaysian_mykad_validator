import express from 'express';
import ic from '../lib/index.js';

//  heroku ps:scale web=1

let application = express();
let port = 3000 || 443;

application.use(express.json());
application.use(express.urlencoded({
    extended: (true),
}));

application.get('/validate', function (request, result) {
    result.set('Content-Type', 'application/json');


    let param = {
        ic: (request.query.ic),
    };

    result.json({
        result: new ic(param['ic']).validate(),
    });
});

application.set('port', 3000)

application.listen(port, function (err) {
    if (err) throe(err);
    console.log(`Running.....`);
});