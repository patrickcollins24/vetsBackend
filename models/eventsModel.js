'use strict';

const db = require('./conn');

class EventsModel {
    constructor(id, title, description, date, time, location ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
        this.location = location;
    }

    static async getEventsList() {
        const response = await db.any(`
        SELECT * FROM events;`);
        return response

}
static async getEvents() {
    const EventData = db.one(`
    SELECT * FROM events WHERE id = ${id}; `  
    );
    return EventData
}

static async addEvents(title, description, date, time, location) {
    const response = await db.result(`INSERT INTO events ( title, description, date, time, location) VALUES ($1, $2, $3, $4, $5)`,

    [title, description, date, time, location ]
);
    return response;
}

static async deleteEvents(id) {
    const response = await db.result(`DELETE FROM events WHERE id = ${id}`);
    return response;
}

}

module.exports = EventsModel;