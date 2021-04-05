'use strict';


const db = require('./conn');

class  AppointmentsModel {
    constructor(id, description, date, time, provider_name, location, user_id) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.time = time;
        this.provider_name= provider_name;
        this.location = location;
        this.user_id = user_id;
    }

    static async getAppointmentsList() {
            const response = await db.any(`
            SELECT * FROM appointments;`);
            return response

    }
    static async getUserAppointments() {
        const userAppointmentData = db.one(`
        SELECT * FROM appointments WHERE id = ${user_id}; `  
        );
        return userAppointmentData
    }

    static async addAppointments(id, description, date, time, provider, location, user_id) {
        const response = await db.result(`INSERT INTO appointments ( id, description, date, time, provider, location, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`,

        [id, description, date, time, provider, location, user_id ]
    );
        return response;
    }

    //static async changeAppointments() {
        //const response = await db.result(` UPDATE appointments SET  = $1
        //WHERE id = $2 , 
        
        //[]`
        //);
       //     return response;
    //
    //}

    static async deleteAppointments(id) {
        const response = await db.result(`DELETE FROM appointments WHERE id = ${id}`);
        return response;
    }

}
module.exports = AppointmentsModel;