'use strict';


const db = require('./conn');

class  AppointmentsModel {
    constructor(id, description, date, time, provider_name, location, user_id, provider_id) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.time = time;
        this.provider_name= provider_name;
        this.location = location;
        this.user_id = user_id;
        this.provider_id = provider_id;
    }

    static async getAppointmentsList() {
            const response = await db.any(`
            SELECT * FROM appointments;`);
            return response

    }
    static async getProviderAppointments(provider_id) {
        const providerAppointmentData = db.one(`
        SELECT * FROM appointments WHERE provider_id = ${provider_id}; `  
        );
        return providerAppointmentData
    }
    static async getUserAppointments(user_id) {
        const userAppointmentData = db.one(`
        SELECT * FROM appointments WHERE id = ${user_id}; `  
        );
        return userAppointmentData
    }

    static async addAppointments(description, date, time, provider_name, location, user_id, provider_id) {
        const response = await db.result(`INSERT INTO appointments ( description, date, time, provider_name, location, user_id, provider_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`,

        [description, date, time, provider_name, location, user_id, provider_id ]
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