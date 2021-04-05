'use strict';

const db = require('.conn');

class EventsModel {
    constructor(id, title, description, date, time, location ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.mobile_number = mobile_number;
        this.city = city;
        this.state = state;
        this.zip_code = zip_code;
        this.username = username;
        this.password = password;
    }

    static async getEventsList() {
        const response = await db.any(`
        SELECT * FROM events;`);
        return response

}
static async getUserEvents() {
    const userEventData = db.one(`
    SELECT * FROM events WHERE id = ${user_id}; `  
    );
    return userEventData
}

static async addEvents(id, title, description, date, time, location) {
    const response = await db.result(`INSERT INTO events ( id, title, description, date, time, location) VALUES ($1, $2, $3, $4, $5, $6)`,

    [id, title, description, date, time, location ]
);
    return response;
}

static async deleteEvents(id) {
    const response = await db.result(`DELETE FROM events WHERE id = ${id}`);
    return response;
}

}