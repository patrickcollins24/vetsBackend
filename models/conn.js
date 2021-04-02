const host = 'queenie.db.elephantsql.com',
    database = 'gbluamdp',
    user= 'gbluamdp',
    password = 'Gof18ZoYTO2ci_yUuZN651H4Vh6IVh-Q';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('Query:', event.query);
    }
});

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;