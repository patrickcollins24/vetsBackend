const host = 'queenie.db.elephantsql.com',
    database = 'nqxvhdgn',
    user= 'nqxvhdgn',
    password = 'DosUvsNQ1qrqdHxiGoXJa0MWLpvra38n';

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