CREATE TABLE veteran_user (
    id serial PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    mobile_number integer,
    email text,
    city text,
    zip_code integer
    password varchar(100)
);
CREATE TABLE provider_user (
    id serial PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    mobile_number integer,
    email text,
    city text,
    zip_code integer,
    username text,
    password varchar(100)
);
CREATE TABLE assignment (
    id serial PRIMARY KEY,
    events text,
    appoinments text
);