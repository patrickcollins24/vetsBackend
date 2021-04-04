'use strict';

const db = require('.conn');

class ProviderModel {
    constructor(id, first_name, last_name, mobile_number, city, state, zip_code, username, password ) {
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
}