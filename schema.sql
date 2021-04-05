CREATE TABLE users (
    id serial PRIMARY KEY,
    provider boolean,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text,
    username text,
    password varchar(100)
);

CREATE TABLE appointments (
    id serial PRIMARY KEY,
    description text,
    date integer,
    time integer,
    provider_name text,
    location text,
    user_id integer REFERENCES users (id)

);
CREATE TABLE events (
    id serial PRIMARY KEY,
    title text,
    description text,
    date integer,
    time integer,
    location text
);