CREATE TABLE users (
    id serial PRIMARY KEY,
    provider text,
    veteran text,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text,
    username text,
    password varchar(100)
);

CREATE TABLE appointments (
    id serial PRIMARY KEY,
    date integer,
    time integer,
    description text,
    provider_name text,
    location text
);
CREATE TABLE events (
    id serial PRIMARY KEY,
    title text,
    date interger,
    time interger,
    description text,
    location text
);