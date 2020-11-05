CREATE DATABASE moviescrud;

CREATE TABLE movies_table(
    id SERIAL PRIMARY KEY NOT NULL,
    movie_name VARCHAR NOT NULL,
    movie_duration numeric NOT NULL,
    movie_rating numeric NOT NULL,
    movie_year numeric NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT current_timestamp,
    updated_at timestamp with time zone NOT NULL DEFAULT current_timestamp
);


insert into movies_table(movie_name,movie_duration,movie_rating,movie_year)
values('avengers',190,3,2010);

-- sudo -i -u postgres for getting into postgres